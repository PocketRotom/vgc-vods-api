const { connectDatabase } = require('../utils/database');

async function getAllEvents(){
	const knex = await connectDatabase();

	let currentPick = await knex('events')
		.select('*');

	knex.destroy();

	return currentPick;
}


module.exports = {
	getAllEvents,
};
