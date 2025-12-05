// test-post.js
// Test POST endpoints for Vedic Astrology API

const BASE_URL = 'http://localhost:3000/api/astrology';

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

async function testPostEndpoints() {
  console.log('🧪 Testing POST Endpoints\n');
  console.log('Payload:', JSON.stringify(payload, null, 2));
  console.log('\n' + '='.repeat(80) + '\n');

  const endpoints = [
    { name: 'complete', url: `${BASE_URL}/complete` },
    { name: 'rasi-chart', url: `${BASE_URL}/rasi-chart` },
    { name: 'navamsa-chart', url: `${BASE_URL}/navamsa-chart` },
    { name: 'dasha', url: `${BASE_URL}/dasha` },
    { name: 'panchangam', url: `${BASE_URL}/panchangam` },
    { name: 'planetary-positions', url: `${BASE_URL}/planetary-positions` }
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`📍 Testing: POST ${endpoint.name}`);

      const response = await fetch(endpoint.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        console.log(`❌ Failed with status ${response.status}`);
        const error = await response.json();
        console.log('Error:', error);
      } else {
        const data = await response.json();
        console.log(`✅ Success`);

        // Show summary based on endpoint
        if (endpoint.name === 'complete') {
          console.log(`   - Birth Date: ${data.birthDetails.date}`);
          console.log(`   - Ascendant: ${data.ascendant.sign}`);
          console.log(`   - Current Dasha: ${data.dashaSystem.current.mahadasha?.lord}`);
        } else if (endpoint.name === 'rasi-chart') {
          console.log(`   - Planets in Rasi: ${Object.keys(data.rasiChart).length}`);
        } else if (endpoint.name === 'navamsa-chart') {
          console.log(`   - Planets in Navamsa: ${Object.keys(data.navamsaChart).length}`);
        } else if (endpoint.name === 'dasha') {
          console.log(`   - Current Mahadasha: ${data.current.mahadasha?.lord}`);
          console.log(`   - Current Bhukti: ${data.current.bhukti?.lord}`);
        } else if (endpoint.name === 'panchangam') {
          console.log(`   - Tithi: ${data.panchangam.tithiName}`);
          console.log(`   - Vara: ${data.panchangam.vara}`);
          console.log(`   - Nakshatra: ${data.panchangam.nakshatra}`);
        } else if (endpoint.name === 'planetary-positions') {
          console.log(`   - Planets: ${Object.keys(data.planetaryPositions).length}`);
        }
      }

      console.log('');
    } catch (error) {
      console.log(`❌ Error: ${error.message}\n`);
    }
  }

  console.log('='.repeat(80));
  console.log('✅ All tests completed!\n');
}

// Run tests
testPostEndpoints();
