
const {
    generatePlanetaryPositions,
    ZODIAC_SIGNS
} = require('./astroCalculations');

// Tamil Predictions for Transit Planets (Gochar)
// Key: Planet, Value: Array of 12 strings (for 1st to 12th house from Moon)
const TRANSIT_PREDICTIONS = {
    "Sun": [
        "உடல் நலம் பாதிப்பு (Health issues)", // 1
        "பண வரவு தாமதம் (Financial delay)", // 2
        "வெற்றி மற்றும் மகிழ்ச்சி (Success and happiness)", // 3 (Good)
        "மன உளைச்சல் (Mental stress)", // 4
        "குழந்தைகளால் கவலை (Worry from children)", // 5
        "எதிரிகள் ஒழிவர் (Victory over enemies)", // 6 (Good)
        "பயணத்தில் கவனம் தேவை (Care in travel)", // 7
        "உடல் உபாதை (Health troubles)", // 8
        "தந்தைக்கு நன்மை (Good for father)", // 9
        "தொழில் முன்னேற்றம் (Career growth)", // 10 (Good)
        "லாபம் மற்றும் வெற்றி (Gain and success)", // 11 (Good)
        "வீண் செலவுகள் (Unnecessary expenses)" // 12
    ],
    "Moon": [
        "நல்ல உணவு மற்றும் மகிழ்ச்சி (Good food and happiness)", // 1 (Good)
        "அலைச்சல் மற்றும் செலவு (Stress and expense)", // 2
        "வெற்றி மற்றும் லாபம் (Success and gains)", // 3 (Good)
        "பயம் மற்றும் சந்தேகம் (Fear and doubt)", // 4
        "இளையவர் மூலம் கவலை (Worry from younger)", // 5
        "வெற்றி மற்றும் ஆரோக்கியம் (Success and health)", // 6 (Good)
        "பெண்கள் மூலம் மகிழ்ச்சி (Happiness from women)", // 7 (Good)
        "சந்திராஷ்டமம் - கவனம் தேவை (Chandrashtama - Be careful)", // 8 (Bad)
        "உடல் சோர்வு (Body pain)", // 9
        "தொழில் வெற்றி (Career success)", // 10 (Good)
        "லாபம் (Profit)", // 11 (Good)
        "செலவுகள் (Expenses)" // 12
    ],
    "Mars": [
        "கோபம் மற்றும் வேதனை (Anger and pain)", // 1
        "பண இழப்பு (Money loss)", // 2
        "வெற்றி மற்றும் லாபம் (Success)", // 3 (Good)
        "வயிற்று வலி (Stomach pain)", // 4
        "பகைவர் தொல்லை (Trouble from enemies)", // 5
        "எதிரிகள் தோல்வி (Victory)", // 6 (Good)
        "மனைவி/கணவருடன் சண்டை (Quarrel with spouse)", // 7
        "ரத்த காயம் சாத்தியம் (Injury possible)", // 8
        "தடை மற்றும் தாமதம் (Obstacles)", // 9
        "தொழில் தடை (Career obstacles)", // 10
        "லாபம் மற்றும் மகிழ்ச்சி (Gain and happiness)", // 11 (Good)
        "வீண் விரையம் (Waste of money)" // 12
    ],
    "Jupiter": [
        "இட மாற்றம் (Change of place)", // 1
        "செல்வம் சேரும் (Wealth accumulation)", // 2 (Good)
        "வேலை மாற்றம் (Job change)", // 3
        "உறவினர் பகை (Enmity with relatives)", // 4
        "குழந்தை பாக்கியம் / நன்மை (Child birth / good)", // 5 (Good)
        "எதிரிகள் தொல்லை (Trouble from enemies)", // 6
        "மகிழ்ச்சியான பயணம் (Happy travel)", // 7 (Good)
        "கடுமையான உழைப்பு (Hard work)", // 8
        "அதிர்ஷ்டம் மற்றும் ஆன்மீகம் (Luck and spiritual)", // 9 (Good)
        "வேலை பளு (Work pressure)", // 10
        "எல்லா வகையிலும் லாபம் (All round success)", // 11 (Good)
        "சுப விரையம் (Auspecious expenses)" // 12
    ],
    "Saturn": [
        "மன உளைச்சல் (Mental stress)", // 1 (Janma Sani)
        "குடும்பத்தில் குழப்பம் (Family confusion)", // 2 (Ezharai Sani)
        "வெற்றி மற்றும் லாபம் (Success and gain)", // 3 (Good)
        "தாயார் நலம் பாதிப்பு (Mother's health issues)", // 4 (Ardhastama Sani)
        "பிள்ளைகளால் கவலை (Worry from kids)", // 5
        "எதிரிகள் வெற்றி (Victory over enemies)", // 6 (Good)
        "கூட்டாளிகளுடன் பகை (Enmity with partners)", // 7 (Kanda Sani)
        "ஆயுள் பயம் / தடைகள் (Fear / Obstacles)", // 8 (Ashtama Sani)
        "தகப்பனார் நலம் பாதிப்பு (Father's health issues)", // 9
        "தொழில் முடக்கம் (Career setback)", // 10
        "லாபம் மற்றும் மேன்மை (Gain and status)", // 11 (Good)
        "விரையம் மற்றும் அலைச்சல் (Expense and wandering)" // 12 (Ezharai Sani)
    ]
};

// General Daily Prediction based on Moon's position (Tarabalam logic usually, but simplified to Moon Sign transit)
// In real astrology, we use Nakshatra Tarabalam (Janma, Sampat, Vipat etc).
// For now, we will use the transit results of Moon + Sun + Jupiter as the "Daily Horoscope".

/**
 * Calculate Daily Horoscope
 * @param {string} userRasi - User's Moon Sign (e.g., "Aries")
 * @param {Date} date - Target date for prediction
 * @param {number} lat
 * @param {number} lon
 */
function calculateDailyHoroscope(userRasi, date, lat, lon) {
    // 1. Get Planet Positions for the Target Date
    const planetaryPositions = generatePlanetaryPositions(date, lat, lon);

    // 2. Determine index of User's Rasi (0=Aries, 1=Taurus...)
    const userRasiIndex = ZODIAC_SIGNS.indexOf(userRasi);

    if (userRasiIndex === -1) {
        throw new Error("Invalid Rasi provided");
    }

    const predictions = [];

    // 3. Calculate Transits (Gochar)
    // For each planet, find which sign it is in, calculate offset from User Rasi

    const planetsToCheck = ["Sun", "Moon", "Mars", "Jupiter", "Saturn"];

    planetsToCheck.forEach(planet => {
        const longitude = planetaryPositions[planet];
        const signIndex = Math.floor(longitude / 30) % 12;

        // Calculate House position from Rasi (1 to 12)
        // Formula: (PlanetSign - UserSign + 12) % 12 + 1
        let houseFromMoon = (signIndex - userRasiIndex + 12) % 12 + 1;

        const predictionText = TRANSIT_PREDICTIONS[planet][houseFromMoon - 1];

        predictions.push({
            planet: planet,
            house: houseFromMoon,
            currentSign: ZODIAC_SIGNS[signIndex],
            effect: predictionText
        });
    });

    // 4. Generate Overall Summary (Tamil)
    let overallScore = 0;
    predictions.forEach(p => {
        // Simple heuristic: Good houses typically give +10, Bad -5, Neutral 0
        // Sun Good: 3, 6, 10, 11
        // Moon Good: 1, 3, 6, 7, 10, 11 (Avoid 8)
        // Mars Good: 3, 6, 11
        // Jupiter Good: 2, 5, 7, 9, 11
        // Saturn Good: 3, 6, 11

        // Just simple scoring for demo
        if (p.planet === "Moon" && p.house === 8) overallScore -= 20; // Chandrashtama
        if (["3", "6", "11"].includes(String(p.house))) overallScore += 10;
        if (["8", "12"].includes(String(p.house))) overallScore -= 5;
    });

    let summary = "";
    if (overallScore > 15) summary = "இன்று உங்களுக்கு மிகச் சிறந்த நாள்! (Excellent Day)";
    else if (overallScore > 0) summary = "இன்று உங்களுக்கு நல்ல நாள். (Good Day)";
    else if (overallScore > -10) summary = "சராசரியான பலன்கள் நடக்கும். (Average Day)";
    else summary = "கவனம் தேவை. இறை வழிபாடு செய்யவும். (Be Careful - Pray)";

    // Check Chandrashtama specifically
    const chandrashtama = predictions.find(p => p.planet === "Moon" && p.house === 8);
    if (chandrashtama) {
        summary = "⚠️ இன்று சந்திராஷ்டமம். மௌனம் காக்கவும். புதிய முயற்சிகள் தவிர்க்கவும். (Chandrashtama - Keep silent, avoid new ventures)";
    }

    return {
        date: date.toISOString().split('T')[0],
        userRasi: userRasi,
        summary: summary,
        transits: predictions
    };
}

module.exports = {
    calculateDailyHoroscope
};
