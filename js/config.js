// Configuration constants for GTA VI Countdown App
export const CONFIG = {
    // Date settings
    TARGET_DATE: new Date('November 19, 2026 00:00:00').getTime(),
    START_DATE: new Date('February 4, 2022 00:00:00').getTime(),
    
    // Background settings
    BASE_URL: 'assets/backgrounds/',
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
    'characters/JasonDuval/Jason_Duval_01.jpg',
    'characters/JasonDuval/Jason_Duval_02.jpg',
    'characters/JasonDuval/Jason_Duval_03.jpg',
    'characters/JasonDuval/Jason_Duval_04.jpg',
    'characters/JasonDuval/Jason_Duval_05.jpg',
    'characters/JasonDuval/Jason_Duval_06.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_01.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_02.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_03.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_04.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_05.jpg',
    'characters/LuciaCaminos/Lucia_Caminos_06.jpg',
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
    'locations/GrassRivers/GrassRivers_01.jpg',
    'locations/GrassRivers/GrassRivers_02.jpg',
    'locations/GrassRivers/GrassRivers_03.jpg',
    'locations/GrassRivers/GrassRivers_04.jpg',
    'locations/LeonidaKeys/Leonida_Keys_01.jpg',
    'locations/LeonidaKeys/Leonida_Keys_02.jpg',
    'locations/LeonidaKeys/Leonida_Keys_03.jpg',
    'locations/LeonidaKeys/Leonida_Keys_04.jpg',
    'locations/LeonidaKeys/Leonida_Keys_05.jpg',
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
    'locations/ViceCity/Vice_City_01.jpg',
    'locations/ViceCity/Vice_City_02.jpg',
    'locations/ViceCity/Vice_City_03.jpg',
    'locations/ViceCity/Vice_City_04.jpg',
    'locations/ViceCity/Vice_City_05.jpg',
    'locations/ViceCity/Vice_City_06.jpg',
    'locations/ViceCity/Vice_City_07.jpg',
    'locations/ViceCity/Vice_City_08.jpg',
    'locations/ViceCity/Vice_City_09.jpg',
    
    // Artworks
    'artworks/BoobieIke/Boobie_Ike_landscape.jpg',
    'artworks/BrianHeder/Brian_Heder_landscape.jpg',
    'artworks/CalHampton/Cal_Hampton_landscape.jpg',
    'artworks/DreQuanPriest/DreQuan_Priest_landscape.jpg',
    'artworks/JasonLucia01/Jason_and_Lucia_01_landscape.jpg',
    'artworks/JasonLucia02/Jason_and_Lucia_02_landscape.jpg',
    'artworks/JasonLuciaMotel/Jason_and_Lucia_Motel_landscape.jpg',
    'artworks/Postcards/Ambrosia/Ambrosia_Postcard_landscape.jpg',
    'artworks/Postcards/Grassrivers/Grassrivers_Postcard_landscape.jpg',
    'artworks/Postcards/Leonida_Keys/Leonida_Keys_Postcard_landscape.jpg',
    'artworks/Postcards/Mount_Kalaga_National_Park/Mount_Kalaga_National_Park_Postcard_landscape.jpg',
    'artworks/Postcards/Port_Gellhorn/Port_Gellhorn_Postcard_landscape.jpg',
    'artworks/Postcards/Vice_City/Vice_City_Postcard_landscape.jpg',
    'artworks/RaulBautista/Raul_Bautista_landscape.jpg',
    'artworks/RealDimez/Real_Dimez_landscape.jpg'
];

// GTA VI Milestones with dates and descriptions
export const MILESTONES = [
    {
        title: "First Trailer Released",
        date: new Date('December 5, 2023 00:00:00').getTime(),
        description: "The world got its first look at Vice City",
        icon: "fa-film",
        type: "trailer"
    },
    {
        title: "Second Trailer Released", 
        date: new Date('May 16, 2025 00:00:00').getTime(),
        description: "More details about Jason and Lucia revealed",
        icon: "fa-video",
        type: "trailer"
    },
    {
        title: "Would've played by then",
        date: new Date('May 26, 2026 00:00:00').getTime(),
        description: "The game would've been playable by now if it wasn't delayed",
        icon: "fa-gamepad",
        type: "milestone"
    },
    {
        title: "5 Months Until Release",
        date: new Date('June 19, 2026 00:00:00').getTime(),
        description: "The final countdown begins!",
        icon: "fa-calendar-alt",
        type: "milestone"
    },
    {
        title: "1 Month Until Release",
        date: new Date('October 19, 2026 00:00:00').getTime(),
        description: "Almost there! Vice City awaits...",
        icon: "fa-clock",
        type: "milestone"
    },
    {
        title: "1 Week Until Release",
        date: new Date('November 12, 2026 00:00:00').getTime(),
        description: "The final week of waiting!",
        icon: "fa-hourglass-half",
        type: "milestone"
    },
    {
        title: "1 Day Until Release",
        date: new Date('November 18, 2026 00:00:00').getTime(),
        description: "Tomorrow is the day!",
        icon: "fa-sun",
        type: "milestone"
    },
    {
        title: "Release Day!",
        date: new Date('November 19, 2026 00:00:00').getTime(),
        description: "Vice City is finally here!",
        icon: "fa-flag-checkered",
        type: "milestone"
    }
];
