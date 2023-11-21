const Match = require('../models/match.js');

module.exports = {
	getMatch: async (req, res) => {
		try {
			let id = req.query.id;
			let match = await Match.getMatch(id);
			return res.status(200).json({
				success: true,
				count: match.length,
				data: match,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	},
	getAllMatches: async (req, res) => {
		try {
			let allMatches = await Match.getAllMatches();
			return res.status(200).json({
				success: true,
				count: allMatches.length,
				data: allMatches,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	},
};