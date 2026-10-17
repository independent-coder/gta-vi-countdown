// Main application class
import { CONFIG, QUOTES, BACKGROUND_IMAGES } from './config.js';
import { DeviceDetector } from './device-detector.js';
import { BackgroundManager } from './background-manager.js';
import { CountdownTimer } from './countdown-timer.js';
import { UIManager } from './ui-manager.js';
import { GalleryManager } from './gallery.js';

export class GTAVICountdown {
    constructor() {
        this.config = CONFIG;
        this.config.QUOTES = QUOTES;
        this.config.BACKGROUND_IMAGES = BACKGROUND_IMAGES;

        this.deviceDetector = new DeviceDetector(this.config);

        this.backgroundManager = new BackgroundManager(this.config, this.deviceDetector);
        this.countdownTimer = new CountdownTimer(this.config);
        this.uiManager = new UIManager(this.config);
        this.galleryManager = new GalleryManager(this.config, this.backgroundManager);

        this.init();
    }

    init() {
        this.countdownTimer.updateCountdown();
        this.countdownTimer.updateProgress();
        this.uiManager.updateQuote();
        this.backgroundManager.initBackgroundRotation();
        this.uiManager.addInteractiveEffects();

        this.setupIntervals();
    }

    setupIntervals() {
        // Update countdown every second
        setInterval(() => {
            this.countdownTimer.updateCountdown();
            this.countdownTimer.updateProgress();
        }, this.config.COUNTDOWN_UPDATE_INTERVAL);

        // Change quote on an interval
        setInterval(() => {
            this.uiManager.updateQuote();
        }, this.config.QUOTE_CHANGE_INTERVAL);

        // Rotate the background based on device capabilities
        setInterval(() => {
            this.backgroundManager.rotateBackground();
        }, this.deviceDetector.getBackgroundRotationInterval());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GTAVICountdown();
});
