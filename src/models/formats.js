const { connectDatabase } = require('../utils/database');

async function getAllFormats(){
	const knex = await connectDatabase();

	let currentPick = await knex('formats')
		.select('*');

	knex.destroy();

	return currentPick;
}


module.exports = {
	getAllFormats,
};
