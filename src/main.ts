import { ThemeManager } from './theme/manager';
import { MenuManager } from './ui/menu';
import { setupDOMObserver, setupHotkeys } from './utils/dom';

function bootstrap() {
  // Initialize Managers
  // When theme state changes, we want to update the menus
  let menuManager: MenuManager;
  
  const themeManager = new ThemeManager(() => {
    if (menuManager) {
      menuManager.updateMenus();
    }
  });

  menuManager = new MenuManager(themeManager);

  // Apply initial theme
  themeManager.applyTheme();
  
  // Register menus
  menuManager.updateMenus();

  // Setup DOM Observers and Hotkeys
  setupDOMObserver(themeManager);
  setupHotkeys(themeManager);
}

// Ensure it runs
bootstrap();
