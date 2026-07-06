# Changelog

All notable changes to the MellowLark project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.3.1] - 2026-07-06

### Fixed
- **MutationObserver performance**: Removed `subtree: true` (was observing all DOM mutations in the entire SPA tree). Now observes only direct `childList` changes on `<html>`, which is sufficient to detect `<style>` tag removal. Added a 200ms debounce to further reduce unnecessary `ensureStyle()` calls during rapid SPA navigation.
- **Removed fragile inline-style selectors**: Removed `[style*="background: rgb(255, 255, 255)"]` and related inline-style attribute selectors. These were unpredictable and prone to mismatching in Feishu's SPA. Coverage is already handled by `role`/`aria` selectors and CSS variable overrides.

### Added
- **`CODE_OF_CONDUCT.md`**: Contributor Covenant v2.1 (was referenced in README but missing from repo).
- **`SECURITY.md`**: Responsible disclosure policy, tailored to the CSS-only minimal threat surface of a userscript.
- **`ROADMAP.md`**: Full milestone plan from v0.3 through v1.0, including selector stability audit (v0.4), theme color editor (v0.5), import/export (v0.6), and expanded page support (v0.7).
- **`assets/logo.png`**: Official MellowLark logo — lark bird perched on a wheat stalk, warm amber palette.
- **`assets/banner.png`**: GitHub Social Preview banner (dark warm background, logo + name + theme chips).
- **GreasyFork metadata**: Added `@homepageURL`, `@supportURL`, `@updateURL`, `@downloadURL` to the userscript header for proper GreasyFork listing and Tampermonkey auto-update support.
- **Improved `@description`**: More search-friendly description explicitly mentioning presets, keyboard shortcut, and "CSS only / no data collection" for GreasyFork discoverability.

### Changed
- **README**: Added logo and banner to the top of the README. Fixed dead GreasyFork link (replaced empty href with placeholder note). Fixed file links that used absolute local paths. Added Roadmap section. Added links to CODE_OF_CONDUCT and SECURITY in Contributing section.

---

## [0.3.0] - 2026-07-06

### Added
- Created a standard, open-source repository layout (README, LICENSE, CHANGELOG, CONTRIBUTING, Templates).
- Integrated `GM_unregisterMenuCommand` to dynamically update menu items without page reloads.

### Changed
- Rebranded project to **MellowLark** with refined bilingual description and namespace properties.
- **Performance Optimization**: Cached `GM_getValue` settings locally to avoid expensive database queries inside the `MutationObserver` handler.
- **Improved UX (Zero Reloads)**: Replaced `location.reload()` with hot-swapping styles dynamically inside `ensureStyle` when toggling themes or presets.

---

## [0.2.1-beta] - 2026-06-15

### Added
- Integrated dynamic `MutationObserver` to ensure styles are re-applied correctly during client-side SPA updates.
- Added `Alt+Shift+E` global shortcut to toggle theme active state.
- Three design themes: `Paper (纸墨)`, `Mint (薄荷)`, and `Silver (云灰)`.
- Core styling overrides for tables, borders, cells, rows, selections, links, input fields, and hover states.
