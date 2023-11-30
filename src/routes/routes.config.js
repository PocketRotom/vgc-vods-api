const express = require('express');
const router = express.Router();
const countries = require('../controllers/countries.js');
const players = require('../controllers/players.js');
const match = require('../controllers/match.js');
const pokemon = require('../controllers/pokemon.js');
const events = require('../controllers/events.js');

router.get('/getAllCountries', countries.getAllCountries);

router.get('/getAllPlayers', players.getAllPlayers);

router.get('/getPlayerByID', players.getPlayerByID);

router.get('/getAllCasters', players.getAllCasters);

router.get('/getPlayersByCountry', players.getPlayersByCountry);

router.get('/getMatch', match.getMatch);

router.get('/getAllMatches', match.getAllMatches);

router.get('/getAllPokemon', pokemon.getAllPokemon);

router.get('/getAllEvents', events.getAllEvents);

module.exports = router;
