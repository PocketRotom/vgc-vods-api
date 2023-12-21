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
	createNewEvent: async (req, res) => {
		try {
			let name = req.query.name;
			let start_date = req.query.start_date;
			let end_date = req.query.end_date;
			let format_id = req.query.format_id;
			let location = req.query.location;
			let country_id = req.query.country_id;
			let newEvent = await General.createNewEvent(name, start_date, end_date, format_id, location, country_id);
			return res.status(200).json({
				success: true,
				data: newEvent,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error
			});
		}
	}
};