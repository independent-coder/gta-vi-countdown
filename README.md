# GTA VI Countdown App
![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=Independent-Coder.gta-vi-countdown)
![GitHub last commit](https://img.shields.io/github/last-commit/Independent-Coder/gta-vi-countdown)
![GitHub stars](https://img.shields.io/github/stars/Independent-Coder/gta-vi-countdown)

A modern, responsive countdown timer for the Grand Theft Auto VI release date (November 19, 2026).

## Preview
<img src="./screenshots/desktop.jpg" alt="Desktop preview" width="400" />
<img src="./screenshots/mobile.jpg" alt="Mobile preview" width="200" />


## 🌐 Live Demo

**Access the app live at:** https://independent-coder.github.io/gta-vi-countdown/

This repository primarily serves as the source code for the GitHub Pages deployment. The app is fully functional and ready to use - no setup required!

## 🎮 Features

- **Live Countdown**: Real-time countdown showing years, months, days, hours, minutes, and seconds until GTA VI release
- **Total Days Display**: Additional smaller display showing total remaining days
- **Modern Typography**: Bebas Neue for title, Roboto Mono for countdown numbers
- **Modern Design**: Dark theme with cyan and pink gradient accents inspired by GTA VI branding
- **Progress Tracking**: Visual progress bar showing completion percentage from announcement to release
- **Official Trailers**: Embedded YouTube trailer links with beautiful card design
- **Responsive Layout**: Fully responsive design that works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful transitions, hover effects, and micro-interactions
- **Motivational Quotes**: Rotating quotes that change every 10 seconds to keep the hype alive
- **Interactive Elements**: Click countdown items for visual feedback
- **Release Celebration**: Special confetti animation when countdown reaches zero
- **Dynamic Background System**: 75+ official GTA VI images from the GTA Wiki (Fandom) rotating every 30 seconds
- **4K Image Quality**: High-resolution screenshots and artworks for crystal-clear backgrounds
- **Randomized Display**: Images shuffle randomly for unique viewing experience
- **Preloaded Images**: All images preloaded for stutter-free transitions
- **Background Info Display**: Shows current background image name with clean formatting
- **Toggle Countdown**: Button to hide/show countdown for better image viewing
- **Professional Disclaimer**: Legal disclaimers for trademark and copyright compliance

## 🚀 GitHub Pages Setup

This repository is optimized for GitHub Pages deployment. The app is already live and working!

### For Your Own Deployment:

1. **Fork this repository**
2. **Enable GitHub Pages** in your fork's settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` → `/ (root)`
   - Save
3. **Access your app** at: `https://[your-username].github.io/gta-vi-countdown/`

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Flexbox, Grid, animations, and custom properties
- **ES6 Modules**: Modular JavaScript architecture with imports/exports
- **Vanilla JavaScript**: No frameworks required - pure, modern JavaScript
- **Google Fonts**: Bebas Neue, Roboto Mono, Orbitron, and Roboto for that perfect gaming aesthetic
- **Font Awesome**: Professional icons throughout the interface

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎨 Customization (Optional)

While the app is ready to use as-is, you can customize:

### Changing Target Date
Edit target date in `script.js`:
```javascript
this.targetDate = new Date('November 19, 2026 00:00:00').getTime();
```

### Modifying Colors
Update the CSS color scheme in `styles.css`:
```css
/* Primary gold accent */
--primary-color: #ffd700;
/* Secondary orange accent */
--secondary-color: #ff4500;
```

### Background Images
The app hosts official GTA VI images locally to avoid CDN rate limits. Images are organized in the `assets/backgrounds/` directory with proper naming conventions for smart display. The hosted images are pulled and downloaded from Rockstar's official website in full 4K resolution.

**Note**: We only host the official GTA VI images because of the CDN rate limits implied by first Rockstar's official website then fandom.com.

### Toggle Countdown
The eye button in the top-right corner allows users to:
- Hide the countdown interface for better image viewing
- Show the countdown interface when needed
- Background rotation continues regardless of visibility state

## 📁 Project Structure

```
gta-vi-countdown/
├── index.html          # Main HTML file with background system and toggle
├── styles.css          # All styles, animations, and responsive design
├── js/                 # Modular JavaScript components
│   ├── app.js          # Main application entry point
│   ├── config.js       # Configuration constants and data
│   ├── device-detector.js  # Device detection and optimization
│   ├── background-manager.js  # Background image management
│   ├── countdown-timer.js     # Countdown timer functionality
│   └── ui-manager.js          # UI interactions and effects
├── assets/             # Additional assets
│   └── backgrounds/    # Official GTA VI images (hosted locally)
├── screenshots/        # Preview images
├── README.md           # This file
├── CHANGELOG.md        # Version history and changes
├── LICENSE             # MIT License
└── .gitignore          # Git ignore file
```

## 🔗 Links

- **Live App**: https://independent-coder.github.io/gta-vi-countdown/
- **GitHub Repository**: https://github.com/Independent-Coder/gta-vi-countdown
- **Rockstar Games**: https://www.rockstargames.com
- **GTA VI Official Trailer - December 2023**: https://www.youtube.com/watch?v=QdBZY2fkU-0
- **GTA VI Official Trailer 2 - May 2025**: https://www.youtube.com/watch?v=VQRLujxTm3c
- **Rockstar Games Twitter**: https://twitter.com/RockstarGames

## 📅 Future Updates

I'll do my best to keep this countdown updated when major announcements drop! This includes:

- **Trailer 3**: Adding the new trailer link to the existing trailer section
- **Release Date Changes**: Updating the countdown target date if Rockstar announces delays
- **New Content**: Adding any additional official media or information

*Note: Updates depend on official Rockstar Games announcements and my availability to implement changes promptly.*

## 📄 License

This project is open source and available under [MIT License](LICENSE).

---

⚠️ **Disclaimer**: This is a fan-made countdown timer. The release date is based on official announcements from Rockstar Games and may be subject to change. Not affiliated with Rockstar Games. Grand Theft Auto VI is a trademark of Take-Two Interactive Software. The images are used for display purposes only and are not distributed for commercial use. The images are the property of Rockstar Games and Take-Two Interactive Software.

*Made with ❤️ by GTA fans, for GTA fans*
