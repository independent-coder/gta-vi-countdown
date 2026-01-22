// Device detection utilities
export class DeviceDetector {
    constructor(config) {
        this.config = config;
        this.isMobile = this.detectMobile();
        this.isSlowConnection = this.detectSlowConnection();
        this.preloadCount = this.calculatePreloadCount();
    }

    detectMobile() {
        return window.innerWidth <= this.config.MOBILE_BREAKPOINT;
    }

    detectSlowConnection() {
        // Check for slow connection indicators
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        
        if (connection) {
            // Use Network Information API if available
            return connection.effectiveType === 'slow-2g' || 
                   connection.effectiveType === '2g' ||
                   connection.downlink < this.config.SLOW_CONNECTION_THRESHOLD;
        }
        
        // Fallback: check if mobile and assume slower connection
        return this.isMobile;
    }

    calculatePreloadCount() {
        // Calculate how many images to preload based on device capabilities
        if (this.isSlowConnection) {
            return this.config.PRELOAD_COUNTS.SLOW_CONNECTION;
        } else if (this.isMobile) {
            return this.config.PRELOAD_COUNTS.MOBILE;
        } else {
            return this.config.PRELOAD_COUNTS.DESKTOP;
        }
    }

    getBackgroundRotationInterval() {
        return this.isMobile ? this.config.BACKGROUND_ROTATION_MOBILE : this.config.BACKGROUND_ROTATION_DESKTOP;
    }

    logDeviceInfo() {
        console.log(`Smart preloading: ${this.isMobile ? 'Mobile' : 'Desktop'} detected, ${this.isSlowConnection ? 'Slow' : 'Fast'} connection`);
        console.log(`Will preload ${this.preloadCount} images at a time`);
    }
}
