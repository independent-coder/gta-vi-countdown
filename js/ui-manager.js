import { OFFICIAL_LINKS, TRAILERS } from './config.js';

// UI management and interactions
export class UIManager {
    constructor(config) {
        this.config = config;
        this.currentQuoteIndex = 0;
        this.initToggleCountdown();
        this.renderTrailers();
        this.renderOfficialLinks();
    }

    initToggleCountdown() {
        const toggleButton = document.getElementById('toggle-countdown');
        const container = document.querySelector('.container');

        if (!toggleButton || !container) return;

        let isCountdownVisible = true;
        this.setButtonState(toggleButton, isCountdownVisible);

        toggleButton.addEventListener('click', () => {
            isCountdownVisible = !isCountdownVisible;
            container.classList.toggle('hidden', !isCountdownVisible);
            toggleButton.setAttribute('aria-pressed', String(!isCountdownVisible));
            this.setButtonState(toggleButton, isCountdownVisible);
        });
    }

    setButtonState(button, visible) {
        button.innerHTML = visible
            ? '<i class="fas fa-eye" aria-hidden="true"></i>'
            : '<i class="fas fa-eye-slash" aria-hidden="true"></i>';
        button.setAttribute('aria-label', visible ? 'Hide countdown' : 'Show countdown');
        button.setAttribute('title', visible ? 'Hide countdown' : 'Show countdown');
        button.classList.toggle('hidden', !visible);
    }

    renderTrailers() {
        const container = document.getElementById('trailers-container');
        if (!container) return;

        const fragment = document.createDocumentFragment();
        TRAILERS.forEach((trailer) => {
            const link = document.createElement('a');
            link.className = 'trailer-link';
            link.href = `https://www.youtube.com/watch?v=${trailer.videoId}`;
            link.target = '_blank';
            link.rel = 'noopener';

            link.innerHTML = `
                <div class="trailer-card">
                    <div class="trailer-thumbnail">
                        <span class="play-button"><i class="fas fa-play" aria-hidden="true"></i></span>
                        <img src="https://img.youtube.com/vi/${trailer.videoId}/maxresdefault.jpg"
                             alt="GTA VI ${trailer.title} thumbnail" loading="lazy"
                             width="1280" height="720">
                    </div>
                    <div class="trailer-info">
                        <h3>${trailer.title}</h3>
                        <p>${trailer.date}</p>
                    </div>
                </div>`;

            const img = link.querySelector('img');
            img.addEventListener('error', () => {
                img.src = `https://img.youtube.com/vi/${trailer.videoId}/hqdefault.jpg`;
            }, { once: true });

            fragment.appendChild(link);
        });

        container.appendChild(fragment);
    }

    renderOfficialLinks() {
        const container = document.getElementById('official-links');
        if (!container) return;

        const fragment = document.createDocumentFragment();
        OFFICIAL_LINKS.forEach((item) => {
            const link = document.createElement('a');
            link.className = 'official-link';
            link.href = item.url;
            link.target = '_blank';
            link.rel = 'noopener';
            link.innerHTML = `
                <i class="${item.icon} official-link-icon" aria-hidden="true"></i>
                <span class="official-link-text">
                    <strong>${item.label}</strong>
                    <small>${item.description}</small>
                </span>
                <i class="fa-solid fa-arrow-up-right-from-square official-link-ext" aria-hidden="true"></i>`;
            fragment.appendChild(link);
        });

        container.appendChild(fragment);
    }

    updateQuote() {
        const quoteElement = document.getElementById('quote');
        if (!quoteElement) return;

        quoteElement.style.opacity = '0';
        setTimeout(() => {
            quoteElement.textContent = this.config.QUOTES[this.currentQuoteIndex];
            quoteElement.style.opacity = '1';
            this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.config.QUOTES.length;
        }, 500);
    }

    addInteractiveEffects() {
        const countdownItems = document.querySelectorAll('.countdown-item');

        countdownItems.forEach((item) => {
            item.addEventListener('click', () => this.createRipple(item));
        });

        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) this.resumeAnimations();
        });
    }

    createRipple(item) {
        const ripple = document.createElement('div');
        const rect = item.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.className = 'countdown-ripple';
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${rect.width / 2 - size / 2}px`;
        ripple.style.top = `${rect.height / 2 - size / 2}px`;

        item.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    resumeAnimations() {
        document.querySelectorAll('[style*="animation-play-state: paused"]').forEach((element) => {
            element.style.animationPlayState = 'running';
        });
    }
}
