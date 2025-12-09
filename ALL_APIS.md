# API Endpoints & Payloads
This document lists all available API endpoints, their methods, and example payloads.

## Base URL
`http://localhost:3000/api`

---

## 1. Astrology Endpoints (`/api/astrology`)

### 1.1 Complete Chart Analysis
**POST** `/astrology/complete`
Returns comprehensive astrology data including Rasi, Navamsa, Dasha, and Panchangam.

**Payload:**
```json
{
  "year": 1990,
  "month": 5,
  "day": 15,
  "hour": 14,
  "minute": 30,
  "lat": 13.0827,
  "lon": 80.2707,
  "tz": 5.5
}
```

**GET** `/astrology/complete?year=1990&month=5&day=15&hour=14&minute=30&lat=13.0827&lon=80.2707&tz=5.5`

### 1.2 Rasi Chart (D1)
**POST** `/astrology/rasi-chart`
Returns planetary positions in the main birth chart.

**Payload:**
```json
{
  "year": 1990, "month": 5, "day": 15, "hour": 14, "minute": 30, "lat": 13.0827, "lon": 80.2707
}
```

### 1.3 Navamsa Chart (D9)
**POST** `/astrology/navamsa-chart`
Returns planetary positions in the D9 chart (Marriage/Strength).

**Payload:** Same as above.

### 1.4 Vimshottari Dasha details
**POST** `/astrology/dasha`
Returns current Dasha, Bhukti, and the full Mahadasha sequence.

**Payload:** Same as above.

### 1.5 Panchangam
**POST** `/astrology/panchangam`
Returns Tithi, Vara, Nakshatra, Yoga, and Karana.

**Payload:** Same as above.

### 1.6 Planetary Positions
**POST** `/astrology/planetary-positions`
Returns detailed longitudes and Nakshatra positions for all planets.

**Payload:** Same as above.

---

## 2. Vimshottari Dasha Endpoints (`/api/vimshottari`)

### 2.1 Calculate Dasha (Generic)
**POST** `/vimshottari`
Calculates dasha based on the `endpoint` parameter in the body.

**Payload:**
```json
{
  "year": 1990, "month": 5, "day": 15, "hour": 14, "minute": 30,
  "lat": 13.0827, "lon": 80.2707, "tz": 5.5,
  "endpoint": "current" // Options: "mahadashas", "current", "complete" (default)
}
```

### 2.2 Get Mahadasha Sequence
**GET** `/vimshottari/mahadashas?year=...`
Returns the list of all Mahadashas for 120 years.

### 2.3 Get Current Dasha
**GET** `/vimshottari/current?year=...`
Returns the currently running Mahadasha, Bhukti, and Pratyantar Dasha.

### 2.4 Get Complete System
**GET** `/vimshottari/complete?year=...`
Returns the full nested tree of Mahadashas and their Bhuktis.

---

## 3. Marriage Matching (`/api/match`)

### 3.1 Calculate Porutham (Compatibility)
**POST** `/match/porutham`
Calculates the 10 Poruthams compatibility between a Boy and a Girl.

**Payload:**
```json
{
  "boy": {
    "year": 1995, "month": 10, "day": 25, "hour": 14, "minute": 30,
    "lat": 13.0827, "lon": 80.2707, "tz": 5.5
  },
  "girl": {
    "year": 1998, "month": 5, "day": 15, "hour": 9, "minute": 15,
    "lat": 13.0827, "lon": 80.2707, "tz": 5.5
  }
}
```

---

## 4. Daily Horoscope (`/api/horoscope`)

### 4.1 Get Daily Prediction
**POST** `/horoscope/daily`
Returns daily horoscope predictions in Tamil based on Rasi.

**Payload (Option 1 - Birth Details):**
```json
{
  "targetDate": "2023-12-10",
  "birthDetails": {
    "year": 1990, "month": 5, "day": 15, "hour": 14, "minute": 30
  }
}
```

**Payload (Option 2 - Direct Rasi):**
```json
{
  "targetDate": "2023-12-10",
  "rasi": "Aries"
}
```
*Valid Rasis: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces.*
