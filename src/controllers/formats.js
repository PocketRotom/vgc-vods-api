const General = require('../models/formats.js');

module.exports = {
	getAllFormats: async (req, res) => {
		try {
			let allFormats = await General.getAllFormats();
			return res.status(200).json({
				success: true,
				count: allFormats.length,
				data: allFormats,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	},
};