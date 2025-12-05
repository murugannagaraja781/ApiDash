# POST API Guide - Vedic Astrology API

## Overview

All astrology endpoints now support both **GET** (query parameters) and **POST** (JSON body) methods.

## POST Endpoints

### 1. Complete Astrology Data
**POST** `/api/astrology/complete`

**Request Body:**
```json
{
  "year": 2025,
  "month": 12,
  "day": 4,
  "hour": 12,
  "minute": 0,
  "lat": 13.0827,
  "lon": 80.2707,
  "tz": 5.5
}
```

**Response:** All astrology data (Rasi, Navamsa, Dasha, Panchangam, Planets)

---

### 2. Rasi Chart (D1)
**POST** `/api/astrology/rasi-chart`

**Request Body:**
```json
{
  "year": 2025,
  "month": 12,
  "day": 4,
  "hour": 12,
  "minute": 0,
  "lat": 13.0827,
  "lon": 80.2707
}
```

**Response:** D1 Chart with planetary positions

---

### 3. Navamsa Chart (D9)
**POST** `/api/astrology/navamsa-chart`

**Request Body:**
```json
{
  "year": 2025,
  "month": 12,
  "day": 4,
  "hour": 12,
  "minute": 0,
  "lat": 13.0827,
  "lon": 80.2707
}
```

**Response:** D9 Chart with divisional positions

---

### 4. Dasha System
**POST** `/api/astrology/dasha`

**Request Body:**
```json
{
  "year": 2025,
  "month": 12,
  "day": 4,
  "hour": 12,
  "minute": 0,
  "lat": 13.0827,
  "lon": 80.2707
}
```

**Response:** Current and future Dasha periods

---

### 5. Panchangam
**POST** `/api/astrology/panchangam`

**Request Body:**
```json
{
  "year": 2025,
  "month": 12,
  "day": 4,
  "hour": 12,
  "minute": 0,
  "lat": 13.0827,
  "lon": 80.2707
}
```

**Response:** Tithi, Vara, Nakshatra, Yoga, Karana

---

### 6. Planetary Positions
**POST** `/api/astrology/planetary-positions`

**Request Body:**
```json
{
  "year": 2025,
  "month": 12,
  "day": 4,
  "hour": 12,
  "minute": 0,
  "lat": 13.0827,
  "lon": 80.2707
}
```

**Response:** Detailed planetary positions with signs and nakshatras

---

## Required Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| year | Integer | Yes | Birth year (e.g., 2025) |
| month | Integer | Yes | Birth month 1-12 (e.g., 12) |
| day | Integer | Yes | Birth day 1-31 (e.g., 4) |
| hour | Integer | No | Birth hour 0-23 (default: 0) |
| minute | Integer | No | Birth minute 0-59 (default: 0) |
| lat | Float | Yes | Latitude (e.g., 13.0827) |
| lon | Float | Yes | Longitude (e.g., 80.2707) |
| tz | Float | No | Timezone offset (default: 5.5) |

---

## Usage Examples

### cURL
```bash
curl -X POST http://localhost:3000/api/astrology/complete \
  -H "Content-Type: application/json" \
  -d '{
    "year": 2025,
    "month": 12,
    "day": 4,
    "hour": 12,
    "minute": 0,
    "lat": 13.0827,
    "lon": 80.2707,
    "tz": 5.5
  }'
```

### JavaScript/Fetch
```javascript
const payload = {
  year: 2025,
  month: 12,
  day: 4,
  hour: 12,
  minute: 0,
  lat: 13.0827,
  lon: 80.2707,
  tz: 5.5
};

const response = await fetch('http://localhost:3000/api/astrology/complete', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
});

const data = await response.json();
console.log(data);
```

### Python
```python
import requests
import json

payload = {
    "year": 2025,
    "month": 12,
    "day": 4,
    "hour": 12,
    "minute": 0,
    "lat": 13.0827,
    "lon": 80.2707,
    "tz": 5.5
}

response = requests.post(
    'http://localhost:3000/api/astrology/complete',
    json=payload
)

data = response.json()
print(json.dumps(data, indent=2))
```

### Axios (JavaScript)
```javascript
const axios = require('axios');

const payload = {
  year: 2025,
  month: 12,
  day: 4,
  hour: 12,
  minute: 0,
  lat: 13.0827,
  lon: 80.2707,
  tz: 5.5
};

axios.post('http://localhost:3000/api/astrology/complete', payload)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```

---

## Response Format

### Success Response (HTTP 200)
```json
{
  "birthDetails": { ... },
  "planetaryPositions": { ... },
  "rasiChart": { ... },
  "navamsaChart": { ... },
  "panchangam": { ... },
  "dashaSystem": { ... },
  "nakshatraDetails": { ... }
}
```

### Error Response (HTTP 400)
```json
{
  "error": "Missing required parameters: year, month, day, lat, lon"
}
```

---

## Advantages of POST

1. **Cleaner URLs** - No long query strings
2. **Better for Complex Data** - Easier to send structured data
3. **Security** - Parameters not visible in URL
4. **Flexibility** - Can send additional data in future
5. **Standard Practice** - Follows REST conventions for data submission

---

## Testing with Postman

1. **Create New Request**
   - Method: POST
   - URL: `http://localhost:3000/api/astrology/complete`

2. **Set Headers**
   - Key: `Content-Type`
   - Value: `application/json`

3. **Set Body**
   - Select: `raw`
   - Format: `JSON`
   - Paste your payload

4. **Send Request**
   - Click Send
   - View response

---

## Testing with Insomnia

1. **Create New Request**
   - Method: POST
   - URL: `http://localhost:3000/api/astrology/complete`

2. **Set Body**
   - Select: `JSON`
   - Paste your payload

3. **Send Request**
   - Click Send
   - View response

---

## Sample Payloads

### Chennai, India (2025-12-04, 12:00 PM)
```json
{
  "year": 2025,
  "month": 12,
  "day": 4,
  "hour": 12,
  "minute": 0,
  "lat": 13.0827,
  "lon": 80.2707,
  "tz": 5.5
}
```

### New York, USA (2025-12-04, 12:00 PM)
```json
{
  "year": 2025,
  "month": 12,
  "day": 4,
  "hour": 12,
  "minute": 0,
  "lat": 40.7128,
  "lon": -74.0060,
  "tz": -5
}
```

### London, UK (2025-12-04, 12:00 PM)
```json
{
  "year": 2025,
  "month": 12,
  "day": 4,
  "hour": 12,
  "minute": 0,
  "lat": 51.5074,
  "lon": -0.1278,
  "tz": 0
}
```

### Tokyo, Japan (2025-12-04, 12:00 PM)
```json
{
  "year": 2025,
  "month": 12,
  "day": 4,
  "hour": 12,
  "minute": 0,
  "lat": 35.6762,
  "lon": 139.6503,
  "tz": 9
}
```

---

## Error Handling

### Missing Required Parameters
```json
{
  "error": "Missing required parameters: year, month, day, lat, lon"
}
```

### Invalid Data Type
```json
{
  "error": "Invalid parameter format"
}
```

### Server Error
```json
{
  "error": "Internal server error message"
}
```

---

## Best Practices

1. **Always include Content-Type header** - Set to `application/json`
2. **Validate parameters** - Check before sending
3. **Handle errors** - Check response status code
4. **Use proper timezone** - Affects calculations
5. **Test with known data** - Verify results

---

## Comparison: GET vs POST

| Feature | GET | POST |
|---------|-----|------|
| URL Length | Long | Short |
| Parameters | Query string | JSON body |
| Caching | Yes | No |
| Security | Lower | Higher |
| Complexity | Simple | Better for complex |
| Standard Use | Retrieval | Submission |

---

## Migration from GET to POST

### Before (GET)
```bash
curl "http://localhost:3000/api/astrology/complete?year=2025&month=12&day=4&hour=12&minute=0&lat=13.0827&lon=80.2707&tz=5.5"
```

### After (POST)
```bash
curl -X POST http://localhost:3000/api/astrology/complete \
  -H "Content-Type: application/json" \
  -d '{"year":2025,"month":12,"day":4,"hour":12,"minute":0,"lat":13.0827,"lon":80.2707,"tz":5.5}'
```

---

## Troubleshooting

### 400 Bad Request
- Check all required parameters are included
- Verify parameter types (numbers, not strings)
- Ensure JSON is valid

### 500 Internal Server Error
- Check server logs
- Verify parameters are valid
- Try with sample data

### No Response
- Check server is running
- Verify URL is correct
- Check network connection

---

## Notes

- Both GET and POST methods work simultaneously
- POST is recommended for production use
- All endpoints support both methods
- Response format is identical
- Error handling is the same

---

**Last Updated**: December 5, 2025
**Version**: 1.0.0
