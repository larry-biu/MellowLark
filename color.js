// ==UserScript==
// @name         MellowLark - Feishu/Lark Base Visual Comfort Theme
// @name:zh-CN   MellowLark - 飞书多维表格视觉舒适主题
// @namespace    https://github.com/mellow-theme/MellowLark
// @version      0.3.0
// @description  A visually gentle, low-contrast comfort theme for Lark & Feishu Base. Includes Paper, Mint, and Silver presets. Switch themes instantly via menu or Alt+Shift+E. No data collection, no network requests — CSS only.
// @description:zh-CN 为飞书/Lark 多维表格打造的低对比度、柔和视觉舒适主题：包含纸墨、薄荷、云灰三套主题，支持菜单切换、快捷开关、免刷新即时更新。纯 CSS 注入，不收集数据，不请求网络。
// @author       Larry
// @homepageURL  https://github.com/mellow-theme/MellowLark
// @supportURL   https://github.com/mellow-theme/MellowLark/issues
// @updateURL    https://raw.githubusercontent.com/mellow-theme/MellowLark/main/color.js
// @downloadURL  https://raw.githubusercontent.com/mellow-theme/MellowLark/main/color.js
// @match        *://*.feishu.cn/*
// @match        *://*.larksuite.com/*
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-start
// @license      MIT
// ==/UserScript==

(function () {
  "use strict";

  const STYLE_ID = "mellowlark-theme-style";
  const STORAGE_THEME = "mellowlark_theme_current";
  const STORAGE_ENABLED = "mellowlark_theme_enabled";

  const DEFAULT_THEME = "paper";

  // Caching GM storage values to avoid synchronous DB queries during DOM mutations
  let isEnabled = GM_getValue(STORAGE_ENABLED, true);
  let currentThemeKey = GM_getValue(STORAGE_THEME, DEFAULT_THEME);

  const THEMES = {
    paper: {
      name: "🌾 Paper / 纸墨",
      body: "#F4F0E6",
      base: "#FDFBF7",
      filler: "#EFECE1",
      header: "#F1E8D7",
      textTitle: "#2B2B2B",
      textNormal: "#3D3D3D",
      textMuted: "#6B6258",
      border: "#D5D1C4",
      selected: "#E3DEC9",
      hover: "#F0EDE1",
      focus: "#9E8055",
      link: "#1A73E8",
    },

    mint: {
      name: "🌿 Mint / 薄荷",
      body: "#EAF1EC",
      base: "#F0F4F1",
      filler: "#E2ECE5",
      header: "#DDEBE1",
      textTitle: "#1C2D22",
      textNormal: "#263B2D",
      textMuted: "#607268",
      border: "#BFD2C3",
      selected: "#D4E6D8",
      hover: "#E6F0E9",
      focus: "#4F7C5F",
      link: "#1769E0",
    },

    silver: {
      name: "☁️ Silver / 云灰",
      body: "#EEF2F5",
      base: "#F8FAFC",
      filler: "#E8EEF4",
      header: "#E5EBF1",
      textTitle: "#2C3440",
      textNormal: "#364152",
      textMuted: "#6B7788",
      border: "#CDD6DF",
      selected: "#DDE7F3",
      hover: "#EDF3F8",
      focus: "#4C7FB8",
      link: "#1769E0",
    },
  };

  function buildCSS(t) {
    return `
      :root {
        --bg-body: ${t.body} !important;
        --bg-base: ${t.base} !important;
        --bg-filler: ${t.filler} !important;
        --text-title: ${t.textTitle} !important;
        --text-normal: ${t.textNormal} !important;
        --line-border: ${t.border} !important;
        --cell-selected-bg: ${t.selected} !important;
        --cell-hover-bg: ${t.hover} !important;

        --ec-bg-body: ${t.body} !important;
        --ec-bg-base: ${t.base} !important;
        --ec-bg-filler: ${t.filler} !important;
        --ec-bg-header: ${t.header} !important;
        --ec-text-title: ${t.textTitle} !important;
        --ec-text-normal: ${t.textNormal} !important;
        --ec-text-muted: ${t.textMuted} !important;
        --ec-border: ${t.border} !important;
        --ec-selected: ${t.selected} !important;
        --ec-hover: ${t.hover} !important;
        --ec-focus: ${t.focus} !important;
        --ec-link: ${t.link} !important;
      }

      html,
      body {
        background-color: var(--ec-bg-body) !important;
      }

      /* Note: inline [style*="background"] selectors removed — too fragile for SPA.
         Coverage is handled by role/aria selectors and CSS variable overrides above. */

      [role="grid"],
      [role="table"] {
        background-color: var(--ec-bg-base) !important;
        border-color: var(--ec-border) !important;
      }

      [role="row"],
      [role="gridcell"],
      [role="columnheader"],
      [role="cell"] {
        border-color: var(--ec-border) !important;
      }

      [role="gridcell"],
      [role="cell"] {
        background-color: var(--ec-bg-base) !important;
        color: var(--ec-text-normal) !important;
      }

      [role="columnheader"] {
        background-color: var(--ec-bg-filler) !important;
        color: var(--ec-text-title) !important;
      }

      [role="row"]:hover [role="gridcell"],
      [role="gridcell"]:hover,
      [role="cell"]:hover {
        background-color: var(--ec-hover) !important;
      }

      [aria-selected="true"] {
        background-color: var(--ec-selected) !important;
      }

      :is(
        [class*="grid"],
        [class*="Grid"],
        [class*="table"],
        [class*="Table"],
        [class*="sheet"],
        [class*="Sheet"]
      ) {
        border-color: var(--ec-border) !important;
      }

      :is(
        [class*="cell"],
        [class*="Cell"],
        [class*="header"],
        [class*="Header"],
        [class*="toolbar"],
        [class*="Toolbar"]
      ):not(button):not([role="button"]) {
        border-color: var(--ec-border) !important;
      }

      input,
      textarea,
      [contenteditable="true"] {
        background-color: var(--ec-bg-base) !important;
        color: var(--ec-text-normal) !important;
        border-color: var(--ec-border) !important;
        caret-color: var(--ec-focus) !important;
      }

      input::placeholder,
      textarea::placeholder {
        color: var(--ec-text-muted) !important;
      }

      a {
        color: var(--ec-link) !important;
      }

      :is(
        input,
        textarea,
        select,
        [contenteditable="true"],
        [tabindex]
      ):focus-visible {
        outline: 2px solid var(--ec-focus) !important;
        outline-offset: 1px !important;
      }

      :is(
        [role="dialog"],
        [role="menu"],
        [class*="popover"],
        [class*="Popover"],
        [class*="dropdown"],
        [class*="Dropdown"],
        [class*="modal"],
        [class*="Modal"],
        [class*="drawer"],
        [class*="Drawer"]
      ):not(button):not([role="button"]) {
        background-color: var(--ec-bg-base) !important;
        color: var(--ec-text-normal) !important;
        border-color: var(--ec-border) !important;
      }

      button,
      [role="button"],
      svg,
      img,
      video,
      canvas {
        filter: none !important;
      }
    `;
  }

  function getActiveTheme() {
    return THEMES[currentThemeKey] ? THEMES[currentThemeKey] : THEMES[DEFAULT_THEME];
  }

  function ensureStyle() {
    if (!isEnabled) {
      removeStyle();
      return;
    }

    const theme = getActiveTheme();
    let style = document.getElementById(STYLE_ID);

    if (!style) {
      style = document.createElement("style");
      style.id = STYLE_ID;
      document.documentElement.appendChild(style);
    }

    const targetCSS = buildCSS(theme);
    if (style.textContent !== targetCSS) {
      style.textContent = targetCSS;
    }

    if (document.documentElement.getAttribute("data-mellowlark-theme") !== currentThemeKey) {
      document.documentElement.setAttribute("data-mellowlark-theme", currentThemeKey);
    }
  }

  function removeStyle() {
    const style = document.getElementById(STYLE_ID);
    if (style) {
      style.remove();
    }
    document.documentElement.removeAttribute("data-mellowlark-theme");
  }

  function switchTheme(key) {
    if (THEMES[key]) {
      currentThemeKey = key;
      isEnabled = true;
      GM_setValue(STORAGE_THEME, key);
      GM_setValue(STORAGE_ENABLED, true);
      ensureStyle();
      updateMenus();
    }
  }

  function setEnabled(val) {
    isEnabled = val;
    GM_setValue(STORAGE_ENABLED, val);
    if (val) {
      ensureStyle();
    } else {
      removeStyle();
    }
    updateMenus();
  }

  let activeMenuIds = [];

  function updateMenus() {
    // Unregister existing menu commands to prevent duplicate entries
    if (typeof GM_unregisterMenuCommand === "function") {
      activeMenuIds.forEach((id) => {
        try {
          GM_unregisterMenuCommand(id);
        } catch (e) {
          console.warn("MellowLark: Menu command unregister failed", e);
        }
      });
      activeMenuIds = [];
    }

    // Register style presets
    Object.keys(THEMES).forEach((key) => {
      const activeMark = isEnabled && currentThemeKey === key ? "✓ " : "  ";
      const id = GM_registerMenuCommand(
        `${activeMark}${THEMES[key].name}`,
        () => switchTheme(key)
      );
      activeMenuIds.push(id);
    });

    // Register toggle enable/disable command
    const toggleLabel = isEnabled ? "⏹ Disable Theme / 关闭主题" : "▶ Enable Theme / 开启主题";
    const toggleId = GM_registerMenuCommand(toggleLabel, () => setEnabled(!isEnabled));
    activeMenuIds.push(toggleId);

    // Register reset to default
    const resetId = GM_registerMenuCommand("🔄 Reset to Paper / 恢复默认", () => {
      switchTheme(DEFAULT_THEME);
    });
    activeMenuIds.push(resetId);
  }

  // Hotkey binding: Alt+Shift+E toggles style active state
  window.addEventListener(
    "keydown",
    (e) => {
      if (e.altKey && e.shiftKey && e.key.toLowerCase() === "e") {
        setEnabled(!isEnabled);
      }
    },
    true
  );

  // Debounced MutationObserver: Feishu SPA triggers very frequent DOM mutations.
  // We only need to re-inject our <style> if it gets removed, so debounce 200ms
  // to avoid running ensureStyle() on every single DOM update.
  let _observerTimer = null;
  const observer = new MutationObserver(() => {
    if (!isEnabled) return;
    if (document.getElementById(STYLE_ID)) return; // style still present, no-op
    if (_observerTimer) return; // debounce: already scheduled
    _observerTimer = setTimeout(() => {
      _observerTimer = null;
      if (isEnabled && !document.getElementById(STYLE_ID)) {
        ensureStyle();
      }
    }, 200);
  });

  // Initialize
  ensureStyle();
  updateMenus();

  // Observe only direct children of <html> (e.g. <head>, <body>).
  // This catches any case where our <style> tag gets removed during SPA navigation
  // without subscribing to the entire DOM subtree.
  observer.observe(document.documentElement, {
    childList: true,
    subtree: false,
  });
})();
