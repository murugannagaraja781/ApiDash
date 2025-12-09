const express = require("express");
const cors = require("cors");

const app = express();
const vimshottariRouter = require("./routes/vimshottari");
const astrologyRouter = require("./routes/astrology");

app.use(
  cors({
    origin: "*",
  })
);
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.use("/api/vimshottari", vimshottariRouter);
app.use("/api/astrology", astrologyRouter);
app.use("/api/match", require("./routes/match"));
app.use("/api/horoscope", require("./routes/horoscope"));

// API info endpoint
app.get("/api", (req, res) => {
  res.json({
    message: "Vedic Astrology API - Complete Astrology Data",
    endpoints: {
      complete: "/api/astrology/complete?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5",
      rasiChart: "/api/astrology/rasi-chart?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315",
      navamsaChart: "/api/astrology/navamsa-chart?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315",
      dasha: "/api/astrology/dasha?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315",
      panchangam: "/api/astrology/panchangam?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315",
      planetaryPositions: "/api/astrology/planetary-positions?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315",
      vimshottariMahadashas: "/api/vimshottari/mahadashas?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5",
      vimshottariBhuktis: "/api/vimshottari/bhuktis?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5&mahaIndex=0",
      vimshottariCurrent: "/api/vimshottari/current?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5",
      vimshottariComplete: "/api/vimshottari/complete?year=1993&month=10&day=29&hour=6&minute=45&lat=8.964&lon=77.315&tz=5.5"
    },
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});

module.exports = app;
