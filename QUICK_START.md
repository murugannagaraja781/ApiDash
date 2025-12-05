# Quick Start Guide - Vedic Astrology API

## Installation & Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Start the server:**
```bash
npm start
```

Server runs on `http://localhost:3000`

## Quick API Examples

### Get Complete Astrology Data
```bash
curl "http://localhost:3000/api/astrology/complete?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5"
```

### Get Only Rasi Chart (D1)
```bash
curl "http://localhost:3000/api/astrology/rasi-chart?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315"
```

### Get Only Navamsa Chart (D9)
```bash
curl "http://localhost:3000/api/astrology/navamsa-chart?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315"
```

### Get Dasha Information
```bash
curl "http://localhost:3000/api/astrology/dasha?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315"
```

### Get Panchangam
```bash
curl "http://localhost:3000/api/astrology/panchangam?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315"
```

### Get Planetary Positions
```bash
curl "http://localhost:3000/api/astrology/planetary-positions?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315"
```

## API Endpoints Summary

| Endpoint | Purpose |
|----------|---------|
| `/api/astrology/complete` | All astrology data (Rasi, Navamsa, Dasha, Panchangam, Planets) |
| `/api/astrology/rasi-chart` | D1 Chart only |
| `/api/astrology/navamsa-chart` | D9 Chart only |
| `/api/astrology/dasha` | Vimshottari Dasha details |
| `/api/astrology/panchangam` | Five elements of time |
| `/api/astrology/planetary-positions` | Detailed planetary positions |

## Required Parameters

All endpoints require:
- `year` - Birth year (e.g., 1993)
- `month` - Birth month 1-12 (e.g., 10)
- `day` - Birth day 1-31 (e.g., 29)
- `hour` - Birth hour 0-23 (e.g., 6)
- `minute` - Birth minute 0-59 (e.g., 45)
- `lat` - Latitude (e.g., 8.964)
- `lon` - Longitude (e.g., 77.315)
- `tz` - Timezone offset (optional, default 5.5)

## Response Structure

### Complete Response Includes:
1. **Birth Details** - Date, time, location
2. **Planetary Positions** - Raw and detailed positions
3. **Ascendant** - Lagna information
4. **Rasi Chart (D1)** - Main birth chart
5. **Navamsa Chart (D9)** - Marriage/relationship chart
6. **Panchangam** - Tithi, Vara, Nakshatra, Yoga, Karana
7. **Dasha System** - Current and future Mahadashas, Bhuktis, Pratyantars
8. **Nakshatra Details** - For each planet

## Example Response (Partial)

```json
{
  "birthDetails": {
    "date": "1993-10-29",
    "time": "06:45",
    "latitude": 8.964,
    "longitude": 77.315,
    "timezone": 5.5
  },
  "rasiChart": {
    "Sun": {
      "sign": "Libra",
      "degree": 5.45,
      "nakshatra": "Chitra"
    }
  },
  "navamsaChart": {
    "Sun": {
      "sign": "Capricorn",
      "degree": 24.05,
      "navamsaNumber": 8
    }
  },
  "dashaSystem": {
    "current": {
      "mahadasha": {
        "lord": "Venus",
        "start": "1990-01-15",
        "end": "2010-01-15",
        "years": "20.00"
      }
    }
  }
}
```

## Key Concepts

### Rasi Chart (D1)
- Main birth chart
- Shows planetary positions in zodiac signs
- 12 signs, 9 planets

### Navamsa Chart (D9)
- Divisional chart for marriage and relationships
- Each sign divided into 9 parts
- Important for marriage predictions

### Dasha System (Vimshottari)
- 120-year cycle
- 9 planetary lords
- Mahadasha (main period) → Bhukti (sub-period) → Pratyantar (sub-sub-period)

### Panchangam
- **Tithi**: Lunar day (1-30)
- **Vara**: Day of week
- **Nakshatra**: Lunar mansion (27 total)
- **Yoga**: Auspicious indicator (27 total)
- **Karana**: Half tithi

### Planetary Positions
- 9 planets: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu
- Expressed in degrees (0-360°)
- Associated with zodiac signs and nakshatras

## Testing

Use any of these tools to test the API:
- **cURL** (command line)
- **Postman** (GUI)
- **Insomnia** (GUI)
- **Browser** (for GET requests)
- **JavaScript fetch()** or **axios**
- **Python requests**

## File Structure

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
├── ASTROLOGY_API_DOCS.md       # Full documentation
└── QUICK_START.md              # This file
```

## Troubleshooting

**Port already in use:**
```bash
# Change port in server.js or use:
PORT=3001 npm start
```

**Missing parameters error:**
- Ensure all required parameters are provided
- Check parameter format (year as 4-digit number, etc.)

**Invalid coordinates:**
- Use decimal format for latitude/longitude
- Latitude: -90 to 90
- Longitude: -180 to 180

## Next Steps

1. Read `ASTROLOGY_API_DOCS.md` for detailed documentation
2. Test endpoints with sample data
3. Integrate with your frontend application
4. Consider adding Swiss Ephemeris for production accuracy

## Support

For issues or questions, refer to:
- `ASTROLOGY_API_DOCS.md` - Complete API documentation
- `COMPLETE_MERN_SETUP.md` - MERN setup guide
- `MERN_INTEGRATION_GUIDE.md` - Integration guide
