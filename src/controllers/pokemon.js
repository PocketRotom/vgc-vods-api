const Pokemon = require('../models/pokemon.js');

module.exports = {
	getAllPokemon: async (req, res) => {
		try {
			let allPokemon = await Pokemon.getAllPokemon();
			return res.status(200).json({
				success: true,
				count: allPokemon.length,
				data: allPokemon,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	},
	insertPokemon: async (req, res) => {
		try {
			let name = req.query.name;
			let id = req.query.id;
			let pokemon = await Pokemon.insertPokemon(id, name);
			return res.status(200).json({
				success: true,
				data: pokemon,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	},
	insertPokemonByBody: async (req, res) => {
		try {
			let body = req.body;
			let pokemon = await Pokemon.insertPokemonByBody(body);
			return res.status(200).json({
				success: true,
				data: pokemon,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	}
};