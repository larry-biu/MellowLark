<p align="center">
  <img src="assets/logo.png" alt="MellowLark Logo" width="96" />
</p>

# MellowLark

<p align="center">
  <img src="assets/banner.png" alt="MellowLark Banner" width="100%" />
</p>

<p align="center">
  <strong>为飞书多维表格打造的视觉舒适主题 · Visual Comfort Theme for Feishu & Lark Base</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/larry-biu/MellowLark?style=flat-square" alt="License: MIT"></a>
  <a href="https://greasyfork.org/zh-CN/scripts/585800-mellowlark-feishu-lark-base-visual-comfort-theme"><img src="https://img.shields.io/badge/GreasyFork-Install-green?style=flat-square" alt="GreasyFork"></a>
  <img src="https://img.shields.io/badge/Version-v0.3.1-blue?style=flat-square" alt="Version">
  <img src="https://img.shields.io/badge/Tampermonkey-✓-green?style=flat-square" alt="Tampermonkey">
  <img src="https://img.shields.io/badge/数据收集-无-brightgreen?style=flat-square" alt="无数据收集">
</p>

---

> 语言 / Language：**[中文](#-中文说明)** · [English](#-english)

---

## 🇨🇳 中文说明

### 这是什么？

**MellowLark** 是一个 [Tampermonkey](https://www.tampermonkey.net/) 浏览器脚本。

它会在你打开飞书多维表格（Base）时，自动替换页面的高亮白色背景、强对比网格线为更柔和的配色方案，让长时间盯着表格工作变得不那么费眼睛。

**适合哪些人？**

- 📊 **财务 / 会计**：每天在飞书 Base 里对账、核数、录入数据
- 📋 **运营 / 项目管理**：长时间查看多维表格跟进项目进展
- 🗂️ **HR / 行政**：用飞书 Base 管理花名册、审批记录、档案
- 👀 **任何觉得飞书白色背景太刺眼的人**

> [!NOTE]
> **MellowLark 是一个视觉舒适主题，不是护眼软件，也不是医疗产品。**
> 它只修改网页样式，不会触碰你的任何数据，不联网，不收集任何信息。

---

### 安装步骤

**第一步：安装脚本管理器**

在浏览器里安装以下任意一个扩展（推荐 Tampermonkey）：

| 扩展 | Chrome | Edge | Firefox |
|:---|:---|:---|:---|
| [Tampermonkey](https://www.tampermonkey.net/)（推荐） | [安装](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) | [安装](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) | [安装](https://addons.mozilla.org/firefox/addon/tampermonkey/) |
| [Violentmonkey](https://violentmonkey.github.io/) | [安装](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegedbjckenbfgkggdbcga) | [安装](https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao) | [安装](https://addons.mozilla.org/firefox/addon/violentmonkey/) |

**第二步：安装 MellowLark 脚本**

点击下方链接，在弹出的 Tampermonkey 页面里点击"安装"即可：

👉 **[从 GitHub 直接安装（点击此链接）](https://raw.githubusercontent.com/larry-biu/MellowLark/main/dist/feishu-better-theme.user.js)**

> 如果点击后打开的是一个代码页面而不是安装弹窗，说明脚本管理器还未正确安装，请先完成第一步。

**第三步：打开飞书多维表格**

打开 [飞书](https://www.feishu.cn) 或 [Lark](https://www.larksuite.com)，进入任意多维表格，主题会自动生效。

---

### 主题介绍

MellowLark 内置三套主题，全部采用低对比度、低饱和度的柔和色调：

#### 🌾 纸墨（Paper）— 默认主题

温暖的米白色系，接近纸张的质感。  
适合大多数日常办公场景，在自然光或暖色灯光下效果最佳。

#### 🌿 薄荷（Mint）

柔和的浅绿色系，长时间使用眼睛负担较小。  
适合需要长期盯着屏幕工作的场景，比如对账、录入数据等。

#### ☁️ 云灰（Silver）

现代冷灰色系，接近 Notion 或 Office 的风格。  
适合喜欢简洁、专业感界面的用户。

---

### 如何切换主题 / 开关主题

**方式一：通过 Tampermonkey 菜单**

1. 点击浏览器右上角的 Tampermonkey 图标（🐒 猴子图标）
2. 找到 **MellowLark**
3. 点击想要的主题名称，当前激活的主题前面会有 `✓` 标记
4. 点击"关闭主题"可以临时恢复飞书原始样式

**方式二：快捷键**

按下 `Alt + Shift + E` 可以立即开关主题，无需点击菜单。

> **Mac 用户**：如果 `Alt+Shift+E` 无效，可能是因为该快捷键被其他应用占用，请通过 Tampermonkey 菜单操作。

---

### 主题颜色对照表

| 颜色用途 | 🌾 纸墨 | 🌿 薄荷 | ☁️ 云灰 |
| :--- | :--- | :--- | :--- |
| 页面背景 | `#F4F0E6` | `#EAF1EC` | `#EEF2F5` |
| 表格画布 | `#FDFBF7` | `#F0F4F1` | `#F8FAFC` |
| 列头背景 | `#F1E8D7` | `#DDEBE1` | `#E5EBF1` |
| 网格线颜色 | `#D5D1C4` | `#BFD2C3` | `#CDD6DF` |
| 悬停高亮 | `#F0EDE1` | `#E6F0E9` | `#EDF3F8` |
| 选中状态 | `#E3DEC9` | `#D4E6D8` | `#DDE7F3` |

---

### 常见问题（FAQ）

**Q：安装后没有效果怎么办？**

A：请确认：
1. Tampermonkey 扩展已启用（浏览器扩展栏里图标不是灰色）
2. 脚本已安装并且处于开启状态（Tampermonkey 仪表板里 MellowLark 旁边是绿点）
3. 页面地址是 `feishu.cn` 或 `larksuite.com` 的域名
4. 尝试刷新页面

**Q：会不会影响我的飞书数据？**

A：完全不会。MellowLark 只修改网页的视觉样式（CSS），不会读取、修改或上传任何数据。脚本里没有任何 network 请求代码，你可以自行查看 [feishu-better-theme.user.js](feishu-better-theme.user.js) 源代码确认。

**Q：飞书更新后主题失效了怎么办？**

A：飞书是 SPA（单页应用），偶尔更新可能导致部分样式失效。遇到这种情况，请在 [Issues](https://github.com/larry-biu/MellowLark/issues) 里反馈，我会尽快修复。

**Q：能支持飞书文档 / 知识库 / 电子表格吗？**

A：目前主要支持多维表格（Base）。对其他模块的支持在路线图中，参见 [ROADMAP.md](ROADMAP.md)。

**Q：可以自定义颜色吗？**

A：当前版本不支持，但这是 v0.5 的计划功能。如果你有配色需求，可以直接修改 [feishu-better-theme.user.js](feishu-better-theme.user.js) 里的 `THEMES` 对象，每个颜色 token 都有注释说明用途。

**Q：Mac 还是 Windows 更适合使用？**

A：两者都支持，Chrome / Edge / Firefox 均可。

---

### 安全性说明

MellowLark 对你的隐私和数据安全无任何影响：

- ✅ **只注入 CSS**，不操作 DOM 数据
- ✅ **零网络请求**，不访问任何外部地址
- ✅ **不收集信息**，无埋点、无统计、无分析
- ✅ **代码完全开源**，可自行审计 [feishu-better-theme.user.js](feishu-better-theme.user.js)
- ✅ **MIT 开源协议**，可自由使用、修改、分发

---

### 参与贡献 / 反馈问题

- 🐛 **发现 Bug**：[提交 Issue](https://github.com/larry-biu/MellowLark/issues/new?template=bug_report.md)
- 💡 **功能建议**：[提交 Feature Request](https://github.com/larry-biu/MellowLark/issues/new?template=feature_request.md)
- 🤝 **参与开发**：欢迎 Fork 仓库并提交 PR 反馈。

---

## 🌐 English

### What is MellowLark?

**MellowLark** is a Tampermonkey userscript that gently replaces Feishu/Lark Base's high-contrast white interface with soft, curated, low-contrast color palettes — making long data entry sessions more comfortable.

It works by injecting a small CSS override at page load. It does **not** touch your data, make network requests, or collect any information.

> [!NOTE]
> **MellowLark is a comfort theme, not an eye-care or medical product.** It is designed to reduce visual fatigue during heavy spreadsheet work, drawing design inspiration from Notion, standard office tools, and classic reading interfaces.

### Installation

**Step 1 — Install a userscript manager:**

- [Tampermonkey](https://www.tampermonkey.net/) (Recommended) — Chrome / Edge / Firefox
- [Violentmonkey](https://violentmonkey.github.io/) — Alternative

**Step 2 — Install MellowLark:**

Click this link to install directly:

👉 **[Install from GitHub Raw](https://raw.githubusercontent.com/larry-biu/MellowLark/main/dist/feishu-better-theme.user.js)**

**Step 3 — Open Feishu/Lark Base** and the theme applies automatically.

### Themes

| Theme | Feel | Best For |
|:---|:---|:---|
| 🌾 **Paper** (纸墨) | Warm cream white | Everyday office work |
| 🌿 **Mint** (薄荷) | Soft pale green | Long data entry sessions |
| ☁️ **Silver** (云灰) | Modern cool gray | Notion/Office-style preference |

### Usage

- **Switch themes**: Click the Tampermonkey icon → MellowLark → choose a preset (active theme shows `✓`)
- **Toggle on/off**: Press `Alt + Shift + E`
- **Reset to default**: Tampermonkey menu → Reset to Paper

### Presets Color Reference

| Element | 🌾 Paper | 🌿 Mint | ☁️ Silver |
| :--- | :--- | :--- | :--- |
| Page Body | `#F4F0E6` | `#EAF1EC` | `#EEF2F5` |
| Base Canvas | `#FDFBF7` | `#F0F4F1` | `#F8FAFC` |
| Header | `#F1E8D7` | `#DDEBE1` | `#E5EBF1` |
| Borders | `#D5D1C4` | `#BFD2C3` | `#CDD6DF` |
| Hover | `#F0EDE1` | `#E6F0E9` | `#EDF3F8` |
| Selected | `#E3DEC9` | `#D4E6D8` | `#DDE7F3` |

### Roadmap

See [ROADMAP.md](ROADMAP.md) for planned milestones from v0.4 (selector stability) through v1.0 (stable release).

### Contributing

Contributions welcome!

1. Fork this repository
2. Edit [feishu-better-theme.user.js](feishu-better-theme.user.js)
3. Submit a Pull Request

---

## 📄 License

MellowLark is released under the [MIT License](LICENSE). Free to use, modify, and distribute.
