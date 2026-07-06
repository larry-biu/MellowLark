import { Theme, THEMES, DEFAULT_THEME } from './definitions';

export const STYLE_ID = 'mellowlark-theme-style';

function buildCSS(t: Theme): string {
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

export class ThemeManager {
  private currentThemeKey: string;
  private isEnabled: boolean;
  private autoDarkMode: boolean;
  private isSystemDark: boolean;
  
  // Callbacks to notify UI changes
  private onStateChange: () => void;

  constructor(onStateChange: () => void) {
    this.onStateChange = onStateChange;
    this.currentThemeKey = GM_getValue('mellowlark_theme_current', DEFAULT_THEME);
    this.isEnabled = GM_getValue('mellowlark_theme_enabled', true);
    this.autoDarkMode = GM_getValue('mellowlark_auto_dark_mode', false);
    
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.isSystemDark = mediaQuery.matches;

    // Listen for system theme changes
    mediaQuery.addEventListener('change', (e) => {
      this.isSystemDark = e.matches;
      if (this.isEnabled && this.autoDarkMode) {
        this.applyTheme();
        this.onStateChange();
      }
    });
  }

  public getIsEnabled(): boolean {
    return this.isEnabled;
  }

  public setEnabled(val: boolean) {
    this.isEnabled = val;
    GM_setValue('mellowlark_theme_enabled', val);
    if (val) {
      this.applyTheme();
    } else {
      this.removeStyle();
    }
    this.onStateChange();
  }

  public getCurrentThemeKey(): string {
    return this.currentThemeKey;
  }

  public setTheme(key: string) {
    if (THEMES[key]) {
      this.currentThemeKey = key;
      this.isEnabled = true;
      GM_setValue('mellowlark_theme_current', key);
      GM_setValue('mellowlark_theme_enabled', true);
      this.applyTheme();
      this.onStateChange();
    }
  }

  public getAutoDarkMode(): boolean {
    return this.autoDarkMode;
  }

  public setAutoDarkMode(val: boolean) {
    this.autoDarkMode = val;
    GM_setValue('mellowlark_auto_dark_mode', val);
    if (this.isEnabled) {
      this.applyTheme();
    }
    this.onStateChange();
  }

  public applyTheme() {
    if (!this.isEnabled) {
      this.removeStyle();
      return;
    }

    const themeGroup = THEMES[this.currentThemeKey] || THEMES[DEFAULT_THEME];
    const useDark = this.autoDarkMode && this.isSystemDark;
    const theme = useDark ? themeGroup.dark : themeGroup.light;
    
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

    const attrValue = useDark ? `${this.currentThemeKey}-dark` : this.currentThemeKey;
    if (document.documentElement.getAttribute("data-mellowlark-theme") !== attrValue) {
      document.documentElement.setAttribute("data-mellowlark-theme", attrValue);
    }
  }

  public removeStyle() {
    const style = document.getElementById(STYLE_ID);
    if (style) {
      style.remove();
    }
    document.documentElement.removeAttribute("data-mellowlark-theme");
  }
}
