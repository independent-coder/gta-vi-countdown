# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2026-11-10

### Added
- The two November 2026 *Jason and Lucia: Rooftop* artwork variants (with and without logos), plus their web-optimized thumbnails
- The 39 official screenshots from the November 5, 2026 **Launch Gallery**: Jason Duval 11–19, Jason and Lucia 14–20, Lucia Caminos 11–14, Grassrivers 07–08, Leonida Keys 07, Port Gellhorn 07 and Vice City 13–27
- The Vice City beach and skyline image featured on the November 3, 2026 Pre-Load Newswire post
- Web-optimized thumbnails for the 40 new images
- Separate live game-preload countdown to November 12, 2026, alongside the November 19 release countdown
- Official **Launch Trailer** (October 15, 2026) with a YouTube preview card and Rockstar Newswire link
- Two official *Jason and Lucia: Lock and Load* artwork variants and the Justice score background
- Gallery expanded to 233 images: 139 screenshots, 27 artworks, 51 Ultimate Edition benefits, 12 Vintage Vice City images and 4 music images
- Added a slide-toggle for the gallery, grouped gallery sections, and an option to set any gallery image as the background (with automatic rotation paused until resumed)
- Added a character-card index that opens an individual character’s screenshots with a return-to-characters control

## [1.1.0] - 2026-10-12

### Added
- **Media gallery** with all 188 official images — 99 screenshots, 23 artwork & wallpapers, 51 Ultimate Edition benefits, 12 Vintage Vice City images and 3 music backgrounds — filterable by category
- **Lightbox viewer** with full-resolution images, arrow/keyboard navigation, and focus management
- Web-optimized gallery thumbnails for all 188 images (Pillow-generated, committed under `assets/thumbs/`)
- Official **music section** backgrounds (3 images) added to the gallery
- Official **Ultimate Edition Benefits** (51) and **Vintage Vice City Pack** (12) image sets
- Completed the official artwork & wallpapers set (23 artworks, up from 15)
- **Official links** section: merch collection and official music
- *Grand Theft Auto VI: An Extended Look* added to the official trailers section
- `js/media-utils.js` with shared human-readable naming helpers
- `js/gallery.js` gallery and lightbox module
- Reduced-motion support, visible focus styles and ARIA labeling across interactive elements
- Canonical URL and refreshed social preview metadata

### Changed
- **Visual overhaul**: new design tokens and a cohesive Vice City neon theme across the whole page
- Rebuilt `index.html` with a hero, section structure, gallery and lightbox markup
- Reworked `styles.css` from scratch (grid gallery, responsive footer, accessible states)
- Background rotation now preloads upcoming images and uses the shared name formatter
- Trailers and official links are now rendered from `js/config.js`
- Regenerated `screenshots/desktop.jpg`, `screenshots/mobile.jpg` and `assets/og-image.png`
- Image list expanded to 188 entries (99 screenshots + 23 artworks + 51 Ultimate Edition + 12 Vintage Vice City + 3 music)
- Re-encoded the Ultimate Edition and Vintage Vice City packs at JPEG quality 85 — 50% smaller (100.8 MB to 50.6 MB) while keeping the original 3840x2160 dimensions

### Fixed
- Added the 29 missing official screenshots (`Ambrosia_06`, `Grassrivers_05-06`, `Leonida_Keys_06`,
  `Port_Gellhorn_06`, `Vice_City_10-12`, `Jason_Duval_07-10`, `Lucia_Caminos_07-10` and the
  `Jason_and_Lucia_01-13` set), bringing the gallery up to the official count
- Removed dead milestone code (`MILESTONES`, unused imports and ~200 lines of milestone CSS)
- Corrected README customization instructions that referenced a non-existent `script.js`
- Corrected documented accent colors to match the real cyan/pink theme

### Removed
- Milestone/timeline remnants from the config, app entry point and stylesheet

---

## [1.0.0] - 2026-01-28

### Added
- Initial release of GTA VI Countdown timer
- Live countdown showing years, months, days, hours, minutes, and seconds
- Total days remaining display below main countdown
- Modern typography with Bebas Neue (title) and Roboto Mono (countdown)
- Dark theme with cyan and pink gradient accents
- Visual progress bar showing completion percentage
- Official trailer links with card design
- Responsive design for desktop, tablet, and mobile
- Smooth animations and hover effects
- Rotating motivational quotes every 10 seconds
- Interactive countdown elements with visual feedback
- Release celebration with confetti animation
- Dynamic background system with official GTA VI images
- 4K image quality with randomized display
- Background info display showing current image name
- Toggle countdown button for better image viewing
- Professional disclaimers and legal compliance

### Technical
- ES6 modular JavaScript architecture
- Device detection and optimization
- Background image preloading and management
- No external dependencies except fonts and icons
- GitHub Pages optimized deployment

### Removed
- Timeline functionality (simplified user experience)
- Milestones tracking system (replaced with cleaner interface)
- Obsolete timeline-manager.js and milestones-manager.js files

---

## [Future Updates]

Planned updates based on official Rockstar Games announcements:
- Additional trailer links when released
- Release date updates if delays are announced
- New official media and content integration

*Note: This is a fan-made project. Updates depend on official announcements and developer availability.*
