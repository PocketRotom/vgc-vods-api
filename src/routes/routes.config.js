const express = require('express');
const router = express.Router();
const countries = require('../controllers/countries.js');
const players = require('../controllers/players.js');

router.get('/getAllCountries', countries.getAllCountries);

router.get('/getAllPlayers', players.getAllPlayers);

router.get('/getPlayerByID', players.getPlayerByID);

router.get('/getAllCasters', players.getAllCasters);

router.get('/getPlayersByCountry', players.getPlayersByCountry);

module.exports = router;
