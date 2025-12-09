
const BASE_URL = 'http://localhost:3000/api/match';

const boyPayload = {
    year: 1995,
    month: 10,
    day: 25,
    hour: 14,
    minute: 30,
    lat: 13.0827,
    lon: 80.2707,
    tz: 5.5
};

const girlPayload = {
    year: 1998,
    month: 5,
    day: 15,
    hour: 9,
    minute: 15,
    lat: 13.0827,
    lon: 80.2707,
    tz: 5.5
};

async function testMatchEndpoint() {
    console.log('🧪 Testing Match Endpoint\n');
    console.log('Boy Payload:', JSON.stringify(boyPayload, null, 2));
    console.log('Girl Payload:', JSON.stringify(girlPayload, null, 2));
    console.log('\n' + '='.repeat(80) + '\n');

    try {
        const response = await fetch(`${BASE_URL}/porutham`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ boy: boyPayload, girl: girlPayload })
        });

        if (!response.ok) {
            console.log(`❌ Failed with status ${response.status}`);
            const error = await response.json();
            console.log('Error:', error);
        } else {
            const data = await response.json();
            console.log(`✅ Success`);
            console.log('Match Result:', JSON.stringify(data.match, null, 2));
            console.log('Boy Details:', data.boy);
            console.log('Girl Details:', data.girl);
        }

    } catch (error) {
        console.log(`❌ Error: ${error.message}\n`);
    }

    console.log('='.repeat(80));
}

testMatchEndpoint();
