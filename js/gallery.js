import { SCREENSHOTS, ARTWORKS, ULTIMATE_EDITION, VINTAGE_VICE_CITY, MUSIC } from './config.js';
import { formatImageName, getImageCategory, thumbUrl, imageUrl } from './media-utils.js';

const FILTERS = [
    { id: 'all', label: 'All Images', icon: 'fa-layer-group' },
    { id: 'characters', label: 'Characters', icon: 'fa-user-group' },
    { id: 'locations', label: 'Locations', icon: 'fa-location-dot' },
    { id: 'artworks', label: 'Artwork', icon: 'fa-palette' },
    { id: 'ultimate-edition', label: 'Ultimate Edition', icon: 'fa-gem' },
    { id: 'vintage-vice-city', label: 'Vintage Vice City', icon: 'fa-record-vinyl' },
    { id: 'music', label: 'Music', icon: 'fa-music' }
];

// Keep screenshots grouped under Characters and Locations; other collections
// remain their own filters.
const ITEMS = [
    ...SCREENSHOTS.map((path) => ({ path, category: getImageCategory(path) })),
    ...ARTWORKS.map((path) => ({ path, category: 'artworks' })),
    ...ULTIMATE_EDITION.map((path) => ({ path, category: 'ultimate-edition' })),
    ...VINTAGE_VICE_CITY.map((path) => ({ path, category: 'vintage-vice-city' })),
    ...MUSIC.map((path) => ({ path, category: 'music' }))
];

export class GalleryManager {
    constructor(config, backgroundManager) {
        this.config = config;
        this.backgroundManager = backgroundManager;
        this.grid = document.getElementById('gallery-grid');
        this.filterBar = document.getElementById('gallery-filters');
        this.countEl = document.getElementById('gallery-total');
        this.navigation = document.getElementById('gallery-navigation');
        this.characterBackButton = document.getElementById('gallery-back-to-characters');
        this.lightbox = document.getElementById('lightbox');
        this.galleryToggle = document.getElementById('toggle-gallery');
        this.galleryContent = document.getElementById('gallery-content');

        if (!this.grid) return;

        this.activeFilter = 'all';
        this.selectedCharacter = null;
        this.visibleItems = [];
        this.currentIndex = -1;
        this.lastFocused = null;

        this.renderFilters();
        this.renderGrid();
        this.initCharacterNavigation();
        this.initGalleryToggle();
        if (this.lightbox) this.initLightbox();
    }

    renderFilters() {
        if (!this.countEl) return;
        this.countEl.textContent = ITEMS.length;

        if (!this.filterBar) return;

        const fragment = document.createDocumentFragment();
        FILTERS.forEach((filter) => {
            const count = filter.id === 'all'
                ? ITEMS.length
                : filter.id === 'characters'
                    ? this.getCharacterGroups().size
                    : ITEMS.filter((item) => item.category === filter.id).length;
            if (count === 0) return;

            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'gallery-filter';
            button.dataset.filter = filter.id;
            button.setAttribute('aria-pressed', String(filter.id === this.activeFilter));
            button.innerHTML = `<i class="fas ${filter.icon}" aria-hidden="true"></i><span>${filter.label}</span><span class="gallery-filter-count">${count}</span>`;
            fragment.appendChild(button);
        });

        this.filterBar.appendChild(fragment);
        this.filterBar.addEventListener('click', (event) => {
            const button = event.target.closest('.gallery-filter');
            if (!button) return;
            this.setFilter(button.dataset.filter);
        });
    }

    initCharacterNavigation() {
        if (!this.characterBackButton) return;

        this.characterBackButton.addEventListener('click', () => {
            this.selectedCharacter = null;
            this.renderGrid(true);
            this.filterBar.querySelector('[data-filter="characters"]').focus();
        });
    }

    getCharacterGroups() {
        const characters = new Map();
        ITEMS.filter((item) => item.category === 'characters').forEach((item) => {
            const folder = item.path.split('/')[1];
            if (!characters.has(folder)) characters.set(folder, []);
            characters.get(folder).push(item);
        });
        return characters;
    }

    renderCharacterCards(animate = false) {
        const characters = this.getCharacterGroups();
        this.visibleItems = [];
        this.grid.innerHTML = '';
        const fragment = document.createDocumentFragment();

        characters.forEach((items, key) => {
            const name = this.formatCharacterName(key);
            const card = document.createElement('article');
            card.className = 'character-card';

            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'character-card-button';
            button.dataset.character = key;
            button.setAttribute('aria-label', `View ${name} screenshots (${items.length})`);

            const img = document.createElement('img');
            img.src = thumbUrl(this.config.THUMB_URL, items[0].path);
            img.alt = '';
            img.loading = 'lazy';
            img.decoding = 'async';
            img.width = 560;
            img.height = 315;

            const overlay = document.createElement('span');
            overlay.className = 'character-card-overlay';
            overlay.innerHTML = '<i class="fas fa-images" aria-hidden="true"></i>';

            const details = document.createElement('span');
            details.className = 'character-card-details';
            details.innerHTML = `<strong>${name}</strong><small>${items.length} screenshots</small>`;

            button.append(img, overlay, details);
            card.appendChild(button);
            fragment.appendChild(card);
        });

        this.grid.appendChild(fragment);
        if (animate) this.animateGrid();
    }

    formatCharacterName(folder) {
        return folder
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
            .replace(/And/g, '&');
    }

    initGalleryToggle() {
        if (!this.galleryToggle || !this.galleryContent) return;

        this.galleryToggle.addEventListener('click', () => {
            const isExpanded = this.galleryToggle.getAttribute('aria-expanded') === 'true';
            this.galleryToggle.setAttribute('aria-expanded', String(!isExpanded));
            if (isExpanded && this.galleryContent.contains(document.activeElement)) {
                this.galleryToggle.focus();
            }
            this.galleryContent.classList.toggle('collapsed', isExpanded);
            this.galleryContent.setAttribute('aria-hidden', String(isExpanded));
            this.galleryContent.inert = isExpanded;
            this.galleryToggle.querySelector('.gallery-toggle-label').textContent = isExpanded ? 'Show gallery' : 'Hide gallery';
            this.galleryToggle.querySelector('i').className = `fas fa-chevron-${isExpanded ? 'down' : 'up'}`;
        });
    }

    setFilter(filterId) {
        if (!filterId) return;
        if (filterId === this.activeFilter && !this.selectedCharacter) return;
        this.activeFilter = filterId;
        this.selectedCharacter = null;
        this.filterBar.querySelectorAll('.gallery-filter').forEach((button) => {
            button.setAttribute('aria-pressed', String(button.dataset.filter === filterId));
        });
        this.renderGrid(true);
        if (this.characterBackButton) this.characterBackButton.hidden = true;
    }

    getFilteredItems() {
        if (this.activeFilter === 'all') return ITEMS;
        return ITEMS.filter((item) => item.category === this.activeFilter);
    }

    renderGrid(animate = false) {
        if (this.activeFilter === 'characters' && !this.selectedCharacter) {
            this.renderCharacterCards(animate);
            if (this.characterBackButton) this.characterBackButton.hidden = true;
            return;
        }

        this.visibleItems = this.getFilteredItems().filter((item) => (
            this.activeFilter !== 'characters' || item.path.split('/')[1] === this.selectedCharacter
        ));
        this.grid.innerHTML = '';

        const fragment = document.createDocumentFragment();

        let previousGroup = '';
        this.visibleItems.forEach((item, index) => {
            const name = formatImageName(item.path);
            const group = this.getGroup(item.path);
            if (group !== previousGroup) {
                const heading = document.createElement('h3');
                heading.className = 'gallery-group-heading';
                heading.textContent = group;
                fragment.appendChild(heading);
                previousGroup = group;
            }

            const figure = document.createElement('figure');
            figure.className = 'gallery-card';
            figure.dataset.index = String(index);
            figure.dataset.path = item.path;

            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'gallery-thumb';
            button.setAttribute('aria-label', `View ${name}`);

            const img = document.createElement('img');
            img.src = thumbUrl(this.config.THUMB_URL, item.path);
            img.alt = name;
            img.loading = 'lazy';
            img.decoding = 'async';
            img.width = 560;
            img.height = 315;

            const caption = document.createElement('figcaption');
            caption.className = 'gallery-caption';
            caption.textContent = name;

            const setBackground = document.createElement('button');
            setBackground.type = 'button';
            setBackground.className = 'gallery-set-background';
            setBackground.setAttribute('aria-label', `Set ${name} as background`);
            setBackground.setAttribute('aria-pressed', String(this.backgroundManager?.selectedImage === item.path));
            setBackground.classList.toggle('selected', this.backgroundManager?.selectedImage === item.path);
            setBackground.title = 'Set as background';
            setBackground.innerHTML = '<i class="fas fa-image" aria-hidden="true"></i>';

            button.appendChild(img);
            figure.appendChild(button);
            figure.appendChild(setBackground);
            figure.appendChild(caption);
            fragment.appendChild(figure);
        });

        this.grid.appendChild(fragment);

        if (this.characterBackButton) {
            this.characterBackButton.hidden = this.activeFilter !== 'characters' || !this.selectedCharacter;
        }
        if (animate) this.animateGrid();
    }

    animateGrid() {
        this.grid.classList.remove('gallery-animate');
        // Force reflow so the animation restarts.
        void this.grid.offsetWidth;
        this.grid.classList.add('gallery-animate');
    }

    getGroup(path) {
        const parts = path.split('/');
        const category = parts[0];
        const collection = {
            characters: 'Characters',
            locations: 'Locations',
            artworks: 'Artwork & Wallpapers',
            'ultimate-edition': 'Ultimate Edition Benefits',
            'vintage-vice-city': 'Vintage Vice City Pack',
            music: 'Music'
        }[category] || 'Gallery';

        if (category !== 'characters' && category !== 'locations') return collection;

        const folder = parts[1] || '';
        const readableFolder = folder
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
            .replace(/And/g, '&');
        return `${collection} · ${readableFolder}`;
    }

    initLightbox() {
        this.lightboxImage = this.lightbox.querySelector('.lightbox-image');
        this.lightboxCaption = this.lightbox.querySelector('.lightbox-caption');
        this.lightboxCounter = this.lightbox.querySelector('.lightbox-counter');
        this.setBackgroundButton = this.lightbox.querySelector('.lightbox-set-background');

        this.grid.addEventListener('click', (event) => {
            const characterButton = event.target.closest('.character-card-button');
            if (characterButton) {
                this.selectedCharacter = characterButton.dataset.character;
                this.renderGrid(true);
                this.characterBackButton.hidden = false;
                this.characterBackButton.focus();
                return;
            }

            const backgroundButton = event.target.closest('.gallery-set-background');
            if (backgroundButton) {
                this.setBackground(backgroundButton.closest('.gallery-card').dataset.path);
                return;
            }
            const button = event.target.closest('.gallery-thumb');
            if (!button) return;
            const figure = button.closest('.gallery-card');
            this.open(Number(figure.dataset.index));
        });

        if (this.setBackgroundButton) {
            this.setBackgroundButton.addEventListener('click', () => {
                const item = this.visibleItems[this.currentIndex];
                if (item) this.setBackground(item.path);
            });
        }

        this.lightbox.addEventListener('click', (event) => {
            if (event.target.closest('[data-action="close"]')) {
                this.close();
            } else if (event.target.closest('.lightbox-nav.prev')) {
                this.step(-1);
            } else if (event.target.closest('.lightbox-nav.next')) {
                this.step(1);
            }
        });

        document.addEventListener('keydown', (event) => {
            if (!this.lightbox.classList.contains('open')) return;
            if (event.key === 'Escape') this.close();
            else if (event.key === 'ArrowLeft') this.step(-1);
            else if (event.key === 'ArrowRight') this.step(1);
        });
    }

    open(index) {
        if (index < 0 || index >= this.visibleItems.length) return;
        this.currentIndex = index;
        this.lastFocused = document.activeElement;
        this.updateLightbox();
        this.lightbox.classList.add('open');
        this.lightbox.setAttribute('aria-hidden', 'false');
        this.lightbox.querySelector('.lightbox-close').focus();
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightbox.classList.remove('open');
        this.lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (this.lastFocused) this.lastFocused.focus();
    }

    step(delta) {
        const total = this.visibleItems.length;
        this.currentIndex = (this.currentIndex + delta + total) % total;
        this.updateLightbox();
    }

    updateLightbox() {
        const item = this.visibleItems[this.currentIndex];
        if (!item) return;
        const name = formatImageName(item.path);
        this.lightboxImage.src = imageUrl(this.config.BASE_URL, item.path);
        this.lightboxImage.alt = name;
        this.lightboxCaption.textContent = name;
        this.lightboxCounter.textContent = `${this.currentIndex + 1} / ${this.visibleItems.length}`;
        if (this.setBackgroundButton) {
            const isSelected = this.backgroundManager?.selectedImage === item.path;
            this.setBackgroundButton.setAttribute('aria-pressed', String(isSelected));
            this.setBackgroundButton.querySelector('span').textContent = isSelected ? 'Background selected' : 'Set as background';
        }
    }

    setBackground(path) {
        if (!this.backgroundManager || !path) return;
        if (!this.backgroundManager.selectBackground(path)) return;
        this.updateLightbox();

        this.grid.querySelectorAll('.gallery-set-background').forEach((button) => {
            const isSelected = button.closest('.gallery-card').dataset.path === path;
            button.classList.toggle('selected', isSelected);
            button.setAttribute('aria-pressed', String(isSelected));
        });
    }
}
