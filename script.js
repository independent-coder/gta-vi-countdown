class GTAVICountdown {
    constructor() {
        this.targetDate = new Date('November 19, 2026 00:00:00').getTime();
        this.startDate = new Date('February 4, 2022 00:00:00').getTime(); // Official announcement date
        
        // Official GTA VI background images from Rockstar Games
        this.baseUrl = 'https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2F';
        this.imageParams = '&w=1920&q=75';
        
        this.backgroundImages = [
            // Characters
            'Jason_Duval_01.6e287338.jpg',
            'Jason_Duval_02.c2f33c0d.jpg',
            'Jason_Duval_03.aaf481e5.jpg',
            'Jason_Duval_04.374574ad.jpg',
            'Jason_Duval_05.921c79be.jpg',
            'Jason_Duval_06.e498e308.jpg',
            'Lucia_Caminos_01.f5023e0f.jpg',
            'Lucia_Caminos_02.f833743a.jpg',
            'Lucia_Caminos_03.e39f02a9.jpg',
            'Lucia_Caminos_04.76419a9d.jpg',
            'Lucia_Caminos_05.20831085.jpg',
            'Lucia_Caminos_06.a158f77c.jpg',
            'Cal_Hampton_01.86793e65.jpg',
            'Cal_Hampton_02.b58d263e.jpg',
            'Cal_Hampton_03.cba3d4d8.jpg',
            'Cal_Hampton_04.07347c1d.jpg',
            'Boobie_Ike_01.8aee3bef.jpg',
            'Boobie_Ike_02.92f4fe40.jpg',
            'Boobie_Ike_03.544bbd85.jpg',
            'Boobie_Ike_04.de9c38b3.jpg',
            'DreQuan_Priest_01.10a7473c.jpg',
            'DreQuan_Priest_02.53b9ec07.jpg',
            'DreQuan_Priest_03.7aa48b92.jpg',
            'DreQuan_Priest_04.30db96f3.jpg',
            'Real_Dimez_01.c74db009.jpg',
            'Real_Dimez_02.0ea0477d.jpg',
            'Real_Dimez_03.c382b50e.jpg',
            'Real_Dimez_04.457b11b3.jpg',
            'Raul_Bautista_01.b4438643.jpg',
            'Raul_Bautista_02.cfb197c0.jpg',
            'Raul_Bautista_03.f57b4046.jpg',
            'Raul_Bautista_04.934bfa66.jpg',
            'Brian_Heder_01.10393e61.jpg',
            'Brian_Heder_02.ad5172f3.jpg',
            'Brian_Heder_03.1bd6d8bd.jpg',
            'Brian_Heder_04.8b0bd870.jpg',
            // Locations
            'Vice_City_01.332891cf.jpg',
            'Vice_City_02.1c840675.jpg',
            'Vice_City_03.9b0e117a.jpg',
            'Vice_City_04.00931b7e.jpg',
            'Vice_City_05.e8171acb.jpg',
            'Vice_City_06.34eff5bd.jpg',
            'Vice_City_07.c1ec0b18.jpg',
            'Vice_City_08.a5c9c85d.jpg',
            'Vice_City_09.632112c4.jpg',
            'Leonida_Keys_01.1af17390.jpg',
            'Leonida_Keys_02.fa5d8dc9.jpg',
            'Leonida_Keys_03.f73a61f6.jpg',
            'Leonida_Keys_04.ef02d8b3.jpg',
            'Leonida_Keys_05.cf35e824.jpg',
            'Port_Gellhorn_01.386c1d6e.jpg',
            'Port_Gellhorn_02.fef56516.jpg',
            'Port_Gellhorn_03.a8b22d6d.jpg',
            'Port_Gellhorn_04.580f17d9.jpg',
            'Port_Gellhorn_05.abb2a58f.jpg',
            'Ambrosia_01.0c8fad88.jpg',
            'Ambrosia_02.ec311051.jpg',
            'Ambrosia_03.6a1e258e.jpg',
            'Ambrosia_04.a8d67313.jpg',
            'Ambrosia_05.6d6703dc.jpg',
            'Grassrivers_01.3abae122.jpg',
            'Grassrivers_02.9d9c5cbf.jpg',
            'Grassrivers_03.da407d63.jpg',
            'Grassrivers_04.375357e4.jpg',
            'Mount_Kalaga_National_Park_01.080f7cf3.jpg',
            'Mount_Kalaga_National_Park_02.ec9a34c4.jpg',
            'Mount_Kalaga_National_Park_03.a841c296.jpg',
            'Mount_Kalaga_National_Park_04.e5eec73f.jpg',
            'Mount_Kalaga_National_Park_05.b28e1836.jpg',
            'Mount_Kalaga_National_Park_06.de4f201d.jpg',
            // Postcards and Wallpapers
            'Jason_and_Lucia_02_landscape.8aced7fd.jpg',
            'Jason_and_Lucia_01_landscape.0e2a6544.jpg',
            'Jason_and_Lucia_Motel_landscape.565a08c8.jpg',
            'Cal_Hampton_landscape.b1bc01a4.jpg',
            'Boobie_Ike_landscape.67ebb1f6.jpg',
            'DreQuan_Priest_landscape.9070b529.jpg',
            'Real_Dimez_landscape.f16de7d4.jpg',
            'Raul_Bautista_landscape.63cb68d4.jpg',
            'Brian_Heder_landscape.e88fb1ab.jpg',
            'Vice_City_Postcard_landscape.29f034e9.jpg',
            'Leonida_Keys_Postcard_landscape.e3710f94.jpg',
            'Port_Gellhorn_Postcard_landscape.31bacfc2.jpg',
            'Ambrosia_Postcard_landscape.39ea0178.jpg',
            'Grassrivers_Postcard_landscape.d7a22955.jpg',
            'Mount_Kalaga_National_Park_Postcard_landscape.057d9b70.jpg'
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
        this.rotateBackground();
        this.updateBackgroundInfo();
    }

    updateBackgroundInfo() {
        const backgroundNameElement = document.getElementById('background-name');
        const backgroundInfoElement = document.getElementById('background-info');
        
        if (backgroundNameElement && backgroundInfoElement) {
            const imageName = this.backgroundImages[this.currentBackgroundIndex];
            // Remove file extension and hash part, replace underscores with spaces
            const displayName = imageName.replace(/\.[^.]+$/, '').replace(/\.[^.]+$/, '').replace(/_/g, ' ');
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
                    backgroundElement.style.backgroundImage = `url(${imageUrl})`;
                } else {
                    // Fallback if not preloaded yet
                    backgroundElement.style.backgroundImage = `url(${imageUrl})`;
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
