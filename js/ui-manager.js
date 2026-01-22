// UI management and interactions
export class UIManager {
    constructor(config) {
        this.config = config;
        this.currentQuoteIndex = 0;
        this.initToggleCountdown();
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

    updateQuote() {
        const quoteElement = document.getElementById('quote');
        if (quoteElement) {
            quoteElement.style.opacity = '0';
            
            setTimeout(() => {
                quoteElement.textContent = this.config.QUOTES[this.currentQuoteIndex];
                quoteElement.style.opacity = '1';
                this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.config.QUOTES.length;
            }, 500);
        }
    }

    addInteractiveEffects() {
        // Add click effects to countdown items
        const countdownItems = document.querySelectorAll('.countdown-item');
        
        countdownItems.forEach(item => {
            item.addEventListener('click', () => {
                // Create ripple effect
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 215, 0, 0.6);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                const rect = item.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = '50%';
                ripple.style.top = '50%';
                ripple.style.marginLeft = -size / 2 + 'px';
                ripple.style.marginTop = -size / 2 + 'px';
                
                item.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add hover sound effect simulation (visual feedback)
        countdownItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add visibility change detection to pause/resume
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                // Resume animations when page becomes visible
                this.resumeAnimations();
            }
        });
    }

    resumeAnimations() {
        // Resume any paused animations
        const animatedElements = document.querySelectorAll('[style*="animation-play-state: paused"]');
        animatedElements.forEach(element => {
            element.style.animationPlayState = 'running';
        });
    }

    // Add ripple animation to CSS if not already present
    static addRippleAnimation() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}
