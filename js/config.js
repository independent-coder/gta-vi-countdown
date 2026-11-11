// Configuration constants for GTA VI Countdown App
export const CONFIG = {
    // Date settings
    TARGET_DATE: new Date('November 18, 2026 23:59:59').getTime(),
    PRELOAD_DATE: new Date('November 9, 2026 23:59:59').getTime(),
    START_DATE: new Date('February 4, 2022 00:00:00').getTime(),

    // Media settings
    BASE_URL: 'assets/backgrounds/',
    THUMB_URL: 'assets/thumbs/',
    IMAGE_PARAMS: '',

    // Device detection thresholds
    MOBILE_BREAKPOINT: 768,
    SLOW_CONNECTION_THRESHOLD: 1.5, // Mbps

    // Timing intervals
    COUNTDOWN_UPDATE_INTERVAL: 1000,
    QUOTE_CHANGE_INTERVAL: 10000,
    BACKGROUND_ROTATION_DESKTOP: 30000,
    BACKGROUND_ROTATION_MOBILE: 60000,

    // Preloading settings
    PRELOAD_COUNTS: {
        SLOW_CONNECTION: 1,
        MOBILE: 3,
        DESKTOP: 5
    },

    // Animation durations
    BACKGROUND_FADE_DURATION: 1000,
    BACKGROUND_FADE_DELAY: 100,
    BACKGROUND_INFO_DELAY: 500
};

// Motivational quotes
export const QUOTES = [
    "The wait is almost over...",
    "Get ready for Vice City...",
    "The next chapter is coming...",
    "Vice City, here we come...",
    "The evolution continues...",
    "New adventures await...",
    "The streets will be alive again...",
    "Get ready to rise to the top...",
    "The city is calling...",
    "The legacy continues...",
    "The countdown has begun..."
];

// Official GTA VI media and store links
export const OFFICIAL_LINKS = [
    {
        label: 'Merch Collection',
        description: 'Goodtime State & Vice City apparel',
        url: 'https://store.rockstargames.com/merchandise/gtavi-goodtime-state-vice-city-collection',
        icon: 'fa-solid fa-shirt'
    },
    {
        label: 'Official Music',
        description: 'Explore in-game radio, the album and Justice\'s score',
        url: 'https://www.rockstargames.com/VI/music',
        icon: 'fa-solid fa-headphones'
    },
    {
        label: 'Rockstar Games Newswire',
        description: 'The latest official GTA VI announcement',
        url: 'https://www.rockstargames.com/newswire/',
        icon: 'fa-solid fa-newspaper'
    }
];

// Official trailer footage: https://www.youtube.com/watch?v=rz1B4B2yBZY (Rockstar Games).

// Official trailers
export const TRAILERS = [
    {
        title: 'Trailer 1',
        date: 'December 2023',
        videoId: 'QdBZY2fkU-0'
    },
    {
        title: 'Trailer 2',
        date: 'May 2025',
        videoId: 'VQRLujxTm3c'
    },
    {
        title: 'An Extended Look',
        date: 'August 2026',
        videoId: 'tJbzMqJGH4k'
    },
    {
        title: 'Launch Trailer',
        date: 'October 2026',
        videoId: 'rz1B4B2yBZY'
    },
    {
        title: 'Pre-Load Now Trailer',
        date: 'November 2026',
        videoId: '_yl5ELcmugI'
    }
];

// Background images array
export const BACKGROUND_IMAGES = [
    // Characters
    'characters/BoobieIke/Boobie_Ike_01.jpg',
    'characters/BoobieIke/Boobie_Ike_02.jpg',
    'characters/BoobieIke/Boobie_Ike_03.jpg',
    'characters/BoobieIke/Boobie_Ike_04.jpg',
    'characters/BrianHeder/Brian_Heder_01.jpg',
    'characters/BrianHeder/Brian_Heder_02.jpg',
    'characters/BrianHeder/Brian_Heder_03.jpg',
    'characters/BrianHeder/Brian_Heder_04.jpg',
    'characters/CalHampton/Cal_Hampton_01.jpg',
    'characters/CalHampton/Cal_Hampton_02.jpg',
    'characters/CalHampton/Cal_Hampton_03.jpg',
    'characters/CalHampton/Cal_Hampton_04.jpg',
    'characters/DreQuanPriest/DreQuan_Priest_01.jpg',
    'characters/DreQuanPriest/DreQuan_Priest_02.jpg',
    'characters/DreQuanPriest/DreQuan_Priest_03.jpg',
    'characters/DreQuanPriest/DreQuan_Priest_04.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_01.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_02.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_03.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_04.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_05.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_06.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_07.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_08.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_09.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_10.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_11.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_12.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_13.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_14.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_15.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_16.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_17.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_18.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_19.jpg',
    'characters/JasonAndLucia/Jason_and_Lucia_20.jpg',
    'characters/JasonDuval/Jason_Duval_01.jpg',
    'characters/JasonDuval/Jason_Duval_02.jpg',
    'characters/JasonDuval/Jason_Duval_03.jpg',
    'characters/JasonDuval/Jason_Duval_04.jpg',
    'characters/JasonDuval/Jason_Duval_05.jpg',
    'characters/JasonDuval/Jason_Duval_06.jpg',
    'characters/JasonDuval/Jason_Duval_07.jpg',
    'characters/JasonDuval/Jason_Duval_08.jpg',
    'characters/JasonDuval/Jason_Duval_09.jpg',
    'characters/JasonDuval/Jason_Duval_10.jpg',
    'characters/JasonDuval/Jason_Duval_11.jpg',
    'characters/JasonDuval/Jason_Duval_12.jpg',
    'characters/JasonDuval/Jason_Duval_13.jpg',
    'characters/JasonDuval/Jason_Duval_14.jpg',
    'characters/JasonDuval/Jason_Duval_15.jpg',
    'characters/JasonDuval/Jason_Duval_16.jpg',
    'characters/JasonDuval/Jason_Duval_17.jpg',
    'characters/JasonDuval/Jason_Duval_18.jpg',
    'characters/JasonDuval/Jason_Duval_19.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_01.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_02.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_03.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_04.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_05.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_06.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_07.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_08.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_09.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_10.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_11.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_12.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_13.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_14.jpg',
    'characters/RaulBautista/Raul_Bautista_01.jpg',
    'characters/RaulBautista/Raul_Bautista_02.jpg',
    'characters/RaulBautista/Raul_Bautista_03.jpg',
    'characters/RaulBautista/Raul_Bautista_04.jpg',
    'characters/RealDimez/Real_Dimez_01.jpg',
    'characters/RealDimez/Real_Dimez_02.jpg',
    'characters/RealDimez/Real_Dimez_03.jpg',
    'characters/RealDimez/Real_Dimez_04.jpg',

    // Locations
    'locations/Ambrosia/Ambrosia_01.jpg',
    'locations/Ambrosia/Ambrosia_02.jpg',
    'locations/Ambrosia/Ambrosia_03.jpg',
    'locations/Ambrosia/Ambrosia_04.jpg',
    'locations/Ambrosia/Ambrosia_05.jpg',
    'locations/Ambrosia/Ambrosia_06.jpg',
    'locations/Grassrivers/Grassrivers_01.jpg',
    'locations/Grassrivers/Grassrivers_02.jpg',
    'locations/Grassrivers/Grassrivers_03.jpg',
    'locations/Grassrivers/Grassrivers_04.jpg',
    'locations/Grassrivers/Grassrivers_05.jpg',
    'locations/Grassrivers/Grassrivers_06.jpg',
    'locations/Grassrivers/Grassrivers_07.jpg',
    'locations/Grassrivers/Grassrivers_08.jpg',
    'locations/LeonidaKeys/Leonida_Keys_01.jpg',
    'locations/LeonidaKeys/Leonida_Keys_02.jpg',
    'locations/LeonidaKeys/Leonida_Keys_03.jpg',
    'locations/LeonidaKeys/Leonida_Keys_04.jpg',
    'locations/LeonidaKeys/Leonida_Keys_05.jpg',
    'locations/LeonidaKeys/Leonida_Keys_06.jpg',
    'locations/LeonidaKeys/Leonida_Keys_07.jpg',
    'locations/MountKalagaNationalPark/Mount_Kalaga_National_Park_01.jpg',
    'locations/MountKalagaNationalPark/Mount_Kalaga_National_Park_02.jpg',
    'locations/MountKalagaNationalPark/Mount_Kalaga_National_Park_03.jpg',
    'locations/MountKalagaNationalPark/Mount_Kalaga_National_Park_04.jpg',
    'locations/MountKalagaNationalPark/Mount_Kalaga_National_Park_05.jpg',
    'locations/MountKalagaNationalPark/Mount_Kalaga_National_Park_06.jpg',
    'locations/PortGellhorn/Port_Gellhorn_01.jpg',
    'locations/PortGellhorn/Port_Gellhorn_02.jpg',
    'locations/PortGellhorn/Port_Gellhorn_03.jpg',
    'locations/PortGellhorn/Port_Gellhorn_04.jpg',
    'locations/PortGellhorn/Port_Gellhorn_05.jpg',
    'locations/PortGellhorn/Port_Gellhorn_06.jpg',
    'locations/PortGellhorn/Port_Gellhorn_07.jpg',
    'locations/ViceCity/Vice_City_01.jpg',
    'locations/ViceCity/Vice_City_02.jpg',
    'locations/ViceCity/Vice_City_03.jpg',
    'locations/ViceCity/Vice_City_04.jpg',
    'locations/ViceCity/Vice_City_05.jpg',
    'locations/ViceCity/Vice_City_06.jpg',
    'locations/ViceCity/Vice_City_07.jpg',
    'locations/ViceCity/Vice_City_08.jpg',
    'locations/ViceCity/Vice_City_09.jpg',
    'locations/ViceCity/Vice_City_10.jpg',
    'locations/ViceCity/Vice_City_11.jpg',
    'locations/ViceCity/Vice_City_12.jpg',
    'locations/ViceCity/Vice_City_13.jpg',
    'locations/ViceCity/Vice_City_14.jpg',
    'locations/ViceCity/Vice_City_15.jpg',
    'locations/ViceCity/Vice_City_16.jpg',
    'locations/ViceCity/Vice_City_17.jpg',
    'locations/ViceCity/Vice_City_18.jpg',
    'locations/ViceCity/Vice_City_19.jpg',
    'locations/ViceCity/Vice_City_20.jpg',
    'locations/ViceCity/Vice_City_21.jpg',
    'locations/ViceCity/Vice_City_22.jpg',
    'locations/ViceCity/Vice_City_23.jpg',
    'locations/ViceCity/Vice_City_24.jpg',
    'locations/ViceCity/Vice_City_25.jpg',
    'locations/ViceCity/Vice_City_26.jpg',
    'locations/ViceCity/Vice_City_27.jpg',
    'locations/ViceCity/Vice_City_28.jpg',

    // Artwork & Wallpapers
    'artworks/BoobieIke/Boobie_Ike_landscape.jpg',
    'artworks/BrianHeder/Brian_Heder_landscape.jpg',
    'artworks/CalHampton/Cal_Hampton_landscape.jpg',
    'artworks/DreQuanPriest/DreQuan_Priest_landscape.jpg',
    'artworks/JasonLucia01/Jason_and_Lucia_01_landscape.jpg',
    'artworks/JasonLucia01Logos/Jason_and_Lucia_01_With_Logos_landscape.jpg',
    'artworks/JasonLucia02/Jason_and_Lucia_02_landscape.jpg',
    'artworks/JasonLucia02Logos/Jason_and_Lucia_02_With_Logos_landscape.jpg',
    'artworks/JasonLuciaBeach/Jason_and_Lucia_Beach_landscape.jpg',
    'artworks/JasonLuciaBeachLogos/Jason_and_Lucia_Beach_With_Logos_landscape.jpg',
    'artworks/JasonLuciaMotel/Jason_and_Lucia_Motel_landscape.jpg',
    'artworks/JasonLuciaLockAndLoad/Jason_Lucia_Lock_And_Load_landscape.jpg',
    'artworks/JasonLuciaLockAndLoadLogos/Jason_Lucia_Lock_And_Load_With_Logos_landscape.jpg',
    'artworks/JasonLuciaRobbery/Jason_and_Lucia_Robbery_landscape.jpg',
    'artworks/JasonLuciaRobberyLogo/Jason_and_Lucia_Robbery_With_Logo_landscape.jpg',
    'artworks/JasonLuciaRooftop/Jason_and_Lucia_Rooftop_landscape.jpg',
    'artworks/JasonLuciaRooftopLogos/Jason_and_Lucia_Rooftop_With_Logos_landscape.jpg',
    'artworks/OfficialCoverArt/Official_Cover_Art_landscape.jpg',
    'artworks/Postcards/Ambrosia/Ambrosia_Postcard_landscape.jpg',
    'artworks/Postcards/Grassrivers/Grassrivers_Postcard_landscape.jpg',
    'artworks/Postcards/Leonida_Keys/Leonida_Keys_Postcard_landscape.jpg',
    'artworks/Postcards/Mount_Kalaga_National_Park/Mount_Kalaga_National_Park_Postcard_landscape.jpg',
    'artworks/Postcards/Port_Gellhorn/Port_Gellhorn_Postcard_landscape.jpg',
    'artworks/Postcards/Vice_City/Vice_City_Postcard_landscape.jpg',
    'artworks/RaulBautista/Raul_Bautista_landscape.jpg',
    'artworks/RealDimez/Real_Dimez_landscape.jpg',
    'artworks/TheAlbumCoverArt/The_Album_Cover_Art_landscape.jpg',

    // Ultimate Edition Benefits
    'ultimate-edition/ULTIMATE_EDITION_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_02.jpg',
    'ultimate-edition/ULTIMATE_EDITION_ELECTRIC_FANG_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_ELECTRIC_FANG_02.jpg',
    'ultimate-edition/ULTIMATE_EDITION_ELECTRIC_FANG_03.jpg',
    'ultimate-edition/ULTIMATE_EDITION_ELECTRIC_FANG_04.jpg',
    'ultimate-edition/ULTIMATE_EDITION_GOODTIME_GEAR_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_GROTTI_CHEETAH_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_GROTTI_CHEETAH_02.jpg',
    'ultimate-edition/ULTIMATE_EDITION_GROTTI_CHEETAH_03.jpg',
    'ultimate-edition/ULTIMATE_EDITION_GROTTI_CHEETAH_04.jpg',
    'ultimate-edition/ULTIMATE_EDITION_HAWK_AND_LITTLE_MORGAN_REVOLVERS_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_HAWK_AND_LITTLE_MORGAN_REVOLVERS_02.jpg',
    'ultimate-edition/ULTIMATE_EDITION_ONE_EYED_WILLIE_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_ONE_EYED_WILLIE_02.jpg',
    'ultimate-edition/ULTIMATE_EDITION_ONE_EYED_WILLIE_03.jpg',
    'ultimate-edition/ULTIMATE_EDITION_PTT_STORE_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_RIDEOUT_CUSTOMS_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_RIDEOUT_CUSTOMS_02.jpg',
    'ultimate-edition/ULTIMATE_EDITION_RIDEOUT_CUSTOMS_03.jpg',
    'ultimate-edition/ULTIMATE_EDITION_SAFEHOUSE_VEHICLES_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_SAFEHOUSE_VEHICLES_02.jpg',
    'ultimate-edition/ULTIMATE_EDITION_SAFEHOUSE_VEHICLES_03.jpg',
    'ultimate-edition/ULTIMATE_EDITION_SARAS_SALON_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_SARAS_SALON_02.jpg',
    'ultimate-edition/ULTIMATE_EDITION_SARAS_SALON_03.jpg',
    'ultimate-edition/ULTIMATE_EDITION_SQUALO_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_SQUALO_02.jpg',
    'ultimate-edition/ULTIMATE_EDITION_SQUALO_03.jpg',
    'ultimate-edition/ULTIMATE_EDITION_SQUALO_04.jpg',
    'ultimate-edition/ULTIMATE_EDITION_STOCK_305_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_STOCK_305_02.jpg',
    'ultimate-edition/ULTIMATE_EDITION_STOCK_305_03.jpg',
    'ultimate-edition/ULTIMATE_EDITION_STOCK_305_04.jpg',
    'ultimate-edition/ULTIMATE_EDITION_VAPID_BUGGY_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_VAPID_BUGGY_02.jpg',
    'ultimate-edition/ULTIMATE_EDITION_VAPID_BUGGY_03.jpg',
    'ultimate-edition/ULTIMATE_EDITION_VAPID_BUGGY_04.jpg',
    'ultimate-edition/ULTIMATE_EDITION_VAPID_GANADO_RETRO_BUILD_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_VICE_CITY_STYLE_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_VICE_CITY_STYLE_02.jpg',
    'ultimate-edition/ULTIMATE_EDITION_VICE_CITY_STYLE_03.jpg',
    'ultimate-edition/ULTIMATE_EDITION_VICE_CITY_STYLE_04.jpg',
    'ultimate-edition/ULTIMATE_EDITION_VICE_CITY_STYLE_05.jpg',
    'ultimate-edition/ULTIMATE_EDITION_WEAPON_VARIANTS_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_WYMAN_CAR_COLLECTION_01.jpg',
    'ultimate-edition/ULTIMATE_EDITION_WYMAN_CAR_COLLECTION_02.jpg',
    'ultimate-edition/ULTIMATE_EDITION_WYMAN_CAR_COLLECTION_03.jpg',
    'ultimate-edition/ULTIMATE_EDITION_WYMAN_CAR_COLLECTION_04.jpg',
    'ultimate-edition/ULTIMATE_EDITION_WYMAN_CAR_COLLECTION_05.jpg',
    'ultimate-edition/ULTIMATE_EDITION_WYMAN_CAR_COLLECTION_06.jpg',

    // Vintage Vice City Pack
    'vintage-vice-city/VINTAGE_VICE_CITY_PACK_01.jpg',
    'vintage-vice-city/VINTAGE_VICE_CITY_PACK_02.jpg',
    'vintage-vice-city/VINTAGE_VICE_CITY_PACK_EXCLUSIVE_LOOKS_01.jpg',
    'vintage-vice-city/VINTAGE_VICE_CITY_PACK_EXCLUSIVE_LOOKS_02.jpg',
    'vintage-vice-city/VINTAGE_VICE_CITY_PACK_EXCLUSIVE_LOOKS_03.jpg',
    'vintage-vice-city/VINTAGE_VICE_CITY_PACK_EXCLUSIVE_LOOKS_04.jpg',
    'vintage-vice-city/VINTAGE_VICE_CITY_PACK_EXCLUSIVE_LOOKS_05.jpg',
    'vintage-vice-city/VINTAGE_VICE_CITY_PACK_VAPID_STANIER_01.jpg',
    'vintage-vice-city/VINTAGE_VICE_CITY_PACK_VAPID_STANIER_02.jpg',
    'vintage-vice-city/VINTAGE_VICE_CITY_PACK_VAPID_STANIER_03.jpg',
    'vintage-vice-city/VINTAGE_VICE_CITY_PACK_VAPID_STANIER_04.jpg',
    'vintage-vice-city/VINTAGE_VICE_CITY_WEAPON_PATTERN_01.jpg',

    // Music
    'music/Album_Background_Desktop.jpg',
    'music/Hero_Background_Desktop.jpg',
    'music/Radio_Background_Desktop.jpg',
    'music/Score_Background_Desktop.jpg'
];


// The 139 official screenshots (characters + locations), used by the gallery.
export const SCREENSHOTS = BACKGROUND_IMAGES.filter(
    (path) => path.startsWith('characters/') || path.startsWith('locations/')
);

// The 27 official artwork & wallpapers.
export const ARTWORKS = BACKGROUND_IMAGES.filter((path) => path.startsWith('artworks/'));

// The 51 Ultimate Edition benefit images.
export const ULTIMATE_EDITION = BACKGROUND_IMAGES.filter((path) => path.startsWith('ultimate-edition/'));

// The 12 Vintage Vice City Pack images.
export const VINTAGE_VICE_CITY = BACKGROUND_IMAGES.filter((path) => path.startsWith('vintage-vice-city/'));

// The 4 official music-section background images.
export const MUSIC = BACKGROUND_IMAGES.filter((path) => path.startsWith('music/'));
