// ==UserScript==
// @name         MellowLark - Feishu/Lark Base Visual Comfort Theme
// @namespace    https://github.com/larry-biu/MellowLark
// @version      0.4.0
// @author       Larry
// @description  A visually gentle, low-contrast comfort theme for Lark & Feishu Base. Includes Paper, Mint, and Silver presets. Switch themes instantly via menu or Alt+Shift+E. No data collection, no network requests — CSS only.
// @license      MIT
// @homepageURL  https://github.com/larry-biu/MellowLark
// @supportURL   https://github.com/larry-biu/MellowLark/issues
// @downloadURL  https://raw.githubusercontent.com/larry-biu/MellowLark/main/dist/feishu-better-theme.user.js
// @updateURL    https://raw.githubusercontent.com/larry-biu/MellowLark/main/dist/feishu-better-theme.user.js
// @match        *://*.feishu.cn/*
// @match        *://*.larksuite.com/*
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @run-at       document-start
// ==/UserScript==

(function() {
	"use strict";
	var THEMES = {
		paper: {
			light: {
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
				link: "#1A73E8"
			},
			dark: {
				name: "🌾 Paper Dark / 暗纸墨",
				body: "#2D2924",
				base: "#24211D",
				filler: "#35302A",
				header: "#3A342E",
				textTitle: "#E5E1D5",
				textNormal: "#C8C4B9",
				textMuted: "#9B968B",
				border: "#4F473E",
				selected: "#473F36",
				hover: "#38322B",
				focus: "#B39669",
				link: "#4DA5FF"
			}
		},
		mint: {
			light: {
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
				link: "#1769E0"
			},
			dark: {
				name: "🌿 Mint Dark / 暗薄荷",
				body: "#1C2621",
				base: "#171F1B",
				filler: "#222E28",
				header: "#28362F",
				textTitle: "#D6E5DB",
				textNormal: "#B6CCBE",
				textMuted: "#849E8F",
				border: "#3F574A",
				selected: "#374D41",
				hover: "#25342C",
				focus: "#6CA983",
				link: "#4DA5FF"
			}
		},
		silver: {
			light: {
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
				link: "#1769E0"
			},
			dark: {
				name: "☁️ Silver Dark / 暗云灰",
				body: "#23272C",
				base: "#1E2226",
				filler: "#2B3138",
				header: "#323942",
				textTitle: "#E0E7F0",
				textNormal: "#B5C1CF",
				textMuted: "#8A97A6",
				border: "#475363",
				selected: "#3B4553",
				hover: "#29303A",
				focus: "#6496D4",
				link: "#4DA5FF"
			}
		}
	};
	var DEFAULT_THEME = "paper";
	var STYLE_ID = "mellowlark-theme-style";
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
       Coverage is handled by role/aria/data-testid selectors and CSS variable overrides. */

    [role="grid"],
    [role="table"],
    [data-testid="base-sheet-grid"] {
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

    [aria-selected="true"],
    [data-selected="true"] {
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
	var ThemeManager = class {
		currentThemeKey;
		isEnabled;
		autoDarkMode;
		isSystemDark;
		onStateChange;
		constructor(onStateChange) {
			this.onStateChange = onStateChange;
			this.currentThemeKey = GM_getValue("mellowlark_theme_current", DEFAULT_THEME);
			this.isEnabled = GM_getValue("mellowlark_theme_enabled", true);
			this.autoDarkMode = GM_getValue("mellowlark_auto_dark_mode", false);
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			this.isSystemDark = mediaQuery.matches;
			mediaQuery.addEventListener("change", (e) => {
				this.isSystemDark = e.matches;
				if (this.isEnabled && this.autoDarkMode) {
					this.applyTheme();
					this.onStateChange();
				}
			});
		}
		getIsEnabled() {
			return this.isEnabled;
		}
		setEnabled(val) {
			this.isEnabled = val;
			GM_setValue("mellowlark_theme_enabled", val);
			if (val) this.applyTheme();
			else this.removeStyle();
			this.onStateChange();
		}
		getCurrentThemeKey() {
			return this.currentThemeKey;
		}
		setTheme(key) {
			if (THEMES[key]) {
				this.currentThemeKey = key;
				this.isEnabled = true;
				GM_setValue("mellowlark_theme_current", key);
				GM_setValue("mellowlark_theme_enabled", true);
				this.applyTheme();
				this.onStateChange();
			}
		}
		getAutoDarkMode() {
			return this.autoDarkMode;
		}
		setAutoDarkMode(val) {
			this.autoDarkMode = val;
			GM_setValue("mellowlark_auto_dark_mode", val);
			if (this.isEnabled) this.applyTheme();
			this.onStateChange();
		}
		applyTheme() {
			if (!this.isEnabled) {
				this.removeStyle();
				return;
			}
			const themeGroup = THEMES[this.currentThemeKey] || THEMES["paper"];
			const useDark = this.autoDarkMode && this.isSystemDark;
			const theme = useDark ? themeGroup.dark : themeGroup.light;
			let style = document.getElementById(STYLE_ID);
			if (!style) {
				style = document.createElement("style");
				style.id = STYLE_ID;
				document.documentElement.appendChild(style);
			}
			const targetCSS = buildCSS(theme);
			if (style.textContent !== targetCSS) style.textContent = targetCSS;
			const attrValue = useDark ? `${this.currentThemeKey}-dark` : this.currentThemeKey;
			if (document.documentElement.getAttribute("data-mellowlark-theme") !== attrValue) document.documentElement.setAttribute("data-mellowlark-theme", attrValue);
		}
		removeStyle() {
			const style = document.getElementById(STYLE_ID);
			if (style) style.remove();
			document.documentElement.removeAttribute("data-mellowlark-theme");
		}
	};
	var MenuManager = class {
		themeManager;
		activeMenuIds = [];
		constructor(themeManager) {
			this.themeManager = themeManager;
		}
		updateMenus() {
			if (typeof GM_unregisterMenuCommand === "function") {
				this.activeMenuIds.forEach((id) => {
					try {
						GM_unregisterMenuCommand(id);
					} catch (e) {
						console.warn("MellowLark: Menu command unregister failed", e);
					}
				});
				this.activeMenuIds = [];
			}
			const isEnabled = this.themeManager.getIsEnabled();
			const currentThemeKey = this.themeManager.getCurrentThemeKey();
			const isAutoDark = this.themeManager.getAutoDarkMode();
			Object.keys(THEMES).forEach((key) => {
				const activeMark = isEnabled && currentThemeKey === key ? "✓ " : "  ";
				const id = GM_registerMenuCommand(`${activeMark}${THEMES[key].light.name}`, () => this.themeManager.setTheme(key));
				this.activeMenuIds.push(id);
			});
			const autoDarkLabel = isAutoDark ? "🌙 Auto Dark Mode: ON" : "🌙 Auto Dark Mode: OFF";
			const autoDarkId = GM_registerMenuCommand(autoDarkLabel, () => {
				this.themeManager.setAutoDarkMode(!isAutoDark);
			});
			this.activeMenuIds.push(autoDarkId);
			const toggleLabel = isEnabled ? "⏹ Disable Theme / 关闭主题" : "▶ Enable Theme / 开启主题";
			const toggleId = GM_registerMenuCommand(toggleLabel, () => this.themeManager.setEnabled(!isEnabled));
			this.activeMenuIds.push(toggleId);
			const resetId = GM_registerMenuCommand("🔄 Reset to Paper / 恢复默认", () => {
				this.themeManager.setTheme(DEFAULT_THEME);
				this.themeManager.setAutoDarkMode(false);
			});
			this.activeMenuIds.push(resetId);
		}
	};
	function setupDOMObserver(themeManager) {
		let _observerTimer = null;
		const observer = new MutationObserver(() => {
			if (!themeManager.getIsEnabled()) return;
			if (document.getElementById("mellowlark-theme-style")) return;
			if (_observerTimer) return;
			_observerTimer = window.setTimeout(() => {
				_observerTimer = null;
				if (themeManager.getIsEnabled() && !document.getElementById("mellowlark-theme-style")) themeManager.applyTheme();
			}, 200);
		});
		observer.observe(document.documentElement, {
			childList: true,
			subtree: false
		});
		return observer;
	}
	function setupHotkeys(themeManager) {
		window.addEventListener("keydown", (e) => {
			if (e.altKey && e.shiftKey && e.key.toLowerCase() === "e") themeManager.setEnabled(!themeManager.getIsEnabled());
		}, true);
	}
	function bootstrap() {
		let menuManager;
		const themeManager = new ThemeManager(() => {
			if (menuManager) menuManager.updateMenus();
		});
		menuManager = new MenuManager(themeManager);
		themeManager.applyTheme();
		menuManager.updateMenus();
		setupDOMObserver(themeManager);
		setupHotkeys(themeManager);
	}
	bootstrap();
})();
