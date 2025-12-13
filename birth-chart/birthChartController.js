const {
    calculateRasiChart,
    calculateNavamsaChart,
    calculatePanchangam,
    generatePlanetaryPositions,
    calculateAscendant,
    calculateNakshatra
} = require('../utils/astroCalculations');

/**
 * Generate Birth Chart Data
 * POST /api/charts/birth-chart
 * Returns: Rasi Chart, Navamsa Chart, Planetary Positions, Panchangam
 */
exports.generateBirthChart = async (req, res) => {
    try {
        const { year, month, day, hour, minute, lat, lon, latitude, longitude, tz } = req.body;

        const targetLat = lat || latitude;
        const targetLon = lon || longitude;

        // Validate input
        if (!year || !month || !day || !targetLat || !targetLon) {
            return res.status(400).json({
                error: 'Missing required parameters: year, month, day, lat/latitude, lon/longitude'
            });
        }

        const finalLatitude = parseFloat(targetLat);
        const finalLongitude = parseFloat(targetLon);
        // Default timezone to 5.5 (India) if not provided, or parse provided
        const userTz = tz ? parseFloat(tz) : 5.5;

        // Create birth date object
        // Note: Month is 0-indexed in JS Date
        const birthDate = new Date(
            parseInt(year),
            parseInt(month) - 1,
            parseInt(day),
            parseInt(hour) || 0,
            parseInt(minute) || 0
        );

        // 1. Calculate Planetary Positions
        const planetaryPositions = generatePlanetaryPositions(birthDate, finalLatitude, finalLongitude);

        // 2. Calculate Ascendant (Lagna)
        const ascendant = calculateAscendant(birthDate, finalLatitude, finalLongitude);

        // Add Ascendant to positions for chart calculations if needed, or handle separately
        // usually Rasi chart function expects planets, we can add Lagna to it or the frontend handles it.
        // Let's add Lagna to the mapped positions for the response.

        // 3. Calculate Rasi Chart (D1)
        const rasiChartData = calculateRasiChart(planetaryPositions);
        // Add Lagna to Rasi Data manually if not in planets
        rasiChartData['Lagna'] = {
            sign: ascendant.sign,
            signIndex: ascendant.signIndex,
            longitude: ascendant.longitude,
            degree: ascendant.degree,
            // approximations for minute/second if not strictly calc'd in ascendand function
            minute: Math.floor((ascendant.degree % 1) * 60),
            second: 0
        };

        // 4. Calculate Navamsa Chart (D9)
        const navamsaChartData = calculateNavamsaChart(planetaryPositions);
        // Calculate Navamsa for Lagna too
        const lagnaNavamsaLongitude = (ascendant.longitude * 9) % 360;
        const lagnaNavamsaSignIndex = Math.floor(lagnaNavamsaLongitude / 30);
        navamsaChartData['Lagna'] = {
            sign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'][lagnaNavamsaSignIndex % 12],
            signIndex: lagnaNavamsaSignIndex % 12,
            navamsaLongitude: lagnaNavamsaLongitude
        };

        // 5. Calculate Panchangam
        const panchangam = calculatePanchangam(birthDate, latitude, longitude);

        // 6. Detailed Planetary Positions (Graha Nilaikal) with Nakshatra
        const detailedPlanets = {};
        Object.keys(planetaryPositions).forEach(planet => {
            const nakshatra = calculateNakshatra(planetaryPositions[planet]);
            const longitude = planetaryPositions[planet];
            const signIndex = Math.floor(longitude / 30);
            const degree = longitude % 30;

            detailedPlanets[planet] = {
                longitude: longitude.toFixed(2),
                sign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'][signIndex % 12],
                degree: degree.toFixed(2),
                nakshatra: nakshatra.name,
                nakshatraPada: nakshatra.pada,
                nakshatraLord: nakshatra.lord
            };
        });

        // Construct Response
        const response = {
            success: true,
            birthDetails: {
                date: `${year}-${month}-${day}`,
                time: `${hour}:${minute}`,
                latitude: finalLatitude,
                longitude: finalLongitude,
                timezone: userTz
            },
            rasi_chart: rasiChartData,
            navamsa_chart: navamsaChartData,
            planetary_positions: detailedPlanets,
            panchangam: panchangam
        };

        res.json(response);

    } catch (error) {
        console.error('Error generating birth chart:', error);
        res.status(500).json({
            error: 'Failed to generate birth chart',
            message: error.message
        });
    }
};
