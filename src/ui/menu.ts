import { THEMES, DEFAULT_THEME } from '../theme/definitions';
import type { ThemeManager } from '../theme/manager';

export class MenuManager {
  private themeManager: ThemeManager;
  private activeMenuIds: any[] = [];

  constructor(themeManager: ThemeManager) {
    this.themeManager = themeManager;
  }

  public updateMenus() {
    // Unregister existing menu commands to prevent duplicate entries
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

    // Register style presets
    Object.keys(THEMES).forEach((key) => {
      const activeMark = (isEnabled && currentThemeKey === key) ? "✓ " : "  ";
      const id = GM_registerMenuCommand(
        `${activeMark}${THEMES[key].light.name}`,
        () => this.themeManager.setTheme(key)
      );
      this.activeMenuIds.push(id);
    });

    // Auto Dark Mode toggle
    const autoDarkLabel = isAutoDark ? "🌙 Auto Dark Mode: ON" : "🌙 Auto Dark Mode: OFF";
    const autoDarkId = GM_registerMenuCommand(autoDarkLabel, () => {
      this.themeManager.setAutoDarkMode(!isAutoDark);
    });
    this.activeMenuIds.push(autoDarkId);

    // Register toggle enable/disable command
    const toggleLabel = isEnabled ? "⏹ Disable Theme / 关闭主题" : "▶ Enable Theme / 开启主题";
    const toggleId = GM_registerMenuCommand(toggleLabel, () => this.themeManager.setEnabled(!isEnabled));
    this.activeMenuIds.push(toggleId);

    // Register reset to default
    const resetId = GM_registerMenuCommand("🔄 Reset to Paper / 恢复默认", () => {
      this.themeManager.setTheme(DEFAULT_THEME);
      this.themeManager.setAutoDarkMode(false);
    });
    this.activeMenuIds.push(resetId);
  }
}
