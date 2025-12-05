# Example API Responses

## Complete Astrology Data Response

**Endpoint:** `/api/astrology/complete?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5`

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
      "Rahu": 125.9,
      "Ketu": 305.9
    },
    "detailed": {
      "Sun": {
        "longitude": 215.45,
        "sign": "Libra",
        "degree": 5.45,
        "minute": 27,
        "nakshatra": "Chitra",
        "nakshatraPada": 2
      },
      "Moon": {
        "longitude": 125.67,
        "sign": "Leo",
        "degree": 5.67,
        "minute": 40,
        "nakshatra": "Magha",
        "nakshatraPada": 1
      },
      "Mars": {
        "longitude": 260.89,
        "sign": "Sagittarius",
        "degree": 20.89,
        "minute": 53,
        "nakshatra": "Purva Ashadha",
        "nakshatraPada": 3
      },
      "Mercury": {
        "longitude": 305.12,
        "sign": "Aquarius",
        "degree": 5.12,
        "minute": 7,
        "nakshatra": "Dhanishta",
        "nakshatraPada": 1
      },
      "Jupiter": {
        "longitude": 350.34,
        "sign": "Pisces",
        "degree": 20.34,
        "minute": 20,
        "nakshatra": "Revati",
        "nakshatraPada": 4
      },
      "Venus": {
        "longitude": 35.56,
        "sign": "Aries",
        "degree": 5.56,
        "minute": 33,
        "nakshatra": "Krittika",
        "nakshatraPada": 2
      },
      "Saturn": {
        "longitude": 80.78,
        "sign": "Gemini",
        "degree": 20.78,
        "minute": 46,
        "nakshatra": "Punarvasu",
        "nakshatraPada": 3
      },
      "Rahu": {
        "longitude": 125.9,
        "sign": "Leo",
        "degree": 5.9,
        "minute": 54,
        "nakshatra": "Magha",
        "nakshatraPada": 1
      },
      "Ketu": {
        "longitude": 305.9,
        "sign": "Aquarius",
        "degree": 5.9,
        "minute": 54,
        "nakshatra": "Dhanishta",
        "nakshatraPada": 1
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
      },
      "Moon": {
        "sign": "Leo",
        "signIndex": 4,
        "longitude": 125.67,
        "degree": 5.67,
        "minute": 40,
        "second": 0
      },
      "Mars": {
        "sign": "Sagittarius",
        "signIndex": 8,
        "longitude": 260.89,
        "degree": 20.89,
        "minute": 53,
        "second": 0
      },
      "Mercury": {
        "sign": "Aquarius",
        "signIndex": 10,
        "longitude": 305.12,
        "degree": 5.12,
        "minute": 7,
        "second": 0
      },
      "Jupiter": {
        "sign": "Pisces",
        "signIndex": 11,
        "longitude": 350.34,
        "degree": 20.34,
        "minute": 20,
        "second": 0
      },
      "Venus": {
        "sign": "Aries",
        "signIndex": 0,
        "longitude": 35.56,
        "degree": 5.56,
        "minute": 33,
        "second": 0
      },
      "Saturn": {
        "sign": "Gemini",
        "signIndex": 2,
        "longitude": 80.78,
        "degree": 20.78,
        "minute": 46,
        "second": 0
      },
      "Rahu": {
        "sign": "Leo",
        "signIndex": 4,
        "longitude": 125.9,
        "degree": 5.9,
        "minute": 54,
        "second": 0
      },
      "Ketu": {
        "sign": "Aquarius",
        "signIndex": 10,
        "longitude": 305.9,
        "degree": 5.9,
        "minute": 54,
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
      },
      "Moon": {
        "sign": "Scorpio",
        "signIndex": 7,
        "navamsaLongitude": 113.03,
        "degree": 23.03,
        "minute": 1,
        "second": 0,
        "navamsaNumber": 8
      },
      "Mars": {
        "sign": "Aquarius",
        "signIndex": 10,
        "navamsaLongitude": 234.01,
        "degree": 24.01,
        "minute": 0,
        "second": 0,
        "navamsaNumber": 8
      },
      "Mercury": {
        "sign": "Pisces",
        "signIndex": 11,
        "navamsaLongitude": 274.08,
        "degree": 4.08,
        "minute": 4,
        "second": 0,
        "navamsaNumber": 1
      },
      "Jupiter": {
        "sign": "Aries",
        "signIndex": 0,
        "navamsaLongitude": 315.06,
        "degree": 15.06,
        "minute": 3,
        "second": 0,
        "navamsaNumber": 5
      },
      "Venus": {
        "sign": "Taurus",
        "signIndex": 1,
        "navamsaLongitude": 35.04,
        "degree": 5.04,
        "minute": 2,
        "second": 0,
        "navamsaNumber": 2
      },
      "Saturn": {
        "sign": "Cancer",
        "signIndex": 3,
        "navamsaLongitude": 72.7,
        "degree": 12.7,
        "minute": 42,
        "second": 0,
        "navamsaNumber": 4
      },
      "Rahu": {
        "sign": "Scorpio",
        "signIndex": 7,
        "navamsaLongitude": 113.1,
        "degree": 23.1,
        "minute": 6,
        "second": 0,
        "navamsaNumber": 8
      },
      "Ketu": {
        "sign": "Taurus",
        "signIndex": 1,
        "navamsaLongitude": 35.1,
        "degree": 5.1,
        "minute": 6,
        "second": 0,
        "navamsaNumber": 2
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
      },
      {
        "lord": "Sun",
        "start": "2010-01-15",
        "end": "2016-01-15",
        "years": "6.00"
      },
      {
        "lord": "Moon",
        "start": "2016-01-15",
        "end": "2026-01-15",
        "years": "10.00"
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
    },
    "Moon": {
      "name": "Magha",
      "index": 9,
      "pada": 1,
      "degree": 5.67,
      "lord": "Ketu"
    },
    "Mars": {
      "name": "Purva Ashadha",
      "index": 20,
      "pada": 3,
      "degree": 20.89,
      "lord": "Venus"
    },
    "Mercury": {
      "name": "Dhanishta",
      "index": 23,
      "pada": 1,
      "degree": 5.12,
      "lord": "Mars"
    },
    "Jupiter": {
      "name": "Revati",
      "index": 26,
      "pada": 4,
      "degree": 20.34,
      "lord": "Mercury"
    },
    "Venus": {
      "name": "Krittika",
      "index": 2,
      "pada": 2,
      "degree": 5.56,
      "lord": "Sun"
    },
    "Saturn": {
      "name": "Punarvasu",
      "index": 7,
      "pada": 3,
      "degree": 20.78,
      "lord": "Jupiter"
    },
    "Rahu": {
      "name": "Magha",
      "index": 9,
      "pada": 1,
      "degree": 5.9,
      "lord": "Ketu"
    },
    "Ketu": {
      "name": "Dhanishta",
      "index": 23,
      "pada": 1,
      "degree": 5.9,
      "lord": "Mars"
    }
  }
}
```

---

## Rasi Chart Response

**Endpoint:** `/api/astrology/rasi-chart?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315`

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
    },
    "Mars": {
      "sign": "Sagittarius",
      "signIndex": 8,
      "longitude": 260.89,
      "degree": 20.89,
      "minute": 53,
      "second": 0
    },
    "Mercury": {
      "sign": "Aquarius",
      "signIndex": 10,
      "longitude": 305.12,
      "degree": 5.12,
      "minute": 7,
      "second": 0
    },
    "Jupiter": {
      "sign": "Pisces",
      "signIndex": 11,
      "longitude": 350.34,
      "degree": 20.34,
      "minute": 20,
      "second": 0
    },
    "Venus": {
      "sign": "Aries",
      "signIndex": 0,
      "longitude": 35.56,
      "degree": 5.56,
      "minute": 33,
      "second": 0
    },
    "Saturn": {
      "sign": "Gemini",
      "signIndex": 2,
      "longitude": 80.78,
      "degree": 20.78,
      "minute": 46,
      "second": 0
    },
    "Rahu": {
      "sign": "Leo",
      "signIndex": 4,
      "longitude": 125.9,
      "degree": 5.9,
      "minute": 54,
      "second": 0
    },
    "Ketu": {
      "sign": "Aquarius",
      "signIndex": 10,
      "longitude": 305.9,
      "degree": 5.9,
      "minute": 54,
      "second": 0
    }
  }
}
```

---

## Navamsa Chart Response

**Endpoint:** `/api/astrology/navamsa-chart?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315`

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
    },
    "Mars": {
      "sign": "Aquarius",
      "signIndex": 10,
      "navamsaLongitude": 234.01,
      "degree": 24.01,
      "minute": 0,
      "second": 0,
      "navamsaNumber": 8
    },
    "Mercury": {
      "sign": "Pisces",
      "signIndex": 11,
      "navamsaLongitude": 274.08,
      "degree": 4.08,
      "minute": 4,
      "second": 0,
      "navamsaNumber": 1
    },
    "Jupiter": {
      "sign": "Aries",
      "signIndex": 0,
      "navamsaLongitude": 315.06,
      "degree": 15.06,
      "minute": 3,
      "second": 0,
      "navamsaNumber": 5
    },
    "Venus": {
      "sign": "Taurus",
      "signIndex": 1,
      "navamsaLongitude": 35.04,
      "degree": 5.04,
      "minute": 2,
      "second": 0,
      "navamsaNumber": 2
    },
    "Saturn": {
      "sign": "Cancer",
      "signIndex": 3,
      "navamsaLongitude": 72.7,
      "degree": 12.7,
      "minute": 42,
      "second": 0,
      "navamsaNumber": 4
    },
    "Rahu": {
      "sign": "Scorpio",
      "signIndex": 7,
      "navamsaLongitude": 113.1,
      "degree": 23.1,
      "minute": 6,
      "second": 0,
      "navamsaNumber": 8
    },
    "Ketu": {
      "sign": "Taurus",
      "signIndex": 1,
      "navamsaLongitude": 35.1,
      "degree": 5.1,
      "minute": 6,
      "second": 0,
      "navamsaNumber": 2
    }
  }
}
```

---

## Dasha Response

**Endpoint:** `/api/astrology/dasha?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315`

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
    },
    {
      "lord": "Moon",
      "start": "2016-01-15",
      "end": "2026-01-15",
      "years": "10.00"
    },
    {
      "lord": "Mars",
      "start": "2026-01-15",
      "end": "2033-01-15",
      "years": "7.00"
    },
    {
      "lord": "Rahu",
      "start": "2033-01-15",
      "end": "2051-01-15",
      "years": "18.00"
    },
    {
      "lord": "Jupiter",
      "start": "2051-01-15",
      "end": "2067-01-15",
      "years": "16.00"
    },
    {
      "lord": "Saturn",
      "start": "2067-01-15",
      "end": "2086-01-15",
      "years": "19.00"
    },
    {
      "lord": "Mercury",
      "start": "2086-01-15",
      "end": "2103-01-15",
      "years": "17.00"
    },
    {
      "lord": "Ketu",
      "start": "2103-01-15",
      "end": "2110-01-15",
      "years": "7.00"
    },
    {
      "lord": "Venus",
      "start": "2110-01-15",
      "end": "2130-01-15",
      "years": "20.00"
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
    },
    {
      "lord": "Moon",
      "start": "1996-01-15",
      "end": "1999-01-15",
      "years": "3.00"
    },
    {
      "lord": "Mars",
      "start": "1999-01-15",
      "end": "2001-01-15",
      "years": "2.10"
    },
    {
      "lord": "Rahu",
      "start": "2001-01-15",
      "end": "2005-06-20",
      "years": "4.46"
    },
    {
      "lord": "Jupiter",
      "start": "2005-06-20",
      "end": "2008-06-20",
      "years": "3.00"
    },
    {
      "lord": "Saturn",
      "start": "2008-06-20",
      "end": "2012-06-20",
      "years": "4.00"
    },
    {
      "lord": "Mercury",
      "start": "2012-06-20",
      "end": "2015-06-20",
      "years": "3.00"
    },
    {
      "lord": "Ketu",
      "start": "2015-06-20",
      "end": "2017-06-20",
      "years": "2.10"
    }
  ]
}
```

---

## Panchangam Response

**Endpoint:** `/api/astrology/panchangam?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315`

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

---

## Planetary Positions Response

**Endpoint:** `/api/astrology/planetary-positions?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315`

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
      "longitude": "125.9",
      "sign": "Leo",
      "degree": "5.9",
      "minute": 54,
      "nakshatra": "Magha",
      "nakshatraPada": 1,
      "nakshatraLord": "Ketu"
    },
    "Ketu": {
      "longitude": "305.9",
      "sign": "Aquarius",
      "degree": "5.9",
      "minute": 54,
      "nakshatra": "Dhanishta",
      "nakshatraPada": 1,
      "nakshatraLord": "Mars"
    }
  }
}
```

---

## Error Response

**Example:** Missing required parameters

```json
{
  "error": "Missing required parameters: year, month, day, lat, lon"
}
```

**HTTP Status:** 400 Bad Request

---

## Notes

- All longitudes are in degrees (0-360°)
- All dates are in ISO 8601 format (YYYY-MM-DD)
- All times are in UTC (Z suffix)
- Degrees include minutes and seconds for precision
- Nakshatra Pada ranges from 1-4
- Navamsa Number ranges from 1-9
