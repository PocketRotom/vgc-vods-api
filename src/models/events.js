const { connectDatabase } = require('../utils/database');

async function getAllEvents(){
	const knex = await connectDatabase();

	let currentPick = await knex('events')
		.select('*');

	knex.destroy();

	return currentPick;
}

async function createNewEvent(name, start_date, end_date, format_id, location, country_id){

	const knex = await connectDatabase();

	let newEvent = await knex('events').insert({
		name: name,
		start_date: start_date,
		end_date: end_date,
		format_id: format_id,
		location: location,
		country_id: country_id
	});

	knex.destroy();

	return newEvent;

}


module.exports = {
	getAllEvents,
	createNewEvent	
};
