const { connectDatabase } = require('../utils/database');

async function getAllPlayers(){
	const knex = await connectDatabase();

	let playersList = await knex('players').join('countries', 'countries.id', '=', 'players.country_id').select('players.id', 'players.player_name', 'players.nickname', 'players.is_caster', 'countries.name as country_name', 'countries.alpha_3 as country_code');

	knex.destroy();

	return playersList;
}

async function getPlayerbyID(id){
	const knex = await connectDatabase();

	let player = await knex('players').join('countries', 'countries.id', '=', 'players.country_id').select('players.id', 'players.player_name', 'players.nickname', 'players.is_caster', 'countries.name as country_name', 'countries.alpha_3 as country_code').where('players.id', id);

	knex.destroy();

	return player;

}

async function getAllCasters(){
	const knex = await connectDatabase();

	let caster = await knex('players').join('countries', 'countries.id', '=', 'players.country_id').select('players.id', 'players.player_name', 'players.nickname', 'players.is_caster', 'countries.name as country_name', 'countries.alpha_3 as country_code').where('players.is_caster', 1);

	knex.destroy();

	return caster;
}

async function getPlayerByCountry(country_id){
	const knex = await connectDatabase();

	let player = await knex('players').join('countries', 'countries.id', '=', 'players.country_id').select('players.id', 'players.player_name', 'players.nickname', 'players.is_caster', 'countries.name as country_name', 'countries.alpha_3 as country_code').where('players.country_id', country_id);

	knex.destroy();

	return player;

}


module.exports = {
	getAllPlayers,
	getPlayerbyID,
	getAllCasters,
	getPlayerByCountry
};
