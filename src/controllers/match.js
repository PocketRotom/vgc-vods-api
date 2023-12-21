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
	createNewMatch: async (req, res) => {
		try {
			let event_id = req.query.event_id;
			let date = req.query.date;
			let round = req.query.round;
			let age_division = req.query.age_division;
			let id_player1 = req.query.id_player1;
			let id_player2 = req.query.id_player2;
			let id_caster1= req.query.id_caster1;
			let id_caster2 = req.query.id_caster2;
			let pokemon1_p1 = req.query.pokemon1_p1;
			let pokemon2_p1 = req.query.pokemon2_p1;
			let pokemon3_p1 = req.query.pokemon3_p1;
			let pokemon4_p1 = req.query.pokemon4_p1;
			let pokemon5_p1 = req.query.pokemon5_p1;
			let pokemon6_p1 = req.query.pokemon6_p1;
			let pokemon1_p2 = req.query.pokemon1_p2;
			let pokemon2_p2 = req.query.pokemon2_p2;
			let pokemon3_p2 = req.query.pokemon3_p2;
			let pokemon4_p2 = req.query.pokemon4_p2;
			let pokemon5_p2 = req.query.pokemon5_p2;
			let pokemon6_p2 = req.query.pokemon6_p2;
			let lead1_p1_g1 = req.query.lead1_p1_g1;
			let lead2_p1_g1 = req.query.lead2_p1_g1;
			let back1_p1_g1 = req.query.back1_p1_g1;
			let back2_p1_g1 = req.query.back2_p1_g1;
			let lead1_p2_g1 = req.query.lead1_p2_g1;
			let lead2_p2_g1 = req.query.lead2_p2_g1;
			let back1_p2_g1 = req.query.back1_p2_g1;
			let back2_p2_g1 = req.query.back2_p2_g1;
			let lead1_p1_g2 = req.query.lead1_p1_g2;
			let lead2_p1_g2 = req.query.lead2_p1_g2;
			let back1_p1_g2 = req.query.back1_p1_g2;
			let back2_p1_g2 = req.query.back2_p1_g2;
			let lead1_p2_g2 = req.query.lead1_p2_g2;
			let lead2_p2_g2 = req.query.lead2_p2_g2;
			let back1_p2_g2 = req.query.back1_p2_g2;
			let back2_p2_g2 = req.query.back2_p2_g2;
			let lead1_p1_g3 = req.query.lead1_p1_g3;
			let lead2_p1_g3 = req.query.lead2_p1_g3;
			let back1_p1_g3 = req.query.back1_p1_g3;
			let back2_p1_g3 = req.query.back2_p1_g3;
			let lead1_p2_g3 = req.query.lead1_p2_g3;
			let lead2_p2_g3 = req.query.lead2_p2_g3;
			let back1_p2_g3 = req.query.back1_p2_g3;
			let back2_p2_g3 = req.query.back2_p2_g3;
			let video_url = req.query.video_url;

			let newMatch = await Match.createNewMatch(event_id, date, round, age_division, id_player1, id_player2, id_caster1, id_caster2, pokemon1_p1, pokemon2_p1, pokemon3_p1, pokemon4_p1, pokemon5_p1, pokemon6_p1, pokemon1_p2, pokemon2_p2, pokemon3_p2, pokemon4_p2, pokemon5_p2, pokemon6_p2, lead1_p1_g1, lead2_p1_g1, back1_p1_g1, back2_p1_g1, lead1_p2_g1, lead2_p2_g1, back1_p2_g1, back2_p2_g1, lead1_p1_g2, lead2_p1_g2, back1_p1_g2, back2_p1_g2, lead1_p2_g2, lead2_p2_g2, back1_p2_g2, back2_p2_g2, lead1_p1_g3, lead2_p1_g3, back1_p1_g3, back2_p1_g3, lead1_p2_g3, lead2_p2_g3, back1_p2_g3, back2_p2_g3, video_url);
			
			return res.status(200).json({
				success: true,
				data: newMatch,
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	}
};