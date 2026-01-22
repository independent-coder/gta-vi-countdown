class GTAVICountdown {
    constructor() {
        this.targetDate = new Date('November 19, 2026 00:00:00').getTime();
        this.startDate = new Date('February 4, 2022 00:00:00').getTime(); // Official announcement date
        
        // Official GTA VI background images from GTA Wiki (Fandom)
        this.baseUrl = 'assets/backgrounds/';
        this.imageParams = '';

        
        this.backgroundImages = [   
            // Characters
            'characters/BoobieIke/Boobie_Ike_01.jpg',
            'characters/BoobieIke/Boobie_Ike_02.jpg',
            'characters/BoobieIke/Boobie_Ike_03.jpg',
            'characters/BoobieIke/Boobie_Ike_04.jpg',
            'characters/BrianHeder/Brian_Heder_01.jpg',
            'characters/BrianHeder/Brian_Heder_02.jpg',
            'characters/BrianHeder/Brian_Heder_03.jpg',
            'characters/BrianHeder/Brian_Heder_04.jpg',
            'characters/CalHampton/Cal_Hampton_01.jpg',
            'characters/CalHampton/Cal_Hampton_02.jpg',
            'characters/CalHampton/Cal_Hampton_03.jpg',
            'characters/CalHampton/Cal_Hampton_04.jpg',
            'characters/DreQuanPriest/DreQuan_Priest_01.jpg',
            'characters/DreQuanPriest/DreQuan_Priest_02.jpg',
            'characters/DreQuanPriest/DreQuan_Priest_03.jpg',
            'characters/DreQuanPriest/DreQuan_Priest_04.jpg',
            'characters/JasonDuval/Jason_Duval_01.jpg',
            'characters/JasonDuval/Jason_Duval_02.jpg',
            'characters/JasonDuval/Jason_Duval_03.jpg',
            'characters/JasonDuval/Jason_Duval_04.jpg',
            'characters/JasonDuval/Jason_Duval_05.jpg',
            'characters/JasonDuval/Jason_Duval_06.jpg',
            'characters/LuciaCaminos/Lucia_Caminos_01.jpg',
            'characters/LuciaCaminos/Lucia_Caminos_02.jpg',
            'characters/LuciaCaminos/Lucia_Caminos_03.jpg',
            'characters/LuciaCaminos/Lucia_Caminos_04.jpg',
            'characters/LuciaCaminos/Lucia_Caminos_05.jpg',
            'characters/LuciaCaminos/Lucia_Caminos_06.jpg',
            'characters/RaulBautista/Raul_Bautista_01.jpg',
            'characters/RaulBautista/Raul_Bautista_02.jpg',
            'characters/RaulBautista/Raul_Bautista_03.jpg',
            'characters/RaulBautista/Raul_Bautista_04.jpg',
            'characters/RealDimez/Real_Dimez_01.jpg',
            'characters/RealDimez/Real_Dimez_02.jpg',
            'characters/RealDimez/Real_Dimez_03.jpg',
            'characters/RealDimez/Real_Dimez_04.jpg',

            // Locations
            'locations/Ambrosia/Ambrosia_01.jpg',
            'locations/Ambrosia/Ambrosia_02.jpg',
            'locations/Ambrosia/Ambrosia_03.jpg',
            'locations/Ambrosia/Ambrosia_04.jpg',
            'locations/Ambrosia/Ambrosia_05.jpg',
            'locations/GrassRivers/GrassRivers_01.jpg',
            'locations/GrassRivers/GrassRivers_02.jpg',
            'locations/GrassRivers/GrassRivers_03.jpg',
            'locations/GrassRivers/GrassRivers_04.jpg',
            'locations/LeonidaKeys/Leonida_Keys_01.jpg',
            'locations/LeonidaKeys/Leonida_Keys_02.jpg',
            'locations/LeonidaKeys/Leonida_Keys_03.jpg',
            'locations/LeonidaKeys/Leonida_Keys_04.jpg',
            'locations/LeonidaKeys/Leonida_Keys_05.jpg',
            'locations/MountKalagaNationalPark/Mount_Kalaga_National_Park_01.jpg',
            'locations/MountKalagaNationalPark/Mount_Kalaga_National_Park_02.jpg',
            'locations/MountKalagaNationalPark/Mount_Kalaga_National_Park_03.jpg',
            'locations/MountKalagaNationalPark/Mount_Kalaga_National_Park_04.jpg',
            'locations/MountKalagaNationalPark/Mount_Kalaga_National_Park_05.jpg',
            'locations/MountKalagaNationalPark/Mount_Kalaga_National_Park_06.jpg',
            'locations/PortGellhorn/Port_Gellhorn_01.jpg',
            'locations/PortGellhorn/Port_Gellhorn_02.jpg',
            'locations/PortGellhorn/Port_Gellhorn_03.jpg',
            'locations/PortGellhorn/Port_Gellhorn_04.jpg',
            'locations/PortGellhorn/Port_Gellhorn_05.jpg',
            'locations/ViceCity/Vice_City_01.jpg',
            'locations/ViceCity/Vice_City_02.jpg',
            'locations/ViceCity/Vice_City_03.jpg',
            'locations/ViceCity/Vice_City_04.jpg',
            'locations/ViceCity/Vice_City_05.jpg',
            'locations/ViceCity/Vice_City_06.jpg',
            'locations/ViceCity/Vice_City_07.jpg',
            'locations/ViceCity/Vice_City_08.jpg',
            'locations/ViceCity/Vice_City_09.jpg',
            // Artworks
            'artworks/BoobieIke/Boobie_Ike_landscape.jpg',
            'artworks/BrianHeder/Brian_Heder_landscape.jpg',
            'artworks/CalHampton/Cal_Hampton_landscape.jpg',
            'artworks/DreQuanPriest/DreQuan_Priest_landscape.jpg',
            'artworks/JasonLucia01/Jason_and_Lucia_01_landscape.jpg',
            'artworks/JasonLucia02/Jason_and_Lucia_02_landscape.jpg',
            'artworks/JasonLuciaMotel/Jason_and_Lucia_Motel_landscape.jpg',
            'artworks/Postcards/Ambrosia/Ambrosia_Postcard_landscape.jpg',
            'artworks/Postcards/Grassrivers/Grassrivers_Postcard_landscape.jpg',
            'artworks/Postcards/Leonida_Keys/Leonida_Keys_Postcard_landscape.jpg',
            'artworks/Postcards/Mount_Kalaga_National_Park/Mount_Kalaga_National_Park_Postcard_landscape.jpg',
            'artworks/Postcards/Port_Gellhorn/Port_Gellhorn_Postcard_landscape.jpg',
            'artworks/Postcards/Vice_City/Vice_City_Postcard_landscape.jpg',
            'artworks/RaulBautista/Raul_Bautista_landscape.jpg',
            'artworks/RealDimez/Real_Dimez_landscape.jpg'
        ];  
        
        // Randomize the array
        this.backgroundImages = this.shuffleArray([...this.backgroundImages]);
        this.currentBackgroundIndex = 0;
        this.preloadedImages = new Map();
        
        // Preload all images immediately
        this.preloadAllImages();
        
        this.quotes = [
            "The wait is almost over...",
            "Get ready for Vice City...",
            "The next chapter is coming...",
            "Vice City, here we come...",
            "The evolution continues...",
            "New adventures await...",
            "The streets will be alive again...",
            "Get ready to rise to the top...",
            "The city is calling...",
            "The legacy continues...",
            "The countdown has begun..."
        ];
        
        this.init();
    }

    init() {
        this.updateCountdown();
        this.updateProgress();
        this.updateQuote();
        this.initBackgroundRotation();
        this.initToggleCountdown();
        
        // Update every second
        setInterval(() => {
            this.updateCountdown();
            this.updateProgress();
        }, 1000);
        
        // Change quote every 10 seconds
        setInterval(() => {
            this.updateQuote();
        }, 10000);
        
        // Change background every 30 seconds
        setInterval(() => {
            this.rotateBackground();
        }, 30000);
        
        // Add some interactive effects
        this.addInteractiveEffects();
    }

    initToggleCountdown() {
        const toggleButton = document.getElementById('toggle-countdown');
        const container = document.querySelector('.container');
        
        if (toggleButton && container) {
            let isCountdownVisible = true;
            
            toggleButton.addEventListener('click', () => {
                isCountdownVisible = !isCountdownVisible;
                
                if (isCountdownVisible) {
                    container.classList.remove('hidden');
                    container.classList.add('visible');
                    toggleButton.classList.remove('hidden');
                    toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
                } else {
                    container.classList.remove('visible');
                    container.classList.add('hidden');
                    toggleButton.classList.add('hidden');
                    toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
                }
            });
        }
    }

    initBackgroundRotation() {
        const backgroundElement = document.getElementById('gta-background');
        
        if (backgroundElement && this.backgroundImages.length > 0) {
            // Set initial background immediately
            const imageName = this.backgroundImages[0];
            const imageUrl = this.baseUrl + imageName + this.imageParams;
            backgroundElement.src = imageUrl;
            
            // Update background info
            this.updateBackgroundInfo();
            
            // Start fade in effect after a short delay to ensure smooth transition
            setTimeout(() => {
                backgroundElement.classList.add('active');
            }, 100);
        }
    }

    updateBackgroundInfo() {
        const backgroundNameElement = document.getElementById('background-name');
        const backgroundInfoElement = document.getElementById('background-info');
        
        if (backgroundNameElement && backgroundInfoElement) {
            const imageName = this.backgroundImages[this.currentBackgroundIndex];
            
            let displayName = '';
            
            // Check for screenshot format: OfficialScreenshots-GTAVI-PromotionalWebsite-LocationName-SS##.jpg
            const screenshotMatch = imageName.match(/OfficialScreenshots-GTAVI-PromotionalWebsite-(.+?)-SS(\d+)\.jpg$/);
            
            // Check for artwork format: Artwork-Name-GTAVI.jpg
            const artworkMatch = imageName.match(/Artwork-(.+?)-GTAVI\.(jpg|png)$/);
            
            if (screenshotMatch) {
                // Format screenshot names
                let locationName = screenshotMatch[1].replace(/-/g, ' ').replace(/([A-Z])/g, ' $1');
                const screenshotNumber = screenshotMatch[2].padStart(2, '0');
                displayName = `${locationName.replace(/\s+/g, ' ').trim()} ${screenshotNumber}`;
            } else if (artworkMatch) {
                // Format artwork names
                let artworkName = artworkMatch[1];
                
                // Special cases for better naming
                if (artworkName.includes('Trailer1Thumbnail wo Date')) {
                    displayName = 'Trailer 1 Artwork';
                } else if (artworkName.includes('Trailer2Thumbnail')) {
                    displayName = 'Trailer 2 Artwork';
                } else if (artworkName.includes('JasonandLuciaMotel')) {
                    displayName = 'Jason & Lucia Motel';
                } else if (artworkName.includes('BG')) {
                    // Handle BG specifically
                    artworkName = artworkName.replace('BG', 'Background');
                    // Add spaces before capital letters and replace dashes
                    artworkName = artworkName.replace(/-/g, ' ').replace(/([A-Z])/g, ' $1');
                    displayName = artworkName.replace(/\s+/g, ' ').trim();
                } else {
                    // Add spaces before capital letters and replace dashes for other names
                    artworkName = artworkName.replace(/-/g, ' ').replace(/([A-Z])/g, ' $1');
                    displayName = artworkName.replace(/\s+/g, ' ').trim();
                }
            } else {
                // Fallback for any other format
                displayName = imageName.replace(/^.*\//, '').replace(/\.[^.]+$/, '').replace(/_/g, ' ');
            }
            
            backgroundNameElement.textContent = displayName;
            
            // Show with animation
            setTimeout(() => {
                backgroundInfoElement.classList.add('visible');
            }, 500);
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    preloadAllImages() {
        this.backgroundImages.forEach((imageName, index) => {
            const imageUrl = this.baseUrl + imageName + this.imageParams;
            const img = new Image();
            
            img.onload = () => {
                this.preloadedImages.set(imageName, img);
                console.log(`Preloaded GTA VI image ${index + 1}/${this.backgroundImages.length}: ${imageName}`);
            };
            
            img.onerror = () => {
                console.warn(`Failed to preload image: ${imageName}`);
            };
            
            img.src = imageUrl;
        });
    }

    preloadNextImages(count) {
        for (let i = 0; i < count; i++) {
            const nextIndex = (this.currentBackgroundIndex + i) % this.backgroundImages.length;
            const imageName = this.backgroundImages[nextIndex];
            const imageUrl = this.baseUrl + imageName + this.imageParams;
            
            if (!this.preloadedImages.has(imageName)) {
                const img = new Image();
                img.src = imageUrl;
                this.preloadedImages.set(imageName, img);
            }
        }
    }

    rotateBackground() {
        const backgroundElement = document.getElementById('gta-background');
        if (backgroundElement && this.backgroundImages.length > 0) {
            // Get next image
            const nextIndex = (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
            const imageName = this.backgroundImages[nextIndex];
            const imageUrl = this.baseUrl + imageName + this.imageParams;
            
            // Check if image is preloaded
            const preloadedImage = this.preloadedImages.get(imageName);
            
            // Start fade out
            backgroundElement.classList.remove('active');
            
            setTimeout(() => {
                // Change to next background
                this.currentBackgroundIndex = nextIndex;
                
                if (preloadedImage) {
                    // Use preloaded image for instant swap
                    backgroundElement.src = imageUrl;
                } else {
                    // Fallback if not preloaded yet
                    backgroundElement.src = imageUrl;
                }
                
                // Update background info
                this.updateBackgroundInfo();
                
                // Start fade in
                setTimeout(() => {
                    backgroundElement.classList.add('active');
                }, 100);
            }, 1000);
        }
    }

    updateCountdown() {
        const now = new Date().getTime();
        const distance = this.targetDate - now;

        if (distance < 0) {
            this.handleRelease();
            return;
        }

        // Calculate years, months, days, hours, minutes, seconds
        const targetDate = new Date(this.targetDate);
        const currentDate = new Date(now);
        
        let years = targetDate.getFullYear() - currentDate.getFullYear();
        let months = targetDate.getMonth() - currentDate.getMonth();
        let days = targetDate.getDate() - currentDate.getDate();
        
        // Adjust for negative values
        if (days < 0) {
            months--;
            const lastMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
            days += lastMonth.getDate();
        }
        
        if (months < 0) {
            years--;
            months += 12;
        }
        
        // Calculate remaining time for hours, minutes, seconds
        const remainingTime = distance % (1000 * 60 * 60 * 24);
        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        this.updateElement('years', years);
        this.updateElement('months', months);
        this.updateElement('days', days);
        this.updateElement('hours', hours);
        this.updateElement('minutes', minutes);
        this.updateElement('seconds', seconds);

        // Add animation effect
        this.animateValue('seconds');
    }

    updateElement(id, value) {
        const element = document.getElementById(id);
        if (element) {
            const formattedValue = value.toString().padStart(2, '0');
            if (element.textContent !== formattedValue) {
                // Smooth scale animation
                element.style.transform = 'scale(1.05)';
                element.style.color = '#ffd700';
                
                setTimeout(() => {
                    element.textContent = formattedValue;
                    element.style.transform = 'scale(1)';
                    element.style.color = '#ffffff';
                }, 150);
            }
        }
    }

    animateValue(id) {
        const element = document.getElementById(id);
        if (element) {
            // Create a pulse effect
            element.style.textShadow = '0 0 30px rgba(255, 215, 0, 0.8)';
            element.style.transform = 'scale(1.02)';
            
            setTimeout(() => {
                element.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
                element.style.transform = 'scale(1)';
            }, 300);
        }
    }

    updateProgress() {
        const now = new Date().getTime();
        const totalTime = this.targetDate - this.startDate;
        const elapsedTime = now - this.startDate;
        const progress = Math.min((elapsedTime / totalTime) * 100, 100);

        const progressFill = document.getElementById('progress');
        const progressText = document.getElementById('progress-text');

        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }

        if (progressText) {
            progressText.textContent = `${progress.toFixed(2)}% Complete`;
        }

        // Change color based on progress
        if (progress > 75) {
            progressFill.style.background = 'linear-gradient(90deg, #ff4500, #ffd700, #00ff00)';
        } else if (progress > 50) {
            progressFill.style.background = 'linear-gradient(90deg, #ff4500, #ffd700)';
        }
    }

    updateQuote() {
        const quoteElement = document.getElementById('quote');
        if (quoteElement) {
            const randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
            quoteElement.style.opacity = '0';
            setTimeout(() => {
                quoteElement.textContent = `"${randomQuote}"`;
                quoteElement.style.opacity = '0.8';
            }, 500);
        }
    }

    addInteractiveEffects() {
        // Add click sound effect simulation (visual feedback)
        const countdownItems = document.querySelectorAll('.countdown-item');
        countdownItems.forEach(item => {
            item.addEventListener('click', () => {
                item.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    item.style.transform = 'translateY(-5px)';
                }, 100);
            });
        });

        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ') {
                e.preventDefault();
                this.updateQuote();
            }
        });

        // Add visibility change detection to pause/resume
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.updateCountdown();
                this.updateProgress();
            }
        });
    }

    handleRelease() {
        const countdownContainer = document.querySelector('.countdown-container');
        if (countdownContainer) {
            countdownContainer.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center;">
                    <h2 style="color: #ffd700; font-size: 2rem; margin-bottom: 20px;">
                        🎉 GRAND THEFT AUTO VI IS HERE! 🎉
                    </h2>
                    <p style="font-size: 1.2rem; color: #ffffff;">
                        The wait is over! Go get your copy now!
                    </p>
                </div>
            `;
        }

        const quoteElement = document.getElementById('quote');
        if (quoteElement) {
            quoteElement.textContent = '"Welcome to Vice City! 🌴"';
        }

        // Add celebration animation
        this.celebrate();
    }

    celebrate() {
        // Create confetti effect
        const colors = ['#ffd700', '#ff4500', '#00ff00', '#ff00ff', '#00ffff'];
        const container = document.querySelector('.container');
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    left: ${Math.random() * 100}%;
                    top: -10px;
                    opacity: 1;
                    transform: rotate(${Math.random() * 360}deg);
                    transition: all 3s ease-out;
                    pointer-events: none;
                    z-index: 9999;
                `;
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.style.top = '100%';
                    confetti.style.opacity = '0';
                    confetti.style.transform = `rotate(${Math.random() * 720}deg)`;
                }, 100);
                
                setTimeout(() => {
                    confetti.remove();
                }, 3100);
            }, i * 50);
        }
    }

    // Utility method to format time in a human-readable way
    formatTime(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const years = Math.floor(days / 365);
        
        if (years > 0) {
            return `${years} year${years > 1 ? 's' : ''}, ${days % 365} day${(days % 365) > 1 ? 's' : ''}`;
        } else if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''}, ${hours % 24} hour${(hours % 24) > 1 ? 's' : ''}`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''}, ${minutes % 60} minute${(minutes % 60) > 1 ? 's' : ''}`;
        } else {
            return `${minutes} minute${minutes > 1 ? 's' : ''}, ${seconds % 60} second${(seconds % 60) > 1 ? 's' : ''}`;
        }
    }
}

// Initialize the countdown when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new GTAVICountdown();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Add some Easter eggs
document.addEventListener('keydown', (e) => {
    // Add other keyboard shortcuts here if needed
    console.log('Key pressed:', e.key);
});
