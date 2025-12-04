# Vedic Astrology Vimshottari Dasha API

`vedic-astrology-api` package-உடன் integrate செய்யப்பட்ட முழுமையான Vimshottari Dasha-Bhukti-Pratyantar system.

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

Server `http://localhost:3000` இல் run ஆகும்.

## API Endpoints

### 1. Get All Mahadashas
```
GET /api/vimshottari/mahadashas
```

**Parameters:**
- `year` - பிறந்த வருடம்
- `month` - பிறந்த மாதம் (1-12)
- `day` - பிறந்த நாள்
- `hour` - மணி (0-23)
- `minute` - நிமிடம் (0-59)
- `lat` - Latitude
- `lon` - Longitude
- `tz` - Timezone offset (default: 5.5 for IST)

**Example:**
```
http://localhost:3000/api/vimshottari/mahadashas?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5
```

### 2. Get Bhuktis for Specific Mahadasha
```
GET /api/vimshottari/bhuktis
```

**Additional Parameter:**
- `mahaIndex` - Mahadasha index (0 = first, 1 = second, etc.)

**Example:**
```
http://localhost:3000/api/vimshottari/bhuktis?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5&mahaIndex=0
```

### 3. Get Current Running Dasha
```
GET /api/vimshottari/current
```

**Optional Parameter:**
- `targetDate` - ISO date string (default: today)

**Example:**
```
http://localhost:3000/api/vimshottari/current?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5
```

இது இப்போது நடக்கும் Mahadasha, Bhukti, Pratyantar-ஐ காட்டும்.

### 4. Get Complete Dasha System
```
GET /api/vimshottari/complete
```

**Example:**
```
http://localhost:3000/api/vimshottari/complete?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5
```

எல்லா Mahadashas + அவற்றின் Bhuktis-ஐ ஒரே response-ல் தரும்.

## Features

✅ Complete Vimshottari Mahadasha calculation (120 years)
✅ Bhukti (Antardasha) calculation for each Mahadasha
✅ Pratyantar (sub-sub period) calculation
✅ Current running Dasha finder
✅ Moon longitude based Nakshatra lord detection
✅ Balance Dasha calculation at birth
✅ Date-based period calculations

## Technical Details

- **Nakshatra System:** 27 Nakshatras, 13°20' each
- **Dasha Lords:** Ketu, Venus, Sun, Moon, Mars, Rahu, Jupiter, Saturn, Mercury
- **Total Cycle:** 120 years
- **Calculation Base:** Moon's longitude at birth

## Example Response

```json
{
  "moonLongitude": 245.67,
  "current": {
    "mahadasha": {
      "lord": "Saturn",
      "start": "2020-01-15T00:00:00.000Z",
      "end": "2039-01-15T00:00:00.000Z"
    },
    "bhukti": {
      "lord": "Mercury",
      "start": "2023-05-20T00:00:00.000Z",
      "end": "2026-01-10T00:00:00.000Z"
    },
    "pratyantar": {
      "lord": "Venus",
      "start": "2024-11-01T00:00:00.000Z",
      "end": "2025-04-15T00:00:00.000Z"
    }
  }
}
```

## Notes

- இந்த implementation classical Vimshottari system-ஐ பின்பற்றுகிறது
- Date calculations 365.25 days/year கணக்கில் செய்யப்பட்டுள்ளது
- Future refinements: Ayanamsa corrections, leap year adjustments
