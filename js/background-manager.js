import { formatImageName } from './media-utils.js';

// Background image management system
export class BackgroundManager {
    constructor(config, deviceDetector) {
        this.config = config;
        this.deviceDetector = deviceDetector;
        this.backgroundImages = [...config.BACKGROUND_IMAGES];
        this.currentBackgroundIndex = 0;
        this.selectedImage = null;
        this.preloadedImages = new Map();
        this.rotationTimer = null;
        this.backgroundChangeTimeout = null;
        this.backgroundActivateTimeout = null;
        this.rotationToggle = null;
        this.infoUpdateTimeout = null;

        // Randomize the array
        this.shuffleArray(this.backgroundImages);

        // Preload initial images
        this.preloadAllImages();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    preloadAllImages() {
        this.deviceDetector.logDeviceInfo();

        const imagesToPreload = this.backgroundImages.slice(0, this.deviceDetector.preloadCount);
        this.preloadImages(imagesToPreload);
    }

    preloadImages(imageNames) {
        imageNames.forEach((imageName) => {
            if (this.preloadedImages.has(imageName)) return;

            const imageUrl = this.config.BASE_URL + imageName + this.config.IMAGE_PARAMS;
            const img = new Image();
            img.onload = () => this.preloadedImages.set(imageName, img);
            img.onerror = () => console.warn(`Failed to preload image: ${imageName}`);
            img.src = imageUrl;
        });
    }

    preloadNextImages(count = 2) {
        const upcoming = [];
        for (let i = 1; i <= count; i++) {
            const nextIndex = (this.currentBackgroundIndex + i) % this.backgroundImages.length;
            upcoming.push(this.backgroundImages[nextIndex]);
        }
        this.preloadImages(upcoming);
    }

    setBackground(imageName, animate = true) {
        const backgroundElement = document.getElementById('gta-background');
        if (!backgroundElement) return;

        const imageUrl = this.config.BASE_URL + imageName + this.config.IMAGE_PARAMS;

        clearTimeout(this.backgroundChangeTimeout);
        clearTimeout(this.backgroundActivateTimeout);

        if (!animate) {
            backgroundElement.src = imageUrl;
            backgroundElement.classList.add('active');
            return;
        }

        backgroundElement.classList.remove('active');
        this.backgroundChangeTimeout = setTimeout(() => {
            backgroundElement.src = imageUrl;
            this.backgroundActivateTimeout = setTimeout(
                () => backgroundElement.classList.add('active'),
                this.config.BACKGROUND_FADE_DELAY
            );
        }, this.config.BACKGROUND_FADE_DURATION);
    }

    initBackgroundRotation() {
        if (this.backgroundImages.length === 0) return;

        this.rotationToggle = document.getElementById('resume-background-rotation');
        this.rotationToggle?.addEventListener('click', () => this.resumeBackgroundRotation());

        this.setBackground(this.backgroundImages[0], false);
        this.preloadNextImages(2);
        this.updateBackgroundInfo();
    }

    selectBackground(imageName) {
        const index = this.backgroundImages.indexOf(imageName);
        if (index === -1) return false;

        this.currentBackgroundIndex = index;
        this.selectedImage = imageName;
        this.setBackground(imageName, true);
        this.updateBackgroundInfo();
        return true;
    }

    resumeBackgroundRotation() {
        if (!this.selectedImage) return;
        this.selectedImage = null;
        this.updateBackgroundInfo();
    }

    rotateBackground() {
        if (this.backgroundImages.length === 0 || this.selectedImage) return;

        this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
        this.setBackground(this.backgroundImages[this.currentBackgroundIndex], true);
        this.updateBackgroundInfo();
        this.preloadNextImages(2);
    }

    updateBackgroundInfo() {
        const backgroundNameElement = document.getElementById('background-name');
        const backgroundInfoElement = document.getElementById('background-info');
        if (!backgroundNameElement || !backgroundInfoElement) return;

        const imageName = this.selectedImage || this.backgroundImages[this.currentBackgroundIndex];
        backgroundNameElement.textContent = formatImageName(imageName);
        if (this.rotationToggle) this.rotationToggle.hidden = !this.selectedImage;

        clearTimeout(this.infoUpdateTimeout);
        backgroundInfoElement.classList.remove('visible');
        this.infoUpdateTimeout = setTimeout(
            () => backgroundInfoElement.classList.add('visible'),
            this.config.BACKGROUND_INFO_DELAY
        );
    }
}
