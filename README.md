<p align="center">
  <img src="assets/logo.png" alt="MellowLark Logo" width="96" />
</p>

# MellowLark

<p align="center">
  <img src="assets/banner.png" alt="MellowLark Banner" width="100%" />
</p>

<p align="center">
  <strong>A visually gentle, low-contrast theme for Lark & Feishu Base. Crafted for comfort.</strong><br>
  为飞书/Lark 多维表格打造的低对比度、柔和视觉舒适主题。
</p>

<p align="center">
  <a href="https://github.com/mellow-theme/MellowLark/blob/main/LICENSE"><img src="https://img.shields.io/github/license/mellow-theme/MellowLark?style=flat-square" alt="License"></a>
  <a href="https://greasyfork.org/scripts/xxxx-mellowlark"><img src="https://img.shields.io/badge/GreasyFork-Install-green?style=flat-square" alt="GreasyFork"></a>
  <img src="https://img.shields.io/badge/Version-v0.3.0-blue?style=flat-square" alt="Version">
</p>

---

## 📖 Introduction / 项目介绍

**MellowLark** is a Tampermonkey userscript designed to improve visual comfort when working with **Lark Base & Feishu Base (多维表格)** for long periods. 

Rather than modifying database logic or data, **MellowLark** gently optimizes the DOM styles by injecting custom HSL/RGB CSS variables. It replaces high-contrast grids and bright white background areas with soft, curated, low-contrast color palettes.

> [!NOTE]
> **MellowLark is a comfort theme, not an eye-care or medical product.** It is designed to reduce visual fatigue during heavy data entry, drawing design inspiration from Notion, standard spreadsheet tools, and classic reading interfaces.

---

## ✨ Features / 核心特性

- 🌾 **Paper Preset (纸墨)**: Warm, paper-like cream white palette (`#F4F0E6`). Perfect for everyday office work.
- 🌿 **Mint Preset (薄荷)**: Soft, pale mint green palette (`#EAF1EC`). Designed to ease fatigue during extended sessions.
- ☁️ **Silver Preset (云灰)**: Modern, cold gray slate palette (`#EEF2F5`). Inspired by modern Notion & spreadsheet styling.
- ⚡ **Zero-Reload Dynamic Switching**: Switch presets or toggle the theme instantly via Tampermonkey menu actions without reloading the page.
- ⌨️ **Keyboard Shortcut**: Press `Alt + Shift + E` to toggle the theme on/off instantly.
- 🚀 **Performance Optimized**: MutationObserver uses cached parameters to prevent main-thread lag during spreadsheet interactions.

---

## 📦 Installation / 安装说明

### Prerequisites / 准备工作
Ensure you have a user script manager extension installed in your browser:
* [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
* [Violentmonkey](https://violentmonkey.github.io/)

### Quick Install / 快捷安装
Click the link below to install the script from GreasyFork (or raw GitHub link):
* 👉 **[Install MellowLark on GreasyFork](https://greasyfork.org)** *(listing coming soon — use GitHub Raw in the meantime)*
* 👉 **[Install from GitHub Raw](https://raw.githubusercontent.com/mellow-theme/MellowLark/main/color.js)**

---

## 🎨 Presets Breakdown / 主题色彩配方

| Palette Element | 🌾 Paper (纸墨) | 🌿 Mint (薄荷) | ☁️ Silver (云灰) |
| :--- | :--- | :--- | :--- |
| **Page Body (页面背景)** | `#F4F0E6` | `#EAF1EC` | `#EEF2F5` |
| **Base Canvas (画布/卡片)** | `#FDFBF7` | `#F0F4F1` | `#F8FAFC` |
| **Header (列头)** | `#F1E8D7` | `#DDEBE1` | `#E5EBF1` |
| **Borders (网格线)** | `#D5D1C4` | `#BFD2C3` | `#CDD6DF` |
| **Hover State (悬停)** | `#F0EDE1` | `#E6F0E9` | `#EDF3F8` |
| **Selected State (选中)** | `#E3DEC9` | `#D4E6D8` | `#DDE7F3` |

---

## 🛠️ Configuration & Shortcut / 配置与快捷键

* **Theme Switcher**: Click the Tampermonkey browser extension icon, find **MellowLark**, and click on the desired preset theme (a checkmark `✓` will indicate the active theme).
* **Toggle Shortcut**: Press `Alt + Shift + E` to quickly enable or disable the comfort theme.

---

## 🗺️ Roadmap / 路线图

See [ROADMAP.md](ROADMAP.md) for the planned feature milestones from v0.3 through v1.0.

---

## 🤝 Contributing / 参与贡献

Contributions are highly welcome! If you want to refine CSS selectors, add new presets, or support other Lark modules (e.g. Docs, Sheets, Wiki):

1. Fork this repository.
2. Make your edits in [color.js](color.js).
3. Submit a Pull Request.

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and [SECURITY.md](SECURITY.md) for more details.

---

## 📄 License / 开源协议

MellowLark is released under the [MIT License](file:///Users/tantan/code/FeiShuSheetColor/LICENSE). Feel free to use, modify, and distribute it.
