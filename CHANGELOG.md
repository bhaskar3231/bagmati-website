# Changelog

All notable changes to the Bagmati website are documented here.

---

## [1.1.0] - 2026-10-05

### Changed
- **Contact section** — Removed phone number `+91 97637 17653` from the Call us list; only `+91 99738 16825` is now shown
- **Footer WhatsApp link** — Updated to connect to `+91 99738 16825` (was `+91 97637 17653`)
- **Visiting card (visiting-card.svg)** — Removed `+91 97637 17653` from the CALL / WHATSAPP field; only `+91 99738 16825` is displayed

### Infrastructure
- Connected GitHub repository (`bhaskar3231/bagmati-website`) to Vercel project for automatic deployments on every `git push` to `main`
- Installed and configured Vercel CLI and Git locally
- All source files imported from live Vercel deployment

### Testing
- 62 automated checks passed covering HTML structure, navigation, contact form, JS logic, CSS, SVG visiting card, and all static assets

---

## [1.0.0] - 2026-09-08

### Initial release
- Full single-page website for Bagmati — Pune-based B2B supply partner
- Sections: Hero, Trust strip, Solutions, Industries, Approach, Contact
- Contact form powered by Formspree
- Responsive layout with mobile menu
- Visiting card SVG with downloadable PNG
- Deployed to `https://bagmati.co.in` via Vercel
