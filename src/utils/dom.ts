import { STYLE_ID } from '../theme/manager';
import type { ThemeManager } from '../theme/manager';

export function setupDOMObserver(themeManager: ThemeManager) {
  // Debounced MutationObserver: Feishu SPA triggers very frequent DOM mutations.
  // We only need to re-inject our <style> if it gets removed, so debounce 200ms
  let _observerTimer: number | null = null;
  
  const observer = new MutationObserver(() => {
    if (!themeManager.getIsEnabled()) return;
    if (document.getElementById(STYLE_ID)) return; // style still present, no-op
    
    if (_observerTimer) return; // debounce: already scheduled
    _observerTimer = window.setTimeout(() => {
      _observerTimer = null;
      if (themeManager.getIsEnabled() && !document.getElementById(STYLE_ID)) {
        themeManager.applyTheme();
      }
    }, 200);
  });

  // Observe only direct children of <html> (e.g. <head>, <body>).
  // This catches any case where our <style> tag gets removed during SPA navigation
  // without subscribing to the entire DOM subtree.
  observer.observe(document.documentElement, {
    childList: true,
    subtree: false,
  });

  return observer;
}

export function setupHotkeys(themeManager: ThemeManager) {
  window.addEventListener(
    "keydown",
    (e) => {
      if (e.altKey && e.shiftKey && e.key.toLowerCase() === "e") {
        themeManager.setEnabled(!themeManager.getIsEnabled());
      }
    },
    true
  );
}
