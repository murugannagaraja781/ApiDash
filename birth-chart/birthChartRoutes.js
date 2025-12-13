const express = require('express');
const router = express.Router();
const chartController = require('./birthChartController');
// const authenticateToken = require('../middleware/auth');

// All chart routes require authentication
// All chart routes require authentication
// router.use(authenticateToken);

// Birth Chart
// Route is mounted at /api/charts/birth-chart, so this handles the root of that path
router.post('/', chartController.generateBirthChart);

module.exports = router;
