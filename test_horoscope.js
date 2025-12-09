
const BASE_URL = 'http://localhost:3000/api/horoscope';

// Test 1: Using Birth Details
const payload1 = {
    targetDate: "2025-12-09",
    birthDetails: {
        year: 1993,
        month: 10,
        day: 29,
        hour: 6,
        minute: 45
    }
};

// Test 2: Using Rasi directly
const payload2 = {
    targetDate: "2023-01-01",
    rasi: "Aries"
};

async function testHoroscope() {
    console.log('🧪 Testing Daily Horoscope Endpoint\n');

    try {
        // Case 1
        console.log('Test 1: With Birth Details');
        const res1 = await fetch(`${BASE_URL}/daily`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload1)
        });
        const data1 = await res1.json();
        console.log('User Rasi:', data1.userRasi);
        console.log('Summary:', data1.summary);
        console.log('-----------------------------------');

        // Case 2
        console.log('Test 2: With Direct Rasi (Aries)');
        const res2 = await fetch(`${BASE_URL}/daily`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload2)
        });
        const data2 = await res2.json();
        console.log('User Rasi:', data2.userRasi);
        console.log('Summary:', data2.summary);

    } catch (error) {
        console.log('❌ Error:', error.message);
    }

    console.log('\n✅ Tests Completed');
}

testHoroscope();
