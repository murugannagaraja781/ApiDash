# Vedic Astrology API - Complete Implementation

A comprehensive Node.js/Express API that provides full Vedic astrology calculations including Rasi Chart (D1), Navamsa Chart (D9), Dasha system, Panchangam, and Planetary Positions in JSON format.

## 🌟 Features

- **Rasi Chart (D1)** - Main birth chart with all 9 planets in zodiac signs
- **Navamsa Chart (D9)** - Divisional chart for marriage and relationships
- **Vimshottari Dasha System** - Complete 120-year cycle with Mahadasha, Bhukti, and Pratyantar
- **Panchangam** - Five elements of time (Tithi, Vara, Nakshatra, Yoga, Karana)
- **Planetary Positions** - Detailed positions with signs, degrees, nakshatras, and lords
- **Ascendant Calculation** - Birth chart ascendant (Lagna)
- **Nakshatra Details** - Nakshatra and Pada for each planet

## 📋 API Endpoints

### Complete Data
```
GET /api/astrology/complete
```
Returns all astrology data in one comprehensive response.

### Individual Endpoints
```
GET /api/astrology/rasi-chart          # D1 Chart only
GET /api/astrology/navamsa-chart       # D9 Chart only
GET /api/astrology/dasha               # Dasha information
GET /api/astrology/panchangam          # Panchangam data
GET /api/astrology/planetary-positions # Planetary positions
```

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start server
npm start
```

Server runs on `http://localhost:3000`

### Test API

```bash
# Get complete astrology data
curl "http://localhost:3000/api/astrology/complete?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5"
```

## 📝 Required Parameters

All endpoints require these query parameters:

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `year` | Integer | Birth year | 1993 |
| `month` | Integer | Birth month (1-12) | 10 |
| `day` | Integer | Birth day (1-31) | 29 |
| `hour` | Integer | Birth hour (0-23) | 6 |
| `minute` | Integer | Birth minute (0-59) | 45 |
| `lat` | Float | Latitude | 8.964 |
| `lon` | Float | Longitude | 77.315 |
| `tz` | Float | Timezone (optional) | 5.5 |

## 📊 Response Structure

### Complete Response Includes:

```json
{
  "birthDetails": { /* Date, time, location */ },
  "planetaryPositions": { /* Raw and detailed positions */ },
  "ascendant": { /* Lagna information */ },
  "rasiChart": { /* D1 Chart */ },
  "navamsaChart": { /* D9 Chart */ },
  "panchangam": { /* Tithi, Vara, Nakshatra, Yoga, Karana */ },
  "dashaSystem": { /* Current and future Dasha periods */ },
  "nakshatraDetails": { /* Nakshatra info for each planet */ }
}
```

## 🔍 Data Included

### Planetary Positions
- **9 Planets**: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu
- **Longitude**: 0-360°
- **Zodiac Sign**: Aries to Pisces
- **Degree, Minute, Second**: Precise position
- **Nakshatra**: Lunar mansion (27 total)
- **Pada**: Quarter of nakshatra (1-4)
- **Nakshatra Lord**: Ruling planet

### Dasha Information
- **Current Mahadasha**: Main period (6-20 years)
- **Current Bhukti**: Sub-period (months to years)
- **Current Pratyantar**: Sub-sub-period (days to months)
- **Full Sequence**: 120-year Vimshottari cycle
- **All Bhuktis**: For current Mahadasha

### Panchangam Elements
- **Tithi**: Lunar day (1-30)
- **Vara**: Day of week
- **Nakshatra**: Lunar mansion (27 total)
- **Yoga**: Auspicious indicator (27 total)
- **Karana**: Half tithi

### Charts
- **Rasi (D1)**: 12 zodiac signs, 9 planets
- **Navamsa (D9)**: Each sign divided into 9 parts (3°20' each)

## 💻 Usage Examples

### JavaScript/Fetch
```javascript
const response = await fetch(
  'http://localhost:3000/api/astrology/complete?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5'
);
const data = await response.json();
console.log(data);
```

### Python
```python
import requests

url = "http://localhost:3000/api/astrology/complete"
params = {
    "year": 1993, "month": 10, "day": 29,
    "hour": 6, "minute": 45,
    "lat": 8.964, "lon": 77.315, "tz": 5.5
}
response = requests.get(url, params=params)
data = response.json()
print(data)
```

### cURL
```bash
curl "http://localhost:3000/api/astrology/complete?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5"
```

## 📚 Documentation Files

- **ASTROLOGY_API_DOCS.md** - Complete API documentation with all endpoints
- **QUICK_START.md** - Quick start guide
- **EXAMPLE_RESPONSES.md** - Full example JSON responses
- **TEST_API.md** - Testing guide with examples
- **API_SUMMARY.md** - Summary of features
- **VEDIC_ASTROLOGY_API_README.md** - This file

## 🏗️ Project Structure

```
.
├── server.js                    # Main server file
├── package.json                 # Dependencies
├── utils/
│   ├── astroCalculations.js    # Astrology calculations
│   └── vimshottari.js          # Dasha calculations
├── routes/
│   ├── astrology.js            # Astrology endpoints
│   └── vimshottari.js          # Dasha endpoints
├── public/
│   └── index.html              # Frontend (optional)
└── Documentation/
    ├── ASTROLOGY_API_DOCS.md
    ├── QUICK_START.md
    ├── EXAMPLE_RESPONSES.md
    ├── TEST_API.md
    ├── API_SUMMARY.md
    └── VEDIC_ASTROLOGY_API_README.md
```

## 🔑 Key Concepts

### Rasi Chart (D1)
- Main birth chart
- Shows planetary positions in 12 zodiac signs
- Foundation for all astrological analysis
- Each sign = 30°

### Navamsa Chart (D9)
- Divisional chart for marriage and relationships
- Each zodiac sign divided into 9 parts
- Each part = 3°20' (3.333°)
- Important for marriage predictions and compatibility

### Vimshottari Dasha
- 120-year cycle
- 9 planetary lords with specific year durations
- Hierarchy: Mahadasha → Bhukti → Pratyantar
- Used for timing events and predictions

| Lord | Years |
|------|-------|
| Ketu | 7 |
| Venus | 20 |
| Sun | 6 |
| Moon | 10 |
| Mars | 7 |
| Rahu | 18 |
| Jupiter | 16 |
| Saturn | 19 |
| Mercury | 17 |

### Panchangam
- Five elements of time in Hindu calendar
- Used for auspicious timing
- Combines lunar and solar information
- Essential for ritual timing

### Nakshatras (27 Lunar Mansions)
- Each 13°20' (360° ÷ 27)
- Each has 4 Padas (quarters)
- Each has a ruling planet (lord)
- Used for personality analysis and timing

## 🌍 Zodiac Signs

```
0-30°    : Aries       (♈)
30-60°   : Taurus      (♉)
60-90°   : Gemini      (♊)
90-120°  : Cancer      (♋)
120-150° : Leo         (♌)
150-180° : Virgo       (♍)
180-210° : Libra       (♎)
210-240° : Scorpio     (♏)
240-270° : Sagittarius (♐)
270-300° : Capricorn   (♑)
300-330° : Aquarius    (♒)
330-360° : Pisces      (♓)
```

## ⚙️ Technical Details

- **Framework**: Express.js
- **Language**: JavaScript (Node.js)
- **Format**: JSON
- **Calculations**: Simplified astronomical formulas
- **Accuracy**: Demo/educational level
- **CORS**: Enabled for all origins
- **Port**: 3000 (configurable)

## 🔧 Configuration

### Change Port
```bash
PORT=3001 npm start
```

### Environment Variables
```bash
PORT=3000          # Server port
NODE_ENV=production # Environment
```

## 📈 Production Considerations

For production use, consider:

1. **Accuracy**: Integrate Swiss Ephemeris for precise calculations
2. **Additional Charts**: Add D2, D3, D4, D7, D10, D12, D20, D24, D27, D30, D40, D45, D60
3. **Analysis**: Implement Yogas, Doshas, and other astrological concepts
4. **Compatibility**: Add Synastry (chart comparison)
5. **Performance**: Implement caching and database
6. **Security**: Add authentication and rate limiting
7. **Validation**: Enhanced input validation
8. **Error Handling**: Comprehensive error handling
9. **Logging**: Request/response logging
10. **Testing**: Unit and integration tests

## 🧪 Testing

### Quick Test
```bash
npm start
# In another terminal:
curl "http://localhost:3000/api/astrology/complete?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5"
```

### Comprehensive Testing
See `TEST_API.md` for:
- cURL examples
- JavaScript testing
- Python testing
- Postman testing
- Error handling tests

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Use different port
PORT=3001 npm start
```

### Missing Parameters Error
- Ensure all required parameters are provided
- Check parameter format (year as 4-digit number)
- Verify coordinates are in decimal format

### Invalid Coordinates
- Latitude: -90 to 90
- Longitude: -180 to 180
- Use decimal format (e.g., 8.964, not 8°57'50")

### CORS Issues
- API has CORS enabled for all origins
- Should work from any frontend
- Check browser console for specific errors

## 📞 Support

For issues or questions:
1. Check documentation files
2. Review example responses
3. Test with provided examples
4. Check server logs for errors

## 📄 License

This project is provided as-is for educational and development purposes.

## 🙏 Acknowledgments

- Based on Vedic astrology principles
- Vimshottari Dasha system calculations
- Panchangam calculations
- Nakshatra and zodiac systems

## 🔗 Related Files

- `ASTROLOGY_API_DOCS.md` - Full API documentation
- `QUICK_START.md` - Quick start guide
- `EXAMPLE_RESPONSES.md` - Example responses
- `TEST_API.md` - Testing guide
- `API_SUMMARY.md` - Feature summary

## 📊 Example Request

```bash
curl -X GET "http://localhost:3000/api/astrology/complete" \
  -G \
  -d "year=1993" \
  -d "month=10" \
  -d "day=29" \
  -d "hour=6" \
  -d "minute=45" \
  -d "lat=8.964" \
  -d "lon=77.315" \
  -d "tz=5.5"
```

## 🎯 Next Steps

1. **Install & Run**: `npm install && npm start`
2. **Test Endpoints**: Use provided examples
3. **Integrate**: Connect with your frontend
4. **Enhance**: Add Swiss Ephemeris for accuracy
5. **Deploy**: Deploy to production environment

---

**Status**: ✅ Complete and Ready to Use
**Version**: 1.0.0
**Last Updated**: December 5, 2025

For detailed information, refer to the documentation files included in the project.
