// utils/astroCalculations.js
// Comprehensive Vedic Astrology Calculations

const ZODIAC_SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const NAKSHATRAS = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
  "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshta",
  "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
  "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

const PLANETS = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"];

const HOUSES = [
  "1st House (Ascendant)",
  "2nd House (Wealth)",
  "3rd House (Siblings)",
  "4th House (Home)",
  "5th House (Children)",
  "6th House (Health)",
  "7th House (Marriage)",
  "8th House (Longevity)",
  "9th House (Fortune)",
  "10th House (Career)",
  "11th House (Gains)",
  "12th House (Losses)"
];

/**
 * Calculate Rasi Chart (D1) - Divisional Chart 1
 * Returns planetary positions in zodiac signs
 */
function calculateRasiChart(planetaryLongitudes) {
  const rasiChart = {};

  PLANETS.forEach((planet, index) => {
    const longitude = planetaryLongitudes[planet] || 0;
    const signIndex = Math.floor(longitude / 30); // 30° per sign
    const signDegree = longitude % 30;

    rasiChart[planet] = {
      sign: ZODIAC_SIGNS[signIndex % 12],
      signIndex: signIndex % 12,
      longitude: longitude,
      degree: signDegree,
      minute: Math.floor((signDegree % 1) * 60),
      second: Math.floor(((signDegree % 1) * 60 % 1) * 60)
    };
  });

  return rasiChart;
}

/**
 * Calculate Navamsa Chart (D9) - Divisional Chart 9
 * Each sign is divided into 9 parts (3°20' each)
 */
function calculateNavamsaChart(planetaryLongitudes) {
  const navamsaChart = {};

  PLANETS.forEach((planet) => {
    const longitude = planetaryLongitudes[planet] || 0;
    const navamsaLongitude = (longitude * 9) % 360;
    const signIndex = Math.floor(navamsaLongitude / 30);
    const signDegree = navamsaLongitude % 30;

    navamsaChart[planet] = {
      sign: ZODIAC_SIGNS[signIndex % 12],
      signIndex: signIndex % 12,
      navamsaLongitude: navamsaLongitude,
      degree: signDegree,
      minute: Math.floor((signDegree % 1) * 60),
      second: Math.floor(((signDegree % 1) * 60 % 1) * 60),
      navamsaNumber: Math.floor((longitude % 30) / (30 / 9)) + 1
    };
  });

  return navamsaChart;
}

/**
 * Calculate Nakshatra and Pada for a given longitude
 */
function calculateNakshatra(longitude) {
  const nakIndex = Math.floor(longitude / (360 / 27)); // 27 nakshatras
  const nakshatra = NAKSHATRAS[nakIndex % 27];

  // Each nakshatra is 13°20' (13.333°)
  const nakStart = (nakIndex % 27) * (360 / 27);
  const posInNak = longitude - nakStart;
  const padaIndex = Math.floor(posInNak / (360 / 27 / 4)); // 4 padas per nakshatra

  return {
    name: nakshatra,
    index: nakIndex % 27,
    pada: padaIndex + 1,
    degree: posInNak,
    lord: getNakshatraLord(nakIndex % 27)
  };
}

/**
 * Get Nakshatra Lord
 */
function getNakshatraLord(nakIndex) {
  const lords = [
    "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury",
    "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury",
    "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"
  ];
  return lords[nakIndex % 27];
}

/**
 * Calculate Panchangam (5 elements of time)
 */
function calculatePanchangam(date, latitude, longitude) {
  // Tithi (lunar day) - simplified calculation
  const daysSinceNewMoon = calculateDaysSinceNewMoon(date);
  const tithi = Math.floor((daysSinceNewMoon % 29.53) / 1.185) + 1; // 29.53 days in lunar month

  // Vara (day of week)
  const dayOfWeek = date.getDay();
  const varaNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const vara = varaNames[dayOfWeek];

  // Nakshatra (already calculated)
  const moonLongitude = calculateMoonLongitude(date);
  const nakshatra = calculateNakshatra(moonLongitude);

  // Yoga (27 yogas based on Sun + Moon longitude)
  const sunLongitude = calculateSunLongitude(date);
  const yogaIndex = Math.floor(((sunLongitude + moonLongitude) % 360) / (360 / 27));
  const yogas = [
    "Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda", "Sukarma",
    "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra",
    "Siddhi", "Sadhya", "Shubha", "Shukla", "Brahma", "Indra", "Vaidhriti", "Parigha",
    "Shiva", "Siddha", "Sadharana", "Parivritti"
  ];
  const yoga = yogas[yogaIndex % 27];

  // Karana (half tithi)
  const karana = Math.floor((daysSinceNewMoon % 29.53) / 0.5925) + 1;

  return {
    tithi: tithi,
    tithiName: getTithiName(tithi),
    vara: vara,
    nakshatra: nakshatra.name,
    nakshatraPada: nakshatra.pada,
    yoga: yoga,
    karana: karana,
    date: date.toISOString().split('T')[0],
    time: date.toISOString().split('T')[1]
  };
}

/**
 * Get Tithi Name
 */
function getTithiName(tithi) {
  const tithiNames = [
    "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",
    "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi",
    "Trayodashi", "Chaturdashi", "Purnima", "Pratipada", "Dwitiya", "Tritiya",
    "Chaturthi", "Panchami", "Shashthi", "Saptami", "Ashtami", "Navami",
    "Dashami", "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Amavasya"
  ];
  return tithiNames[(tithi - 1) % 30];
}

/**
 * Calculate Sun Longitude (simplified)
 */
function calculateSunLongitude(date) {
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
  return (dayOfYear * 0.9856) % 360; // Sun moves ~0.9856° per day
}

/**
 * Calculate Moon Longitude (simplified)
 */
function calculateMoonLongitude(date) {
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
  return (dayOfYear * 13.1687) % 360; // Moon moves ~13.1687° per day
}

/**
 * Calculate days since new moon
 */
function calculateDaysSinceNewMoon(date) {
  const knownNewMoon = new Date(2000, 0, 6); // Known new moon date
  const daysSince = (date - knownNewMoon) / (1000 * 60 * 60 * 24);
  return daysSince % 29.53;
}

/**
 * Generate Mock Planetary Positions (for demo)
 */
function generatePlanetaryPositions(date, latitude, longitude) {
  // In production, use Swiss Ephemeris or similar library
  const positions = {
    Sun: (calculateSunLongitude(date) + Math.random() * 5) % 360,
    Moon: (calculateMoonLongitude(date) + Math.random() * 5) % 360,
    Mars: (calculateSunLongitude(date) + 45 + Math.random() * 10) % 360,
    Mercury: (calculateSunLongitude(date) + 90 + Math.random() * 10) % 360,
    Jupiter: (calculateSunLongitude(date) + 135 + Math.random() * 10) % 360,
    Venus: (calculateSunLongitude(date) + 180 + Math.random() * 10) % 360,
    Saturn: (calculateSunLongitude(date) + 225 + Math.random() * 10) % 360,
    Rahu: (calculateSunLongitude(date) + 270 + Math.random() * 10) % 360,
    Ketu: ((calculateSunLongitude(date) + 270 + Math.random() * 10) + 180) % 360
  };

  return positions;
}

/**
 * Calculate Ascendant (Lagna) - simplified
 */
function calculateAscendant(date, latitude, longitude) {
  const hours = date.getHours() + date.getMinutes() / 60;
  const ascendantLongitude = (hours * 15 + longitude) % 360;
  const signIndex = Math.floor(ascendantLongitude / 30);

  return {
    longitude: ascendantLongitude,
    sign: ZODIAC_SIGNS[signIndex % 12],
    signIndex: signIndex % 12,
    degree: ascendantLongitude % 30
  };
}

module.exports = {
  calculateRasiChart,
  calculateNavamsaChart,
  calculateNakshatra,
  calculatePanchangam,
  generatePlanetaryPositions,
  calculateAscendant,
  calculateSunLongitude,
  calculateMoonLongitude,
  ZODIAC_SIGNS,
  NAKSHATRAS,
  PLANETS,
  HOUSES
};
