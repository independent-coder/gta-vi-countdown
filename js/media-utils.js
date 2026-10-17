// Shared helpers for turning media file paths into readable labels.

// Words that should stay uppercase when present in an all-caps name.
const ACRONYMS = new Set(['PTT', 'USA', 'GTA', 'VI', 'VIP', 'SS', 'TV', 'HD', 'UK', 'DJ']);

/**
 * Turn an underscore-separated token into a readable label.
 * All-caps words are title-cased ("WYMAN" -> "Wyman") while mixed-case names are
 * preserved ("DreQuan", "Boobie"), and "and" becomes "&".
 */
function humanize(value) {
    return value
        .replace(/_/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .map((word) => {
            if (word === 'and' || word === 'And' || word === 'AND') return '&';
            const isAllCaps = word.length > 1 && word === word.toUpperCase() && /[A-Z]/.test(word);
            if (isAllCaps && !ACRONYMS.has(word)) {
                return word.charAt(0) + word.slice(1).toLowerCase();
            }
            return word;
        })
        .join(' ');
}

/**
 * Turn a background/gallery path into a human readable title.
 * Examples:
 *   'locations/ViceCity/Vice_City_12.jpg'                         -> 'Vice City 12'
 *   'characters/JasonAndLucia/Jason_and_Lucia_04.jpg'             -> 'Jason & Lucia 04'
 *   'artworks/Postcards/Vice_City/Vice_City_Postcard_landscape.jpg' -> 'Vice City Postcard'
 *   'artworks/OfficialCoverArt/Official_Cover_Art_landscape.jpg'  -> 'Official Cover Art'
 *   'ultimate-edition/ULTIMATE_EDITION_PTT_STORE_01.jpg'          -> 'PTT Store 01'
 *   'vintage-vice-city/VINTAGE_VICE_CITY_PACK_EXCLUSIVE_LOOKS_03.jpg' -> 'Exclusive Looks 03'
 *   'music/Hero_Background_Desktop.jpg'                           -> 'Music Hero'
 */
export function formatImageName(path) {
    const file = path.split('/').pop().replace(/\.[^.]+$/, '');
    const top = path.split('/')[0];

    if (top === 'artworks') {
        let base = file.replace(/_landscape$/i, '');
        if (/_postcard$/i.test(base)) {
            return `${humanize(base.replace(/_postcard$/i, ''))} Postcard`;
        }
        if (/_cover_art$/i.test(base)) {
            return humanize(base);
        }
        return `${humanize(base)} Artwork`;
    }

    if (top === 'ultimate-edition') {
        const rest = file.replace(/^ULTIMATE_EDITION_/i, '');
        if (/^\d+$/.test(rest)) return `Ultimate Edition ${rest}`;
        return humanize(rest);
    }

    if (top === 'vintage-vice-city') {
        const rest = file
            .replace(/^VINTAGE_VICE_CITY_PACK_/i, '')
            .replace(/^VINTAGE_VICE_CITY_/i, '');
        if (/^\d+$/.test(rest)) return `Vintage Vice City Pack ${rest}`;
        return humanize(rest);
    }

    if (top === 'music') {
        const base = file.replace(/_background(_desktop|_mobile)?$/i, '');
        return `Music ${humanize(base)}`;
    }

    const match = file.match(/^(.*)_(\d{1,2})$/);
    if (match) return `${humanize(match[1])} ${match[2]}`;
    return humanize(file);
}

/** Category id for a media path — matches the gallery filter ids. */
export function getImageCategory(path) {
    return path.split('/')[0];
}

/** Absolute URL for a full resolution image. */
export function imageUrl(baseUrl, path) {
    return baseUrl + path;
}

/** Absolute URL for the generated thumbnail of an image. */
export function thumbUrl(thumbBaseUrl, path) {
    return thumbBaseUrl + path;
}
