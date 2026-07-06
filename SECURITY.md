# Security Policy

## Supported Versions

MellowLark is a Tampermonkey userscript that only injects CSS styles into Feishu/Lark web pages. The following versions are actively maintained:

| Version | Supported |
| ------- | --------- |
| 0.3.x   | ✅ Active  |
| < 0.3   | ❌ No longer maintained |

---

## Scope

MellowLark is designed with a minimal, read-only footprint:

- ✅ **Injects CSS only** — no DOM manipulation beyond adding a `<style>` tag
- ✅ **No network requests** — zero external fetches, no CDN dependencies
- ✅ **No data collection** — no telemetry, no analytics, no tracking
- ✅ **No external scripts** — all logic is self-contained in `color.js`
- ✅ **LocalStorage only** — user preferences (theme, enabled state) are stored via `GM_setValue` in the Tampermonkey sandbox, scoped to the extension

This means the attack surface is extremely limited. However, security reports are always welcomed.

---

## Reporting a Vulnerability

If you discover a potential security issue — for example:

- A selector that unexpectedly accesses sensitive DOM content
- A dependency introduced in a fork that makes network requests
- A metadata field that could be exploited in a script manager

Please **do not open a public GitHub Issue** for security vulnerabilities.

Instead, report it privately via one of these channels:

1. **GitHub Private Security Advisory**: Use the [Security tab](../../security/advisories/new) of this repository to open a private advisory.
2. **Email**: If a maintainer email is listed on their GitHub profile, you may contact them directly.

---

## Response Process

1. We will acknowledge your report within **5 business days**.
2. We will assess severity and impact.
3. If confirmed, we will publish a fix and credit the reporter (unless anonymity is requested).
4. A new patch version will be released and the CHANGELOG will document the fix.

---

## Out of Scope

The following are **not** considered security vulnerabilities for this project:

- CSS visual glitches or color rendering differences across browsers
- Feishu/Lark website changes that break selector coverage
- Issues in Tampermonkey/Violentmonkey itself (please report those upstream)
- Incompatibility with other userscripts

---

Thank you for helping keep MellowLark safe and trustworthy.
