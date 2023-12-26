const express = require('express');
const router = express.Router();
const countries = require('../controllers/countries.js');
const players = require('../controllers/players.js');
const match = require('../controllers/match.js');
const pokemon = require('../controllers/pokemon.js');
const events = require('../controllers/events.js');
const formats = require('../controllers/formats.js');
const auth = require('../controllers/auth.js');

router.get('/getAllCountries', countries.getAllCountries);

router.get('/getAllPlayers', players.getAllPlayers);

router.get('/getPlayerByID', players.getPlayerByID);

router.get('/getAllCasters', players.getAllCasters);

router.get('/getPlayersByCountry', players.getPlayersByCountry);

router.post('/addNewPlayer', players.addNewPlayer);

router.get('/getMatch', match.getMatch);

router.get('/getAllMatches', match.getAllMatches);

router.post('/addMatch', match.createNewMatch);

router.get('/getAllPokemon', pokemon.getAllPokemon);

router.get('/getAllEvents', events.getAllEvents);

router.post('/createNewEvent', events.createNewEvent);

router.get('/getAllFormats', formats.getAllFormats);

router.post('/addPokemon', pokemon.insertPokemon);

router.post('/addPokemonBody', pokemon.insertPokemonByBody);

router.post('/signup', auth.doSignup);

router.post('/login', auth.doLogin);

router.post('/verifyToken', auth.verifyToken);

module.exports = router;
