const { connectDatabase } = require('../utils/database');

async function getAllPokemon(){
	const knex = await connectDatabase();

	let currentPick = await knex('pokemon')
		.select('*').orderBy('id');

	knex.destroy();

	return currentPick;
}

async function insertPokemon(id, name){
	const knex = await connectDatabase();

	let pokemon = await knex('pokemon').insert({id: id, name: name});

	knex.destroy();

	return pokemon;
}

async function insertPokemonByBody(body){
	const knex = await connectDatabase();

	let temp = body.split('\n');

	let dataToBeAdded = [];

	temp.forEach(async (element) => {
		let pokemon = element.split('|');
		console.log('NOME: ' + pokemon[0] + ' ID: ' + pokemon[1] + '\n');
		dataToBeAdded.push({id: pokemon[1], name: pokemon[0]});
	});
	
	await knex('pokemon').insert(dataToBeAdded);
	knex.destroy();

	return 'done';
}


module.exports = {
	getAllPokemon,
	insertPokemon,
	insertPokemonByBody
};
