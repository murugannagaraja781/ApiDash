const term = require('./birth-chart/birthChartController');

const mockReq = {
    body: {
        year: 1990,
        month: 5,
        day: 15,
        hour: 10,
        minute: 30,
        lat: 13.0827,
        lon: 80.2707, // Chennai
        tz: 5.5
    }
};

const mockRes = {
    json: (data) => {
        console.log("Response JSON Keys:", Object.keys(data));
        if (data.rasi_chart) console.log("Rasi Chart Keys:", Object.keys(data.rasi_chart));
        if (data.panchangam) console.log("Panchangam:", data.panchangam);
        if (data.planetary_positions) console.log("Planets:", Object.keys(data.planetary_positions));
    },
    status: (code) => {
        console.log("Status Code:", code);
        return {
            json: (data) => console.log("Error JSON:", data)
        };
    }
};

console.log("Testing generateBirthChart...");
term.generateBirthChart(mockReq, mockRes);
