
const { NAKSHATRAS, ZODIAC_SIGNS } = require('./astroCalculations');

// Gana Table
const GANAS = {
    "Ashwini": "Deva", "Bharani": "Manushya", "Krittika": "Rakshasa",
    "Rohini": "Manushya", "Mrigashira": "Deva", "Ardra": "Manushya",
    "Punarvasu": "Deva", "Pushya": "Deva", "Ashlesha": "Rakshasa",
    "Magha": "Rakshasa", "Purva Phalguni": "Manushya", "Uttara Phalguni": "Manushya",
    "Hasta": "Deva", "Chitra": "Rakshasa", "Swati": "Deva",
    "Vishakha": "Rakshasa", "Anuradha": "Deva", "Jyeshta": "Rakshasa",
    "Mula": "Rakshasa", "Purva Ashadha": "Manushya", "Uttara Ashadha": "Manushya",
    "Shravana": "Deva", "Dhanishta": "Rakshasa", "Shatabhisha": "Rakshasa",
    "Purva Bhadrapada": "Manushya", "Uttara Bhadrapada": "Manushya", "Revati": "Deva"
};

// Yoni Table
const YONIS = {
    "Ashwini": "Horse", "Bharani": "Elephant", "Krittika": "Sheep",
    "Rohini": "Snake", "Mrigashira": "Snake", "Ardra": "Dog",
    "Punarvasu": "Cat", "Pushya": "Goat", "Ashlesha": "Cat",
    "Magha": "Rat", "Purva Phalguni": "Rat", "Uttara Phalguni": "Cow",
    "Hasta": "Buffalo", "Chitra": "Tiger", "Swati": "Buffalo",
    "Vishakha": "Tiger", "Anuradha": "Deer", "Jyeshta": "Deer",
    "Mula": "Dog", "Purva Ashadha": "Monkey", "Uttara Ashadha": "Mongoose",
    "Shravana": "Monkey", "Dhanishta": "Lion", "Shatabhisha": "Horse",
    "Purva Bhadrapada": "Lion", "Uttara Bhadrapada": "Cow", "Revati": "Elephant"
};

const ANIMAL_ENEMIES = {
    "Horse": "Buffalo", "Buffalo": "Horse",
    "Elephant": "Lion", "Lion": "Elephant",
    "Sheep": "Monkey", "Monkey": "Sheep",
    "Snake": "Mongoose", "Mongoose": "Snake",
    "Dog": "Deer", "Deer": "Dog",
    "Cat": "Rat", "Rat": "Cat",
    "Cow": "Tiger", "Tiger": "Cow",
    "Goat": "Monkey", // No direct enemy in some texts, checking compatibility usually
};

// Rasi Lords
const RASI_LORDS = {
    "Aries": "Mars", "Taurus": "Venus", "Gemini": "Mercury", "Cancer": "Moon",
    "Leo": "Sun", "Virgo": "Mercury", "Libra": "Venus", "Scorpio": "Mars",
    "Sagittarius": "Jupiter", "Capricorn": "Saturn", "Aquarius": "Saturn", "Pisces": "Jupiter"
};

const PLANETARY_FRIENDS = {
    "Sun": { friends: ["Moon", "Mars", "Jupiter"], enemies: ["Venus", "Saturn"], neutral: ["Mercury"] },
    "Moon": { friends: ["Sun", "Mercury"], enemies: [], neutral: ["Mars", "Jupiter", "Venus", "Saturn"] }, // Moon has no enemies
    "Mars": { friends: ["Sun", "Moon", "Jupiter"], enemies: ["Mercury"], neutral: ["Venus", "Saturn"] },
    "Mercury": { friends: ["Sun", "Venus"], enemies: ["Moon"], neutral: ["Mars", "Jupiter", "Saturn"] },
    "Jupiter": { friends: ["Sun", "Moon", "Mars"], enemies: ["Mercury", "Venus"], neutral: ["Saturn"] },
    "Venus": { friends: ["Mercury", "Saturn"], enemies: ["Sun", "Moon"], neutral: ["Mars", "Jupiter"] },
    "Saturn": { friends: ["Mercury", "Venus"], enemies: ["Sun", "Moon", "Mars"], neutral: ["Jupiter"] }
};

// Rajju Group
const RAJJU = {
    "Ashwini": "Pada", "Bharani": "Kati", "Krittika": "Nabhi",
    "Rohini": "Kantha", "Mrigashira": "Siro", "Ardra": "Kantha",
    "Punarvasu": "Nabhi", "Pushya": "Kati", "Ashlesha": "Pada",
    "Magha": "Pada", "Purva Phalguni": "Kati", "Uttara Phalguni": "Nabhi",
    "Hasta": "Kantha", "Chitra": "Siro", "Swati": "Kantha",
    "Vishakha": "Nabhi", "Anuradha": "Kati", "Jyeshta": "Pada",
    "Mula": "Pada", "Purva Ashadha": "Kati", "Uttara Ashadha": "Nabhi",
    "Shravana": "Kantha", "Dhanishta": "Siro", "Shatabhisha": "Kantha",
    "Purva Bhadrapada": "Nabhi", "Uttara Bhadrapada": "Kati", "Revati": "Pada"
};

/**
 * Calculate Porutham Match
 * @param {string} boyNakshatra
 * @param {string} girlNakshatra
 * @param {string} boyRasi
 * @param {string} girlRasi
 */
function calculateMatch(boyNakshatra, girlNakshatra, boyRasi, girlRasi) {
    const boyStarIndex = NAKSHATRAS.indexOf(boyNakshatra);
    const girlStarIndex = NAKSHATRAS.indexOf(girlNakshatra);
    const boySignIndex = ZODIAC_SIGNS.indexOf(boyRasi);
    const girlSignIndex = ZODIAC_SIGNS.indexOf(girlRasi);

    if (boyStarIndex === -1 || girlStarIndex === -1 || boySignIndex === -1 || girlSignIndex === -1) {
        throw new Error("Invalid Nakshatra or Rasi");
    }

    const results = {
        dina: calculateDina(boyStarIndex, girlStarIndex),
        gana: calculateGana(boyNakshatra, girlNakshatra),
        mahendra: calculateMahendra(boyStarIndex, girlStarIndex),
        streeDeergha: calculateStreeDeergha(boyStarIndex, girlStarIndex),
        yoni: calculateYoni(boyNakshatra, girlNakshatra),
        rasi: calculateRasiPorutham(boySignIndex, girlSignIndex),
        rasiAdhipati: calculateRasiAdhipati(boyRasi, girlRasi),
        vashya: calculateVashya(boyRasi, girlRasi),
        rajju: calculateRajju(boyNakshatra, girlNakshatra),
        vedha: calculateVedha(boyNakshatra, girlNakshatra)
    };

    // Calculate Total Score
    let score = 0;
    let totalScore = 0;

    if (results.dina.status) { score += 3; } totalScore += 3;
    if (results.gana.status) { score += 4; } totalScore += 4;
    if (results.mahendra.status) { score += 2; } totalScore += 2; // Usually just good/bad, assigning score for api
    if (results.streeDeergha.status) { score += 1; } totalScore += 1;
    if (results.yoni.status) { score += 4; } totalScore += 4;
    if (results.rasi.status) { score += 7; } totalScore += 7;
    if (results.rasiAdhipati.status) { score += 5; } totalScore += 5;
    if (results.vashya.status) { score += 2; } totalScore += 2;
    if (results.rajju.status) { score += 5; } totalScore += 5; // Importance varies, but Rajju mismatch is fatal
    if (results.vedha.status) { score += 2; } totalScore += 2;

    results.totalScore = score;
    results.maxScore = totalScore;
    results.percentage = Math.round((score / totalScore) * 100);

    return results;
}

function calculateDina(boyIndex, girlIndex) {
    // Count from Girl to Boy
    let count = (boyIndex - girlIndex + 27) % 27 + 1;
    const remainder = count % 9;
    // Good: 2, 4, 6, 8, 9 (0)
    // Bad: 1, 3, 5, 7
    const isGood = [2, 4, 6, 8, 0].includes(remainder);
    return { status: isGood, description: isGood ? "Good Compatibility" : "Average/Bad Compatibility" };
}

function calculateGana(boyStar, girlStar) {
    const boyGana = GANAS[boyStar];
    const girlGana = GANAS[girlStar];

    if (boyGana === girlGana) return { status: true, description: "Perfect Match" };
    if (girlGana === "Deva" && boyGana === "Manushya") return { status: true, description: "Good Match" };
    if (girlGana === "Manushya" && boyGana === "Rakshasa") return { status: false, description: "Mismatch" };
    if (girlGana === "Rakshasa" && boyGana === "Manushya") return { status: false, description: "Mismatch" };

    // Simplified rules
    return { status: false, description: "Average/Mismatch" };
}

function calculateMahendra(boyIndex, girlIndex) {
    let count = (boyIndex - girlIndex + 27) % 27 + 1;
    // Good if count is 4, 7, 10, 13, 16, 19, 22, 25
    const goodCounts = [4, 7, 10, 13, 16, 19, 22, 25];
    const isGood = goodCounts.includes(count);
    return { status: isGood, description: isGood ? "Good for progeny" : "Not present" };
}

function calculateStreeDeergha(boyIndex, girlIndex) {
    let count = (boyIndex - girlIndex + 27) % 27 + 1;
    const isGood = count > 13;
    return { status: isGood, description: isGood ? "Good" : "Average" };
}

function calculateYoni(boyStar, girlStar) {
    const boyYoni = YONIS[boyStar];
    const girlYoni = YONIS[girlStar];

    if (boyYoni === girlYoni) return { status: true, description: "Perfect Match" };
    if (ANIMAL_ENEMIES[boyYoni] === girlYoni) return { status: false, description: "Enemies - Mismatch" };

    return { status: true, description: "Neutral/Passable" };
}

function calculateRasiPorutham(boyIndex, girlIndex) {
    let count = (boyIndex - girlIndex + 12) % 12 + 1;

    // 2, 3, 4, 5, 6 - Bad usually? No.
    // Sashtashtaga (6-8) is bad. Dwirdwadasa (2-12) is bad.
    // 7 is good (Sama Saptama).

    if (count === 1) return { status: true, description: "Same Sign - Good" }; // Check for Nakshatra too usually
    if (count === 7) return { status: true, description: "Bhakoot - Good" };
    if (count === 3 || count === 4 || count === 10 || count === 11) return { status: true, description: "Good" };
    if (count === 6 || count === 8) return { status: false, description: "Sashtashtaga - Bad" };
    if (count === 2 || count === 12) return { status: false, description: "Dwirdwadasa - Bad" };

    return { status: true, description: "Average" };
}

function calculateRasiAdhipati(boySign, girlSign) {
    const boyLord = RASI_LORDS[boySign];
    const girlLord = RASI_LORDS[girlSign];

    if (boyLord === girlLord) return { status: true, description: "Same Lord - Good" };

    // Check friendship
    const boyFriends = PLANETARY_FRIENDS[boyLord].friends;
    const girlFriends = PLANETARY_FRIENDS[girlLord].friends;

    if (boyFriends.includes(girlLord) && girlFriends.includes(boyLord)) return { status: true, description: "Friends - Good" };
    if (PLANETARY_FRIENDS[boyLord].enemies.includes(girlLord) || PLANETARY_FRIENDS[girlLord].enemies.includes(boyLord)) return { status: false, description: "Enemies - Bad" };

    return { status: true, description: "Neutral - Average" };
}

function calculateVashya(boySign, girlSign) {
    // Simplified Vashya
    const vashyaPairs = [
        ["Aries", "Leo"], ["Aries", "Scorpio"],
        ["Taurus", "Cancer"], ["Taurus", "Libra"],
        ["Gemini", "Virgo"],
        ["Cancer", "Scorpio"], ["Cancer", "Sagittarius"],
        ["Libra", "Capricorn"],
        ["Pisces", "Capricorn"]
    ];

    const match = vashyaPairs.some(pair =>
        (pair[0] === boySign && pair[1] === girlSign) || (pair[0] === girlSign && pair[1] === boySign)
    );

    if (boySign === girlSign) return { status: true, description: "Same Sign - Good" };

    return { status: match, description: match ? "Compatible" : "Not Compatible" };
}

function calculateRajju(boyStar, girlStar) {
    const boyRajju = RAJJU[boyStar];
    const girlRajju = RAJJU[girlStar];

    // Should NOT be the same
    if (boyRajju !== girlRajju) return { status: true, description: "Good (Different Rajju)" };
    return { status: false, description: `Bad (Same ${boyRajju} Rajju)` };
}

function calculateVedha(boyStar, girlStar) {
    // Simplified list of Vedha pairs (Mutual obstruction)
    const vedhaPairs = [
        ["Ashwini", "Jyeshta"], ["Bharani", "Anuradha"], ["Krittika", "Vishakha"],
        ["Rohini", "Swati"], ["Ardra", "Shravana"], ["Punarvasu", "Uttara Ashadha"],
        ["Pushya", "Purva Ashadha"], ["Ashlesha", "Mula"], ["Magha", "Revati"],
        ["Purva Phalguni", "Uttara Bhadrapada"], ["Uttara Phalguni", "Purva Bhadrapada"],
        ["Hasta", "Shatabhisha"], ["Mrigashira", "Dhanishta"], ["Chitra", "Dhanishta"] // Check Chitra
    ];

    const isVedha = vedhaPairs.some(pair =>
        (pair[0] === boyStar && pair[1] === girlStar) || (pair[0] === girlStar && pair[1] === boyStar)
    );

    if (!isVedha) return { status: true, description: "Good (No Vedha)" };
    return { status: false, description: "Bad (Vedha Present)" };
}

module.exports = {
    calculateMatch,
    GANAS,
    YONIS,
    RASI_LORDS,
    RAJJU
};
