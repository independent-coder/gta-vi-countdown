class GTAVICountdown {
    constructor() {
        this.targetDate = new Date('November 19, 2026 00:00:00').getTime();
        this.startDate = new Date('February 4, 2022 00:00:00').getTime(); // Official announcement date
        this.quotes = [
            "The wait is almost over...",
            "Get ready for Vice City...",
            "The next chapter is coming...",
            "Vice City, here we come...",
            "The evolution continues...",
            "New adventures await...",
            "The streets will be alive again...",
            "Get ready to rise to the top...",
            "The legacy continues...",
            "The countdown has begun..."
        ];
        
        this.init();
    }

    init() {
        this.updateCountdown();
        this.updateProgress();
        this.updateQuote();
        
        // Update every second
        setInterval(() => {
            this.updateCountdown();
            this.updateProgress();
        }, 1000);
        
        // Change quote every 10 seconds
        setInterval(() => {
            this.updateQuote();
        }, 10000);
        
        // Add some interactive effects
        this.addInteractiveEffects();
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
