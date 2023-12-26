const General = require('../models/auth.js');

module.exports = {
	doLogin: async (req, res) => {
		try {
			let body = req.body;
			let username = body.username;
			let password = body.password;
			let allCountries = await General.doLogin(username, password);
			return res.status(200).json({
				success: true,
				data: allCountries,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	},
	doSignup: async (req, res) => {
		try {
			let body = req.body;
			let username = body.username;
			let password = body.password;
			let allCountries = await General.doSignup(username, password);
			return res.status(200).json({
				success: true,
				data: allCountries,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	},
	verifyToken: async (req, res) => {
		try {
			let body = req.body;
			let token = body.token;
			let allCountries = await General.verifyToken(token);
			return res.status(200).json({
				success: true,
				data: allCountries,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	},
};