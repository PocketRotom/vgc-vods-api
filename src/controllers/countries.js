const General = require('../models/countries.js');

module.exports = {
	getAllCountries: async (req, res) => {
		try {
			let allCountries = await General.getAllCountries();
			return res.status(200).json({
				success: true,
				count: allCountries.length,
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