const { connectDatabase } = require('../utils/database');

async function getAllCountries(){
	const knex = await connectDatabase();

	let currentPick = await knex('countries')
		.select('*');

	knex.destroy();

	return currentPick;
}


module.exports = {
	getAllCountries,
};
