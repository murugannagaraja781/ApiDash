# API Testing Guide

## Testing the Vedic Astrology API

### Prerequisites
- Node.js installed
- Server running on `http://localhost:3000`

### Start the Server

```bash
npm install
npm start
```

You should see:
```
🚀 Server running on port 3000
📍 http://localhost:3000
```

---

## Test Endpoints

### 1. Test Complete Astrology Data

**cURL:**
```bash
curl "http://localhost:3000/api/astrology/complete?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5"
```

**Expected Response:** Full JSON with all astrology data

---

### 2. Test Rasi Chart (D1)

**cURL:**
```bash
curl "http://localhost:3000/api/astrology/rasi-chart?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315"
```

**Expected Response:** Rasi chart with planetary positions

---

### 3. Test Navamsa Chart (D9)

**cURL:**
```bash
curl "http://localhost:3000/api/astrology/navamsa-chart?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315"
```

**Expected Response:** Navamsa chart with divisional positions

---

### 4. Test Dasha Information

**cURL:**
```bash
curl "http://localhost:3000/api/astrology/dasha?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315"
```

**Expected Response:** Current and future Dasha periods

---

### 5. Test Panchangam

**cURL:**
```bash
curl "http://localhost:3000/api/astrology/panchangam?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315"
```

**Expected Response:** Tithi, Vara, Nakshatra, Yoga, Karana

---

### 6. Test Planetary Positions

**cURL:**
```bash
curl "http://localhost:3000/api/astrology/planetary-positions?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315"
```

**Expected Response:** Detailed planetary positions with signs and nakshatras

---

## Test with Different Birth Data

### Example 1: Different Date
```bash
curl "http://localhost:3000/api/astrology/complete?year=2000&month=1&day=1&hour=12&minute=0&lat=40.7128&lon=-74.0060&tz=-5"
```

### Example 2: Different Location
```bash
curl "http://localhost:3000/api/astrology/complete?year=1985&month=5&day=15&hour=14&minute=30&lat=51.5074&lon=-0.1278&tz=0"
```

### Example 3: Different Time
```bash
curl "http://localhost:3000/api/astrology/complete?year=1990&month=7&day=20&hour=18&minute=45&lat=35.6762&lon=139.6503&tz=9"
```

---

## Test Error Handling

### Missing Parameters
```bash
curl "http://localhost:3000/api/astrology/complete?year=1993&month=10"
```

**Expected Response:**
```json
{
  "error": "Missing required parameters: year, month, day, lat, lon"
}
```

---

## Browser Testing

Open these URLs in your browser:

1. **Complete Data:**
   ```
   http://localhost:3000/api/astrology/complete?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5
   ```

2. **Rasi Chart:**
   ```
   http://localhost:3000/api/astrology/rasi-chart?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315
   ```

3. **Navamsa Chart:**
   ```
   http://localhost:3000/api/astrology/navamsa-chart?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315
   ```

4. **Dasha:**
   ```
   http://localhost:3000/api/astrology/dasha?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315
   ```

5. **Panchangam:**
   ```
   http://localhost:3000/api/astrology/panchangam?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315
   ```

6. **Planetary Positions:**
   ```
   http://localhost:3000/api/astrology/planetary-positions?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315
   ```

---

## JavaScript Testing

Create a test file `test.js`:

```javascript
const BASE_URL = 'http://localhost:3000/api/astrology';

async function testAPI() {
  const params = {
    year: 1993,
    month: 10,
    day: 29,
    hour: 6,
    minute: 45,
    lat: 8.964,
    lon: 77.315,
    tz: 5.5
  };

  const queryString = new URLSearchParams(params).toString();

  try {
    // Test Complete
    console.log('Testing /complete...');
    let response = await fetch(`${BASE_URL}/complete?${queryString}`);
    let data = await response.json();
    console.log('✓ Complete:', data.birthDetails);

    // Test Rasi Chart
    console.log('\nTesting /rasi-chart...');
    response = await fetch(`${BASE_URL}/rasi-chart?${queryString}`);
    data = await response.json();
    console.log('✓ Rasi Chart:', Object.keys(data.rasiChart));

    // Test Navamsa Chart
    console.log('\nTesting /navamsa-chart...');
    response = await fetch(`${BASE_URL}/navamsa-chart?${queryString}`);
    data = await response.json();
    console.log('✓ Navamsa Chart:', Object.keys(data.navamsaChart));

    // Test Dasha
    console.log('\nTesting /dasha...');
    response = await fetch(`${BASE_URL}/dasha?${queryString}`);
    data = await response.json();
    console.log('✓ Dasha:', data.current.mahadasha.lord);

    // Test Panchangam
    console.log('\nTesting /panchangam...');
    response = await fetch(`${BASE_URL}/panchangam?${queryString}`);
    data = await response.json();
    console.log('✓ Panchangam:', data.panchangam.tithiName, data.panchangam.vara);

    // Test Planetary Positions
    console.log('\nTesting /planetary-positions...');
    response = await fetch(`${BASE_URL}/planetary-positions?${queryString}`);
    data = await response.json();
    console.log('✓ Planetary Positions:', Object.keys(data.planetaryPositions));

    console.log('\n✅ All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testAPI();
```

Run with:
```bash
node test.js
```

---

## Python Testing

Create a test file `test.py`:

```python
import requests
import json

BASE_URL = 'http://localhost:3000/api/astrology'

params = {
    'year': 1993,
    'month': 10,
    'day': 29,
    'hour': 6,
    'minute': 45,
    'lat': 8.964,
    'lon': 77.315,
    'tz': 5.5
}

endpoints = [
    'complete',
    'rasi-chart',
    'navamsa-chart',
    'dasha',
    'panchangam',
    'planetary-positions'
]

for endpoint in endpoints:
    try:
        print(f'Testing /{endpoint}...')
        response = requests.get(f'{BASE_URL}/{endpoint}', params=params)
        data = response.json()
        print(f'✓ {endpoint}: Success')
        print(f'  Status: {response.status_code}')
    except Exception as e:
        print(f'❌ {endpoint}: Failed - {e}')

print('\n✅ All tests completed!')
```

Run with:
```bash
python test.py
```

---

## Postman Testing

1. **Import Collection:**
   - Create new collection "Vedic Astrology API"
   - Add requests for each endpoint

2. **Set Variables:**
   - `base_url`: http://localhost:3000/api/astrology
   - `year`: 1993
   - `month`: 10
   - `day`: 29
   - `hour`: 6
   - `minute`: 45
   - `lat`: 8.964
   - `lon`: 77.315
   - `tz`: 5.5

3. **Create Requests:**
   ```
   GET {{base_url}}/complete?year={{year}}&month={{month}}&day={{day}}&hour={{hour}}&minute={{minute}}&lat={{lat}}&lon={{lon}}&tz={{tz}}
   GET {{base_url}}/rasi-chart?year={{year}}&month={{month}}&day={{day}}&hour={{hour}}&minute={{minute}}&lat={{lat}}&lon={{lon}}
   GET {{base_url}}/navamsa-chart?year={{year}}&month={{month}}&day={{day}}&hour={{hour}}&minute={{minute}}&lat={{lat}}&lon={{lon}}
   GET {{base_url}}/dasha?year={{year}}&month={{month}}&day={{day}}&hour={{hour}}&minute={{minute}}&lat={{lat}}&lon={{lon}}
   GET {{base_url}}/panchangam?year={{year}}&month={{month}}&day={{day}}&hour={{hour}}&minute={{minute}}&lat={{lat}}&lon={{lon}}
   GET {{base_url}}/planetary-positions?year={{year}}&month={{month}}&day={{day}}&hour={{hour}}&minute={{minute}}&lat={{lat}}&lon={{lon}}
   ```

---

## Expected Results

### Successful Response
- HTTP Status: 200
- Content-Type: application/json
- Body: Valid JSON with astrology data

### Error Response
- HTTP Status: 400 (Bad Request)
- Body: `{"error": "Missing required parameters..."}`

---

## Troubleshooting

### Server Not Starting
```bash
# Check if port 3000 is in use
lsof -i :3000

# Use different port
PORT=3001 npm start
```

### CORS Issues
- API has CORS enabled for all origins
- Should work from any frontend

### Invalid Response
- Check parameter format
- Verify all required parameters are provided
- Check server logs for errors

### Performance
- First request may be slower (calculations)
- Subsequent requests should be fast
- Consider caching for production

---

## Test Checklist

- [ ] Server starts without errors
- [ ] `/complete` returns full data
- [ ] `/rasi-chart` returns D1 chart
- [ ] `/navamsa-chart` returns D9 chart
- [ ] `/dasha` returns dasha information
- [ ] `/panchangam` returns panchangam data
- [ ] `/planetary-positions` returns planetary data
- [ ] Error handling works (missing parameters)
- [ ] Different birth data produces different results
- [ ] Response format is valid JSON

---

## Notes

- All endpoints are GET requests
- Parameters are passed as query strings
- No authentication required
- CORS enabled for all origins
- Responses are in JSON format
- Calculations are simplified (demo level)

For production use, integrate Swiss Ephemeris for accurate calculations.
