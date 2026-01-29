// Countdown timer functionality
export class CountdownTimer {
    constructor(config) {
        this.config = config;
    }

    updateCountdown() {
        const now = new Date().getTime();
        const distance = this.config.TARGET_DATE - now;

        if (distance < 0) {
            this.handleRelease();
            return;
        }

        // Calculate years, months, days, hours, minutes, seconds
        const targetDate = new Date(this.config.TARGET_DATE);
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

        // Calculate and update total days
        const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.updateTotalDays(totalDays);

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

    updateTotalDays(totalDays) {
        const element = document.getElementById('total-days');
        if (element) {
            element.textContent = totalDays.toLocaleString();
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
        const totalTime = this.config.TARGET_DATE - this.config.START_DATE;
        const elapsedTime = now - this.config.START_DATE;
        const progress = Math.min((elapsedTime / totalTime) * 100, 100);

        const progressBar = document.getElementById('progress');
        const progressText = document.getElementById('progress-text');
        
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${progress.toFixed(1)}% Complete`;
        }
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

        // Trigger celebration
        this.celebrateRelease();
    }

    celebrateRelease() {
        // Create confetti effect
        const confettiCount = 100;
        const confettiColors = ['#ffd700', '#ff4500', '#ffffff', '#ff69b4', '#00ff00', '#00bfff'];
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: ${confettiColors[Math.floor(Math.random() * confettiColors.length)]};
                    left: ${Math.random() * 100}%;
                    top: -10px;
                    opacity: 0.8;
                    transform: rotate(${Math.random() * 360}deg);
                    z-index: 9999;
                    pointer-events: none;
                `;
                
                document.body.appendChild(confetti);
                
                // Animate confetti
                const duration = Math.random() * 3 + 2;
                const horizontalMovement = (Math.random() - 0.5) * 200;
                
                confetti.animate([
                    { 
                        transform: `translateY(0) translateX(0) rotate(0deg)`,
                        opacity: 0.8
                    },
                    { 
                        transform: `translateY(100vh) translateX(${horizontalMovement}px) rotate(${Math.random() * 720}deg)`,
                        opacity: 0
                    }
                ], {
                    duration: duration * 1000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }).onfinish = () => confetti.remove();
            }, i * 50);
        }
    }
}
