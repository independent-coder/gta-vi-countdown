// Background image management system
export class BackgroundManager {
    constructor(config, deviceDetector) {
        this.config = config;
        this.deviceDetector = deviceDetector;
        this.backgroundImages = [...config.BACKGROUND_IMAGES];
        this.currentBackgroundIndex = 0;
        this.preloadedImages = new Map();
        
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
        
        // Only preload the first few images based on device capabilities
        const imagesToPreload = this.backgroundImages.slice(0, this.deviceDetector.preloadCount);
        
        imagesToPreload.forEach((imageName, index) => {
            const imageUrl = this.config.BASE_URL + imageName + this.config.IMAGE_PARAMS;
            const img = new Image();
            
            img.onload = () => {
                this.preloadedImages.set(imageName, img);
                console.log(`Preloaded GTA VI image ${index + 1}/${imagesToPreload.length}: ${imageName}`);
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
            const imageUrl = this.config.BASE_URL + imageName + this.config.IMAGE_PARAMS;
            
            if (!this.preloadedImages.has(imageName)) {
                const img = new Image();
                img.src = imageUrl;
                this.preloadedImages.set(imageName, img);
            }
        }
    }

    initBackgroundRotation() {
        const backgroundElement = document.getElementById('gta-background');
        
        if (backgroundElement && this.backgroundImages.length > 0) {
            // Set initial background immediately
            const imageName = this.backgroundImages[0];
            const imageUrl = this.config.BASE_URL + imageName + this.config.IMAGE_PARAMS;
            backgroundElement.src = imageUrl;
            
            // Update background info
            this.updateBackgroundInfo();
            
            // Start fade in effect after a short delay to ensure smooth transition
            setTimeout(() => {
                backgroundElement.classList.add('active');
            }, this.config.BACKGROUND_FADE_DELAY);
        }
    }

    rotateBackground() {
        const backgroundElement = document.getElementById('gta-background');
        if (backgroundElement && this.backgroundImages.length > 0) {
            // Get next image
            const nextIndex = (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
            const imageName = this.backgroundImages[nextIndex];
            const imageUrl = this.config.BASE_URL + imageName + this.config.IMAGE_PARAMS;
            
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
                }, this.config.BACKGROUND_FADE_DELAY);
            }, this.config.BACKGROUND_FADE_DURATION);
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
                // Fallback for any other format - handle local file paths
                displayName = imageName.replace(/^.*\//, '').replace(/\.[^.]+$/, '').replace(/_/g, ' ');
            }
            
            backgroundNameElement.textContent = displayName;
            
            // Show with animation
            setTimeout(() => {
                backgroundInfoElement.classList.add('visible');
            }, this.config.BACKGROUND_INFO_DELAY);
        }
    }
}
