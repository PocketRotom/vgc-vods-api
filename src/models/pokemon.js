const { connectDatabase } = require('../utils/database');

async function getAllPokemon(){
	const knex = await connectDatabase();

	let currentPick = await knex('pokemon')
		.select('*').orderBy('idPokemon');

	knex.destroy();

	return currentPick;
}


module.exports = {
	getAllPokemon,
};
