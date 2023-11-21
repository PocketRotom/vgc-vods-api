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
};