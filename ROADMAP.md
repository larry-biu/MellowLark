# MellowLark — Roadmap

This document outlines the planned development trajectory for MellowLark. All timelines are estimates and subject to change based on community feedback and Feishu/Lark platform changes.

> [!NOTE]
> MellowLark follows [Semantic Versioning](https://semver.org). Pre-1.0 minor versions may introduce breaking selector changes as Feishu updates its UI.

---

## ✅ v0.3.0 — Foundation (Current)

**Status: Released**

The "make it a real project" release. Focus was on engineering quality and project infrastructure.

- [x] Rebrand to **MellowLark** with a clean project identity
- [x] Three built-in presets: 🌾 Paper, 🌿 Mint, ☁️ Silver
- [x] Zero-reload theme switching via Tampermonkey menu
- [x] `Alt+Shift+E` keyboard shortcut toggle
- [x] `GM_getValue` cache to avoid synchronous reads in MutationObserver
- [x] `GM_unregisterMenuCommand` for dynamic menu state updates
- [x] Full open-source project structure: README, LICENSE, CHANGELOG, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, Issue Templates, PR Template
- [x] `MutationObserver` debounced + scoped to `childList` only (no `subtree`)
- [x] Removed fragile `[style*="background..."]` inline-style selectors
- [x] Branding assets: Logo, Banner, GitHub Social Preview

---

## 🔨 v0.4.0 — Selector Stability

**Theme: Make it resilient to Feishu UI updates**

Feishu regularly updates its frontend (React SPA). Class-name based selectors (`[class*="grid"]`, `[class*="cell"]`, etc.) are the most fragile part of the codebase and likely to break with Feishu version updates.

### Planned Work
- [ ] Audit all CSS selectors in `feishu-better-theme.user.js` and classify by stability tier:
  - **Stable**: `role`, `aria-*`, `data-testid`, official CSS variables
  - **Semi-stable**: structural HTML elements (`input`, `textarea`, `a`)
  - **Fragile**: `[class*="..."]` substring matches
- [ ] Replace all Tier-3 (fragile) selectors with Tier-1 or Tier-2 equivalents where possible
- [ ] Document which selectors are known to change and add a compatibility note in CHANGELOG
- [ ] Add a "Selector Health" section to selector documentation to guide future contributors
- [ ] Test on both `feishu.cn` and `larksuite.com` (internationalized domain)

---

## 🎨 v0.5.0 — Theme Color Editor

**Theme: Let users personalize**

Introduce an optional floating UI panel that allows users to customize the active theme's colors without editing code.

### Planned Work
- [ ] Floating theme editor panel (toggled via Tampermonkey menu or `Alt+Shift+T`)
- [ ] HSL sliders or hex color pickers for each color token (`body`, `base`, `header`, `border`, `hover`, `selected`, `focus`, `link`)
- [ ] Live preview: changes apply instantly to the page while the panel is open
- [ ] "Save as Custom Theme" button — persists to `GM_setValue`
- [ ] Custom theme appears alongside built-in presets in the menu
- [ ] "Reset to Preset" button to discard custom changes
- [ ] Panel design: minimal, non-intrusive, consistent with MellowLark's visual language

### Design Constraints
- Panel must not interfere with Feishu's own UI elements
- Must work within Tampermonkey's sandboxed environment (no external dependencies)
- Panel should be draggable

---

## 📦 v0.6.0 — Theme Import / Export

**Theme: Community theme sharing**

Enable users to share their custom themes with others.

### Planned Work
- [ ] Export custom theme as a JSON file (downloaded via browser)
- [ ] Import theme from JSON file (via file picker in the panel)
- [ ] JSON schema validation on import (prevent malformed themes)
- [ ] Shareable theme string (base64-encoded JSON in a URL fragment or clipboard)
- [ ] Community theme gallery concept (external repo or GreasyFork comment section)

---

## 🌐 v0.7.0 — Expanded Page Support

**Theme: Beyond Base**

MellowLark currently targets Feishu Base (多维表格). This release extends comfort styling to other Feishu modules.

### Planned Work
- [ ] **Feishu Docs (文档)**: Text contrast, sidebar, toolbar
- [ ] **Feishu Wiki (知识库)**: Navigation tree, page header, content area
- [ ] **Feishu Sheet (电子表格)**: Grid, header, formula bar
- [ ] **Feishu Dashboard (仪表盘)**: Card backgrounds, chart containers
- [ ] Per-module theme toggle (e.g. enable for Base but not Docs)
- [ ] Page detection logic to apply only relevant CSS per module

---

## 🏁 v1.0.0 — Stable Release

**Theme: Production-ready, community-validated**

The milestone that signals MellowLark is reliable, well-documented, and community-tested.

### Requirements for v1.0
- [ ] All v0.4 selector stability work complete
- [ ] At least 6 months of stable usage without major selector breakage
- [ ] GreasyFork listing published with screenshots and full metadata
- [ ] Community-contributed themes (at least 1 merged PR from an external contributor)
- [ ] Comprehensive test checklist documented for development guidance
- [ ] GitHub Discussions enabled for community support

---

## 💡 Future Ideas (Unscheduled)

These are ideas that may be explored post-v1.0, depending on community interest:

- **Dark Mode variants** for each theme (Paper Dark, Mint Dark, Silver Dark)
- **System dark mode sync** — automatically switch to a dark variant if the OS is in dark mode
- **Chrome Extension port** — for users who prefer extensions over userscripts
- **Support for other tools** (e.g. Notion comfort overrides, Airtable, Teable)
- **Scheduled theme switching** — Morning / Evening auto-switch

---

## 📬 Feedback & Prioritization

Have a strong opinion about what should come next? Open a [Feature Request](../../issues/new?template=feature_request.md) on GitHub!

The roadmap is primarily shaped by:
1. **Selector stability** (most critical — affects all users)
2. **Community upvotes** on feature requests
3. **Maintainer bandwidth**
