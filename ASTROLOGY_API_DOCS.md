# Vedic Astrology API - Complete Documentation

## Overview
This API provides comprehensive Vedic astrology calculations including Rasi Chart (D1), Navamsa Chart (D9), Dasha system, Panchangam, and Planetary Positions.

## Base URL
```
http://localhost:3000/api/astrology
```

## Required Parameters
All endpoints require the following query parameters:

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `year` | Integer | Birth year | 1993 |
| `month` | Integer | Birth month (1-12) | 10 |
| `day` | Integer | Birth day (1-31) | 29 |
| `hour` | Integer | Birth hour (0-23) | 6 |
| `minute` | Integer | Birth minute (0-59) | 45 |
| `lat` | Float | Latitude of birth place | 8.964 |
| `lon` | Float | Longitude of birth place | 77.315 |
| `tz` | Float | Timezone offset (optional) | 5.5 |

## API Endpoints

### 1. Complete Astrology Data
**GET** `/complete`

Returns all astrology data in one comprehensive response.

**Query Parameters:**
```
?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5
```

**Response Structure:**
```json
{
  "birthDetails": {
    "date": "1993-10-29",
    "time": "06:45",
    "latitude": 8.964,
    "longitude": 77.315,
    "timezone": 5.5
  },
  "planetaryPositions": {
    "raw": {
      "Sun": 215.45,
      "Moon": 125.67,
      "Mars": 260.89,
      "Mercury": 305.12,
      "Jupiter": 350.34,
      "Venus": 35.56,
      "Saturn": 80.78,
      "Rahu": 125.90,
      "Ketu": 305.90
    },
    "detailed": {
      "Sun": {
        "longitude": 215.45,
        "sign": "Libra",
        "degree": 5.45,
        "minute": 27,
        "nakshatra": "Chitra",
        "nakshatraPada": 2
      }
    }
  },
  "ascendant": {
    "longitude": 45.67,
    "sign": "Taurus",
    "degree": 15.67,
    "minute": 40
  },
  "rasiChart": {
    "description": "D1 Chart - Main Birth Chart",
    "planets": {
      "Sun": {
        "sign": "Libra",
        "signIndex": 6,
        "longitude": 215.45,
        "degree": 5.45,
        "minute": 27,
        "second": 0
      }
    }
  },
  "navamsaChart": {
    "description": "D9 Chart - Divisional Chart for Marriage & Relationships",
    "planets": {
      "Sun": {
        "sign": "Capricorn",
        "signIndex": 9,
        "navamsaLongitude": 234.05,
        "degree": 24.05,
        "minute": 3,
        "second": 0,
        "navamsaNumber": 8
      }
    }
  },
  "panchangam": {
    "description": "Five Elements of Time",
    "data": {
      "tithi": 8,
      "tithiName": "Ashtami",
      "vara": "Friday",
      "nakshatra": "Chitra",
      "nakshatraPada": 2,
      "yoga": "Harshana",
      "karana": 16,
      "date": "1993-10-29",
      "time": "06:45:00.000Z"
    }
  },
  "dashaSystem": {
    "description": "Vimshottari Dasha System",
    "current": {
      "mahadasha": {
        "lord": "Venus",
        "start": "1990-01-15",
        "end": "2010-01-15",
        "years": "20.00"
      },
      "bhukti": {
        "lord": "Mercury",
        "start": "2005-06-20",
        "end": "2007-12-20",
        "years": "2.50"
      },
      "pratyantar": {
        "lord": "Sun",
        "start": "2006-03-15",
        "end": "2006-09-15",
        "years": "0.50"
      }
    },
    "sequence": [
      {
        "lord": "Venus",
        "start": "1990-01-15",
        "end": "2010-01-15",
        "years": "20.00"
      }
    ]
  },
  "nakshatraDetails": {
    "Sun": {
      "name": "Chitra",
      "index": 14,
      "pada": 2,
      "degree": 5.45,
      "lord": "Mars"
    }
  }
}
```

---

### 2. Rasi Chart (D1)
**GET** `/rasi-chart`

Returns only the Rasi Chart (D1) - the main birth chart.

**Query Parameters:**
```
?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315
```

**Response:**
```json
{
  "description": "Rasi Chart (D1) - Main Birth Chart",
  "birthDate": "1993-10-29",
  "rasiChart": {
    "Sun": {
      "sign": "Libra",
      "signIndex": 6,
      "longitude": 215.45,
      "degree": 5.45,
      "minute": 27,
      "second": 0
    },
    "Moon": {
      "sign": "Leo",
      "signIndex": 4,
      "longitude": 125.67,
      "degree": 5.67,
      "minute": 40,
      "second": 0
    }
  }
}
```

---

### 3. Navamsa Chart (D9)
**GET** `/navamsa-chart`

Returns the Navamsa Chart (D9) - divisional chart for marriage and relationships.

**Query Parameters:**
```
?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315
```

**Response:**
```json
{
  "description": "Navamsa Chart (D9) - Divisional Chart for Marriage & Relationships",
  "birthDate": "1993-10-29",
  "navamsaChart": {
    "Sun": {
      "sign": "Capricorn",
      "signIndex": 9,
      "navamsaLongitude": 234.05,
      "degree": 24.05,
      "minute": 3,
      "second": 0,
      "navamsaNumber": 8
    },
    "Moon": {
      "sign": "Scorpio",
      "signIndex": 7,
      "navamsaLongitude": 113.03,
      "degree": 23.03,
      "minute": 1,
      "second": 0,
      "navamsaNumber": 8
    }
  }
}
```

---

### 4. Dasha System
**GET** `/dasha`

Returns detailed Vimshottari Dasha information including current Mahadasha, Bhukti, and Pratyantar.

**Query Parameters:**
```
?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315
```

**Response:**
```json
{
  "birthDate": "1993-10-29",
  "current": {
    "mahadasha": {
      "lord": "Venus",
      "start": "1990-01-15",
      "end": "2010-01-15",
      "years": "20.00"
    },
    "bhukti": {
      "lord": "Mercury",
      "start": "2005-06-20",
      "end": "2007-12-20",
      "years": "2.50"
    },
    "pratyantar": {
      "lord": "Sun",
      "start": "2006-03-15",
      "end": "2006-09-15",
      "years": "0.50"
    }
  },
  "mahadashaSequence": [
    {
      "lord": "Venus",
      "start": "1990-01-15",
      "end": "2010-01-15",
      "years": "20.00"
    },
    {
      "lord": "Sun",
      "start": "2010-01-15",
      "end": "2016-01-15",
      "years": "6.00"
    }
  ],
  "currentMahadashaBhuktis": [
    {
      "lord": "Venus",
      "start": "1990-01-15",
      "end": "1993-06-15",
      "years": "3.42"
    },
    {
      "lord": "Sun",
      "start": "1993-06-15",
      "end": "1996-01-15",
      "years": "2.58"
    }
  ]
}
```

---

### 5. Panchangam
**GET** `/panchangam`

Returns Panchangam data - the five elements of time (Tithi, Vara, Nakshatra, Yoga, Karana).

**Query Parameters:**
```
?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315
```

**Response:**
```json
{
  "description": "Panchangam - Five Elements of Time",
  "birthDate": "1993-10-29",
  "panchangam": {
    "tithi": 8,
    "tithiName": "Ashtami",
    "vara": "Friday",
    "nakshatra": "Chitra",
    "nakshatraPada": 2,
    "yoga": "Harshana",
    "karana": 16,
    "date": "1993-10-29",
    "time": "06:45:00.000Z"
  }
}
```

**Panchangam Elements:**
- **Tithi**: Lunar day (1-30)
- **Vara**: Day of week
- **Nakshatra**: Lunar mansion (27 nakshatras)
- **Yoga**: Auspicious time indicator (27 yogas)
- **Karana**: Half tithi (2 per tithi)

---

### 6. Planetary Positions
**GET** `/planetary-positions`

Returns detailed planetary positions with signs, degrees, nakshatras, and lords.

**Query Parameters:**
```
?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315
```

**Response:**
```json
{
  "birthDate": "1993-10-29",
  "latitude": 8.964,
  "longitude": 77.315,
  "planetaryPositions": {
    "Sun": {
      "longitude": "215.45",
      "sign": "Libra",
      "degree": "5.45",
      "minute": 27,
      "nakshatra": "Chitra",
      "nakshatraPada": 2,
      "nakshatraLord": "Mars"
    },
    "Moon": {
      "longitude": "125.67",
      "sign": "Leo",
      "degree": "5.67",
      "minute": 40,
      "nakshatra": "Magha",
      "nakshatraPada": 1,
      "nakshatraLord": "Ketu"
    },
    "Mars": {
      "longitude": "260.89",
      "sign": "Sagittarius",
      "degree": "20.89",
      "minute": 53,
      "nakshatra": "Purva Ashadha",
      "nakshatraPada": 3,
      "nakshatraLord": "Venus"
    },
    "Mercury": {
      "longitude": "305.12",
      "sign": "Aquarius",
      "degree": "5.12",
      "minute": 7,
      "nakshatra": "Dhanishta",
      "nakshatraPada": 1,
      "nakshatraLord": "Mars"
    },
    "Jupiter": {
      "longitude": "350.34",
      "sign": "Pisces",
      "degree": "20.34",
      "minute": 20,
      "nakshatra": "Revati",
      "nakshatraPada": 4,
      "nakshatraLord": "Mercury"
    },
    "Venus": {
      "longitude": "35.56",
      "sign": "Aries",
      "degree": "5.56",
      "minute": 33,
      "nakshatra": "Krittika",
      "nakshatraPada": 2,
      "nakshatraLord": "Sun"
    },
    "Saturn": {
      "longitude": "80.78",
      "sign": "Gemini",
      "degree": "20.78",
      "minute": 46,
      "nakshatra": "Punarvasu",
      "nakshatraPada": 3,
      "nakshatraLord": "Jupiter"
    },
    "Rahu": {
      "longitude": "125.90",
      "sign": "Leo",
      "degree": "5.90",
      "minute": 54,
      "nakshatra": "Magha",
      "nakshatraPada": 1,
      "nakshatraLord": "Ketu"
    },
    "Ketu": {
      "longitude": "305.90",
      "sign": "Aquarius",
      "degree": "5.90",
      "minute": 54,
      "nakshatra": "Dhanishta",
      "nakshatraPada": 1,
      "nakshatraLord": "Mars"
    }
  }
}
```

---

## Zodiac Signs
```
0-30°    : Aries
30-60°   : Taurus
60-90°   : Gemini
90-120°  : Cancer
120-150° : Leo
150-180° : Virgo
180-210° : Libra
210-240° : Scorpio
240-270° : Sagittarius
270-300° : Capricorn
300-330° : Aquarius
330-360° : Pisces
```

## Nakshatras (27 Lunar Mansions)
1. Ashwini (0-13°20')
2. Bharani (13°20'-26°40')
3. Krittika (26°40'-40°)
4. Rohini (40-53°20')
5. Mrigashira (53°20'-66°40')
6. Ardra (66°40'-80°)
7. Punarvasu (80-93°20')
8. Pushya (93°20'-106°40')
9. Ashlesha (106°40'-120°)
10. Magha (120-133°20')
11. Purva Phalguni (133°20'-146°40')
12. Uttara Phalguni (146°40'-160°)
13. Hasta (160-173°20')
14. Chitra (173°20'-186°40')
15. Swati (186°40'-200°)
16. Vishakha (200-213°20')
17. Anuradha (213°20'-226°40')
18. Jyeshta (226°40'-240°)
19. Mula (240-253°20')
20. Purva Ashadha (253°20'-266°40')
21. Uttara Ashadha (266°40'-280°)
22. Shravana (280-293°20')
23. Dhanishta (293°20'-306°40')
24. Shatabhisha (306°40'-320°)
25. Purva Bhadrapada (320-333°20')
26. Uttara Bhadrapada (333°20'-346°40')
27. Revati (346°40'-360°)

## Vimshottari Dasha Lords & Years
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
| **Total** | **120** |

## Example Usage

### cURL
```bash
curl "http://localhost:3000/api/astrology/complete?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5"
```

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
    "year": 1993,
    "month": 10,
    "day": 29,
    "hour": 6,
    "minute": 45,
    "lat": 8.964,
    "lon": 77.315,
    "tz": 5.5
}

response = requests.get(url, params=params)
data = response.json()
print(data)
```

## Error Handling

All endpoints return appropriate HTTP status codes:

- **200 OK**: Successful request
- **400 Bad Request**: Missing or invalid parameters
- **500 Internal Server Error**: Server-side error

Error Response:
```json
{
  "error": "Missing required parameters: year, month, day, lat, lon"
}
```

## Notes

1. **Accuracy**: This API uses simplified astronomical calculations. For production use, integrate with Swiss Ephemeris or similar libraries.
2. **Timezone**: Default timezone is 5.5 (IST). Adjust based on birth location.
3. **Coordinates**: Use decimal format for latitude and longitude.
4. **Date Format**: All dates in response are ISO 8601 format (YYYY-MM-DD).

## Future Enhancements

- Integration with Swiss Ephemeris for accurate planetary positions
- Additional divisional charts (D2, D3, D4, D7, D10, D12, D20, D24, D27, D30, D40, D45, D60)
- Yogas and Doshas analysis
- Compatibility analysis (Synastry)
- Remedies and recommendations
- Transits and progressions
