# Contributing to MellowLark

Thank you for your interest in contributing to **MellowLark**! We want to make it easy and rewarding to contribute.

---

## 🕊️ Our Styling Philosophy

MellowLark focuses on **visual comfort** and **low-contrast readability**. When submitting visual or theme changes, please respect these guidelines:
1. **Reduce High Contrast**: Avoid stark black-and-white borders. Use soft mid-tones and cream-based variants.
2. **Minimal Intrusion**: Avoid styling buttons, images, SVGs, or media tags unless they are completely broken. The goal is to make Feishu Base comfortable, not to change Feishu's functionality.
3. **No External Network Requests**: Never fetch assets from external domains. All preset colors must be declared locally in the theme configuration dictionary.
4. **Performance First**: The script runs on highly dynamic, heavy SPA spreadsheet views. Minimize style recalculations and do not execute heavy operations in DOM change callbacks.

---

## 🛠️ Local Development Setup

To test changes locally in your browser:

1. Install Tampermonkey or Violentmonkey in your browser.
2. Open your extension's dashboard, create a new script.
3. Replace the script contents with the following development template (which loads your local repository script dynamically):
   ```javascript
   // ==UserScript==
   // @name         MellowLark (Local Dev)
   // @match        *://*.feishu.cn/*
   // @match        *://*.larksuite.com/*
   // @require      file:///path/to/your/cloned/repo/FeiShuSheetColor/color.js
   // @grant        GM_registerMenuCommand
   // @grant        GM_unregisterMenuCommand
   // @grant        GM_setValue
   // @grant        GM_getValue
   // @run-at       document-start
   // ==/UserScript==
   ```
4. *Note for Tampermonkey users:* You must enable **"Allow access to file URLs"** in your browser's extension settings (e.g. `chrome://extensions` -> Tampermonkey details -> enable toggle) to load local files via `@require file:///...`.
5. Edit `color.js` in your editor. Save, then reload any Feishu Base page to see your changes instantly.

---

## 🌿 Branching Policy & PRs

1. **Fork the repo** and create a feature branch (e.g., `feature/docs-support` or `fix/observer-leak`).
2. Implement your changes. Make sure code is formatted and clean.
3. Document your changes in the Pull Request description (mention what pages were tested and include screenshots/GIFs if you changed visual elements).
4. Submit your Pull Request against the `main` branch.

---

## 🎨 Adding a New Preset Theme

To add a new theme preset, append your configuration to the `THEMES` object inside [color.js](file:///Users/tantan/code/FeiShuSheetColor/color.js):

```javascript
  mytheme: {
    name: "🏷️ Theme Display Name",
    body: "#...",       // Page background
    base: "#...",       // Sheet main canvas background
    filler: "#...",     // Spacer columns / side bars
    header: "#...",     // Row/Column headers background
    textTitle: "#...",  // Prominent text colors
    textNormal: "#...", // Regular body text
    textMuted: "#...",  // Light/secondary text
    border: "#...",     // Grid lines
    selected: "#...",   // Highlighting selected cells
    hover: "#...",      // Cell highlight on hover
    focus: "#...",      // Keyboard focus border color
    link: "#...",       // Hyperlinks
  }
```
Ensure the names and text labels are clear and bilingual (e.g., "🏷️ Name / 名字").
