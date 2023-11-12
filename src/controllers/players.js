const Players = require('../models/players.js');

module.exports = {
	getAllPlayers: async (req, res) => {
		try {
			let allPlayers = await Players.getAllPlayers();
			return res.status(200).json({
				success: true,
				count: allPlayers.length,
				data: allPlayers,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	},
	getPlayerByID: async (req, res) => {
		try {
			let player_id = req.query.id;
			let allPlayers = await Players.getPlayerbyID(player_id);
			return res.status(200).json({
				success: true,
				count: allPlayers.length,
				data: allPlayers,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	},
	getAllCasters: async (req, res) => {
		try {
			let allCasters = await Players.getAllCasters();
			return res.status(200).json({
				success: true,
				count: allCasters.length,
				data: allCasters,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	},
	getPlayersByCountry: async (req, res) => {
		try {
			let country_id = req.query.country_id;
			let playersList = await Players.getPlayerByCountry(country_id);
			return res.status(200).json({
				success: true,
				count: playersList.length,
				data: playersList,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	}
};