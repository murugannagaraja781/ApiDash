
# Marriage Porutham API

This API provides marriage compatibility matching (Porutham) based on Vedic Astrology.

## Endpoint

`POST /api/match/porutham`

## Description

Calculates the 10 Poruthams (Dina, Gana, Mahendra, Stree Deergha, Yoni, Rasi, Rasi Adhipati, Vashya, Rajju, Vedha) based on the birth details of the Boy and Girl.

## Request Body

The request body must contain two objects: `boy` and `girl`, each with the following birth details:

```json
{
  "boy": {
    "year": 1995,
    "month": 10,
    "day": 25,
    "hour": 14,
    "minute": 30,
    "lat": 13.0827,
    "lon": 80.2707,
    "tz": 5.5
  },
  "girl": {
    "year": 1998,
    "month": 5,
    "day": 15,
    "hour": 9,
    "minute": 15,
    "lat": 13.0827,
    "lon": 80.2707,
    "tz": 5.5
  }
}
```

## Response

The response includes the calculated Nakshatra and Rasi for both, and the detailed match results.

```json
{
  "boy": {
    "nakshatra": "Purva Bhadrapada",
    "pada": 2,
    "rasi": "Aquarius"
  },
  "girl": {
    "nakshatra": "Uttara Bhadrapada",
    "pada": 2,
    "rasi": "Pisces"
  },
  "match": {
    "dina": { "status": true, "description": "Good Compatibility" },
    "gana": { "status": true, "description": "Perfect Match" },
    "mahendra": { "status": false, "description": "Not present" },
    "streeDeergha": { "status": true, "description": "Good" },
    "yoni": { "status": true, "description": "Neutral/Passable" },
    "rasi": { "status": false, "description": "Dwirdwadasa - Bad" },
    "rasiAdhipati": { "status": true, "description": "Neutral - Average" },
    "vashya": { "status": false, "description": "Not Compatible" },
    "rajju": { "status": true, "description": "Good (Different Rajju)" },
    "vedha": { "status": true, "description": "Good (No Vedha)" },
    "totalScore": 24,
    "maxScore": 35,
    "percentage": 69
  }
}
```

## Calculations

The API uses standard Vedic astrology rules:
- **Dina**: Star compatibility (Nakshatra matching).
- **Gana**: Temperament compatibility (Deva, Manushya, Rakshasa).
- **Rajju**: Physical compatibility (must be different groups).
- **Vedha**: Obstruction (must not be mutually obstructing stars).
- **Rasi**: Moon sign compatibility.
