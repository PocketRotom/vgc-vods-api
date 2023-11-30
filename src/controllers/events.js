const General = require('../models/events.js');

module.exports = {
	getAllEvents: async (req, res) => {
		try {
			let allEvents = await General.getAllEvents();
			return res.status(200).json({
				success: true,
				count: allEvents.length,
				data: allEvents,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	},
};