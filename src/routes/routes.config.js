const express = require('express');
const router = express.Router();
const countries = require('../controllers/countries.js');

router.get('/getAllCountries', countries.getAllCountries);

module.exports = router;
