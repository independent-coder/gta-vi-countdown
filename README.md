# GTA VI Countdown App

A modern, responsive countdown timer for the Grand Theft Auto VI release date (November 19, 2026).

# Where do I access the app?

You can go to https://independent-coder.github.io/gta-vi-countdown/ to access the app already deployed on GitHub Pages.

## 🎮 Features

- **Live Countdown**: Real-time countdown showing days, hours, minutes, and seconds until GTA VI release
- **Modern Design**: Dark theme with gold and orange accents inspired by GTA VI branding
- **Progress Tracking**: Visual progress bar showing completion percentage from announcement to release
- **Responsive Layout**: Fully responsive design that works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful transitions, hover effects, and micro-interactions
- **Motivational Quotes**: Rotating quotes that change every 10 seconds to keep the hype alive
- **Interactive Elements**: Click countdown items for visual feedback
- **Easter Eggs**: Hidden features for fans (try the Konami code!)
- **Release Celebration**: Special confetti animation when the countdown reaches zero

## 🚀 Quick Start

1. Clone this repository
2. Open `index.html` in your web browser
3. Or run a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
4. Visit `http://localhost:8000` in your browser

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Flexbox, Grid, animations, and custom properties
- **Vanilla JavaScript**: No frameworks required - pure, modern JavaScript
- **Google Fonts**: Orbitron and Roboto for that perfect gaming aesthetic

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎨 Customization

### Changing the Target Date
Edit the target date in `script.js`:
```javascript
this.targetDate = new Date('November 19, 2026 00:00:00').getTime();
```

### Modifying Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #ffd700;
    --secondary-color: #ff4500;
    --background-dark: #0f0f0f;
}
```

### Adding New Quotes
Extend the quotes array in `script.js`:
```javascript
this.quotes = [
    "Your new quote here...",
    "Another motivational quote..."
];
```

## 🎯 Easter Eggs

- **Konami Code**: Enter ↑↑↓↓←→←→BA for a special effect
- **Space Bar**: Press space to manually change the quote
- **Click Effects**: Click on countdown items for interactive feedback

## 📁 Project Structure

```
gta-vi-countdown/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # Countdown logic and interactions
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Rockstar Games](https://www.rockstargames.com)
- [GTA VI Official Trailer](https://www.youtube.com/watch?v=QdBZY2fkU-0)
- [GTA VI Official Trailer 2](https://www.youtube.com/watch?v=VQRLujxTm3c)
- [Rockstar Games Twitter](https://twitter.com/RockstarGames)

---

⚠️ **Disclaimer**: This is a fan-made countdown timer. The release date is based on official announcements from Rockstar Games and may be subject to change.

*Made with ❤️ by GTA fans, for GTA fans*
