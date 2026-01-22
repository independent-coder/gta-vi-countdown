// Main application class
import { CONFIG, QUOTES, BACKGROUND_IMAGES, MILESTONES } from './config.js';
import { DeviceDetector } from './device-detector.js';
import { BackgroundManager } from './background-manager.js';
import { CountdownTimer } from './countdown-timer.js';
import { UIManager } from './ui-manager.js';
import { MilestonesManager } from './milestones-manager.js';

export class GTAVICountdown {
    constructor() {
        // Initialize configuration
        this.config = CONFIG;
        this.config.QUOTES = QUOTES;
        this.config.BACKGROUND_IMAGES = BACKGROUND_IMAGES;
        this.config.MILESTONES = MILESTONES;
        
        // Initialize device detection
        this.deviceDetector = new DeviceDetector(this.config);
        
        // Initialize managers
        this.backgroundManager = new BackgroundManager(this.config, this.deviceDetector);
        this.countdownTimer = new CountdownTimer(this.config);
        this.uiManager = new UIManager(this.config);
        this.milestonesManager = new MilestonesManager(this.config);
        
        // Initialize the app
        this.init();
    }

    init() {
        // Initialize all components
        this.countdownTimer.updateCountdown();
        this.countdownTimer.updateProgress();
        this.uiManager.updateQuote();
        this.backgroundManager.initBackgroundRotation();
        this.milestonesManager.updateMilestones();
        
        // Set up intervals
        this.setupIntervals();
        
        // Add interactive effects
        this.uiManager.addInteractiveEffects();
    }

    setupIntervals() {
        // Update countdown every second
        setInterval(() => {
            this.countdownTimer.updateCountdown();
            this.countdownTimer.updateProgress();
        }, this.config.COUNTDOWN_UPDATE_INTERVAL);
        
        // Change quote every 10 seconds
        setInterval(() => {
            this.uiManager.updateQuote();
        }, this.config.QUOTE_CHANGE_INTERVAL);
        
        // Update milestones every minute
        setInterval(() => {
            this.milestonesManager.updateMilestones();
        }, 60000);
        
        // Change background based on device capabilities
        const rotationInterval = this.deviceDetector.getBackgroundRotationInterval();
        setInterval(() => {
            this.backgroundManager.rotateBackground();
        }, rotationInterval);
    }
}

// Add ripple animation to CSS
UIManager.addRippleAnimation();

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GTAVICountdown();
});
