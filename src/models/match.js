const { connectDatabase } = require('../utils/database');

async function getMatch(id){
	const knex = await connectDatabase();

	let match = await knex('match')
		.join('events', 'events.id', '=', 'match.event_id')
		.join('players as p1', 'p1.id', '=', 'match.id_player1')
		.join('players as p2', 'p2.id', '=', 'match.id_player2')
		.join('players as c1', 'c1.id', '=', 'match.id_caster1')
		.join('players as c2', 'c2.id', '=', 'match.id_caster2')
		.leftJoin('formats', 'formats.id', '=', 'events.format_id')
		.leftJoin('countries as cp1', 'cp1.id', '=', 'p1.country_id')
		.leftJoin('countries as cp2', 'cp2.id', '=', 'p2.country_id')
		.leftJoin('countries as cc1', 'cc1.id', '=', 'c1.country_id')
		.leftJoin('countries as cc2', 'cc2.id', '=', 'c2.country_id')
		.join('pokemon as p1p1', 'p1p1.id', '=', 'match.pokemon1_p1')
		.join('pokemon as p2p1', 'p2p1.id', '=', 'match.pokemon2_p1')
		.join('pokemon as p3p1', 'p3p1.id', '=', 'match.pokemon3_p1')
		.join('pokemon as p4p1', 'p4p1.id', '=', 'match.pokemon4_p1')
		.leftOuterJoin('pokemon as p5p1', 'p5p1.id', '=', 'match.pokemon5_p1')
		.leftOuterJoin('pokemon as p6p1', 'p6p1.id', '=', 'match.pokemon6_p1')
		.join('pokemon as p1p2', 'p1p2.id', '=', 'match.pokemon1_p2')
		.join('pokemon as p2p2', 'p2p2.id', '=', 'match.pokemon2_p2')
		.join('pokemon as p3p2', 'p3p2.id', '=', 'match.pokemon3_p2')
		.join('pokemon as p4p2', 'p4p2.id', '=', 'match.pokemon4_p2')
		.leftOuterJoin('pokemon as p5p2', 'p5p2.id', '=', 'match.pokemon5_p2')
		.leftOuterJoin('pokemon as p6p2', 'p6p2.id', '=', 'match.pokemon6_p2')
		.leftOuterJoin('pokemon as l1_p1_g1', 'l1_p1_g1.id', '=', 'match.lead1_p1_g1')
		.leftOuterJoin('pokemon as l2_p1_g1', 'l2_p1_g1.id', '=', 'match.lead2_p1_g1')
		.leftOuterJoin('pokemon as b1_p1_g1', 'b1_p1_g1.id', '=', 'match.back1_p1_g1')
		.leftOuterJoin('pokemon as b2_p1_g1', 'b2_p1_g1.id', '=', 'match.back2_p1_g1')
		.leftOuterJoin('pokemon as l1_p2_g1', 'l1_p2_g1.id', '=', 'match.lead1_p2_g1')
		.leftOuterJoin('pokemon as l2_p2_g1', 'l2_p2_g1.id', '=', 'match.lead2_p2_g1')
		.leftOuterJoin('pokemon as b1_p2_g1', 'b1_p2_g1.id', '=', 'match.back1_p2_g1')
		.leftOuterJoin('pokemon as b2_p2_g1', 'b2_p2_g1.id', '=', 'match.back2_p2_g1')
		.leftOuterJoin('pokemon as l1_p1_g2', 'l1_p1_g2.id', '=', 'match.lead1_p1_g2')
		.leftOuterJoin('pokemon as l2_p1_g2', 'l2_p1_g2.id', '=', 'match.lead2_p1_g2')
		.leftOuterJoin('pokemon as b1_p1_g2', 'b1_p1_g2.id', '=', 'match.back1_p1_g2')
		.leftOuterJoin('pokemon as b2_p1_g2', 'b2_p1_g2.id', '=', 'match.back2_p1_g2')
		.leftOuterJoin('pokemon as l1_p2_g2', 'l1_p2_g2.id', '=', 'match.lead1_p2_g2')
		.leftOuterJoin('pokemon as l2_p2_g2', 'l2_p2_g2.id', '=', 'match.lead2_p2_g2')
		.leftOuterJoin('pokemon as b1_p2_g2', 'b1_p2_g2.id', '=', 'match.back1_p2_g2')
		.leftOuterJoin('pokemon as b2_p2_g2', 'b2_p2_g2.id', '=', 'match.back2_p2_g2')
		.leftOuterJoin('pokemon as l1_p1_g3', 'l1_p1_g3.id', '=', 'match.lead1_p1_g3')
		.leftOuterJoin('pokemon as l2_p1_g3', 'l2_p1_g3.id', '=', 'match.lead2_p1_g3')
		.leftOuterJoin('pokemon as b1_p1_g3', 'b1_p1_g3.id', '=', 'match.back1_p1_g3')
		.leftOuterJoin('pokemon as b2_p1_g3', 'b2_p1_g3.id', '=', 'match.back2_p1_g3')
		.leftOuterJoin('pokemon as l1_p2_g3', 'l1_p2_g3.id', '=', 'match.lead1_p2_g3')
		.leftOuterJoin('pokemon as l2_p2_g3', 'l2_p2_g3.id', '=', 'match.lead2_p2_g3')
		.leftOuterJoin('pokemon as b1_p2_g3', 'b1_p2_g3.id', '=', 'match.back1_p2_g3')
		.leftOuterJoin('pokemon as b2_p2_g3', 'b2_p2_g3.id', '=', 'match.back2_p2_g3')
		.leftOuterJoin('countries', 'countries.id', '=', 'events.country_id')
		.select('match.id as match_id', 
			'events.name as event_name', 
			'events.id as event_id',
			'events.location as event_location', 
			'countries.name as country_name',
			'countries.alpha_3 as country_code',
			'formats.name as format_name',
			'formats.id as format_id',
			'match.date',
			'match.round as round',
			'match.age_division as age_division',
			'match.video_url as url',
			'p1.player_name as player1_name',
			'p1.id as player1_id',
			'p2.player_name as player2_name',
			'p2.id as player2_id',
			'c1.player_name as caster1_name',
			'c1.id as caster1_id',
			'c2.player_name as caster2_name',
			'c2.id as caster2_id',
			'cp1.name as p1_country_name',
			'cp1.alpha_3 as p1_country_code',
			'cp2.name as p2_country_name',
			'cp2.alpha_3 as p2_country_code',
			'cc1.name as c1_country_name',
			'cc1.alpha_3 as c1_country_code',
			'cc2.name as c2_country_name',
			'cc2.alpha_3 as c2_country_code',
			'p1p1.name as pokemon1_p1_name',
			'p1p1.id as pokemon1_p1_id',
			'p2p1.name as pokemon2_p1_name',
			'p2p1.id as pokemon2_p1_id',
			'p3p1.name as pokemon3_p1_name',
			'p3p1.id as pokemon3_p1_id',
			'p4p1.name as pokemon4_p1_name',
			'p4p1.id as pokemon4_p1_id',
			'p5p1.name as pokemon5_p1_name',
			'p5p1.id as pokemon5_p1_id',
			'p6p1.name as pokemon6_p1_name',
			'p6p1.id as pokemon6_p1_id',
			'p1p2.name as pokemon1_p2_name',
			'p1p2.id as pokemon1_p2_id',
			'p2p2.name as pokemon2_p2_name',
			'p2p2.id as pokemon2_p2_id',
			'p3p2.name as pokemon3_p2_name',
			'p3p2.id as pokemon3_p2_id',
			'p4p2.name as pokemon4_p2_name',
			'p4p2.id as pokemon4_p2_id',
			'p5p2.name as pokemon5_p2_name',
			'p5p2.id as pokemon5_p2_id',
			'p6p2.name as pokemon6_p2_name',
			'p6p2.id as pokemon6_p2_id',
			'l1_p1_g1.name as lead1_p1_g1_name',
			'l1_p1_g1.id as lead1_p1_g1_id',
			'l2_p1_g1.name as lead2_p1_g1_name',
			'l2_p1_g1.id as lead2_p1_g1_id',
			'b1_p1_g1.name as back1_p1_g1_name',
			'b1_p1_g1.id as back1_p1_g1_id',
			'b2_p1_g1.name as back2_p1_g1_name',
			'b2_p1_g1.id as back2_p1_g1_id',
			'l1_p2_g1.name as lead1_p2_g1_name',
			'l1_p2_g1.id as lead1_p2_g1_id',
			'l2_p2_g1.name as lead2_p2_g1_name',
			'l2_p2_g1.id as lead2_p2_g1_id',
			'b1_p2_g1.name as back1_p2_g1_name',
			'b1_p2_g1.id as back1_p2_g1_id',
			'b2_p2_g1.name as back2_p2_g1_name',
			'b2_p2_g1.id as back2_p2_g1_id',
			'l1_p1_g2.name as lead1_p1_g2_name',
			'l1_p1_g2.id as lead1_p1_g2_id',
			'l2_p1_g2.name as lead2_p1_g2_name',
			'l2_p1_g2.id as lead2_p1_g2_id',
			'b1_p1_g2.name as back1_p1_g2_name',
			'b1_p1_g2.id as back1_p1_g2_id',
			'b2_p1_g2.name as back2_p1_g2_name',
			'b2_p1_g2.id as back2_p1_g2_id',
			'l1_p2_g2.name as lead1_p2_g2_name',
			'l1_p2_g2.id as lead1_p2_g2_id',
			'l2_p2_g2.name as lead2_p2_g2_name',
			'l2_p2_g2.id as lead2_p2_g2_id',
			'b1_p2_g2.name as back1_p2_g2_name',
			'b1_p2_g2.id as back1_p2_g2_id',
			'b2_p2_g2.name as back2_p2_g2_name',
			'b2_p2_g2.id as back2_p2_g2_id',
			'l1_p1_g3.name as lead1_p1_g3_name',
			'l1_p1_g3.id as lead1_p1_g3_id',
			'l2_p1_g3.name as lead2_p1_g3_name',
			'l2_p1_g3.id as lead2_p1_g3_id',
			'b1_p1_g3.name as back1_p1_g3_name',
			'b1_p1_g3.id as back1_p1_g3_id',
			'b2_p1_g3.name as back2_p1_g3_name',
			'b2_p1_g3.id as back2_p1_g3_id',
			'l1_p2_g3.name as lead1_p2_g3_name',
			'l1_p2_g3.id as lead1_p2_g3_id',
			'l2_p2_g3.name as lead2_p2_g3_name',
			'l2_p2_g3.id as lead2_p2_g3_id',
			'b1_p2_g3.name as back1_p2_g3_name',
			'b1_p2_g3.id as back1_p2_g3_id',
			'b2_p2_g3.name as back2_p2_g3_name',
			'b2_p2_g3.id as back2_p2_g3_id')
		.where('match.id', id);

	knex.destroy();

	return match;
}

async function getAllMatches(){
	const knex = await connectDatabase();

	let match = await knex('match')
		.join('events', 'events.id', '=', 'match.event_id')
		.join('players as p1', 'p1.id', '=', 'match.id_player1')
		.join('players as p2', 'p2.id', '=', 'match.id_player2')
		.leftJoin('formats', 'formats.id', '=', 'events.format_id')
		.leftJoin('countries as cp1', 'cp1.id', '=', 'p1.country_id')
		.leftJoin('countries as cp2', 'cp2.id', '=', 'p2.country_id')
		.join('pokemon as p1p1', 'p1p1.id', '=', 'match.pokemon1_p1')
		.join('pokemon as p2p1', 'p2p1.id', '=', 'match.pokemon2_p1')
		.join('pokemon as p3p1', 'p3p1.id', '=', 'match.pokemon3_p1')
		.join('pokemon as p4p1', 'p4p1.id', '=', 'match.pokemon4_p1')
		.join('pokemon as p5p1', 'p5p1.id', '=', 'match.pokemon5_p1')
		.join('pokemon as p6p1', 'p6p1.id', '=', 'match.pokemon6_p1')
		.join('pokemon as p1p2', 'p1p2.id', '=', 'match.pokemon1_p2')
		.join('pokemon as p2p2', 'p2p2.id', '=', 'match.pokemon2_p2')
		.join('pokemon as p3p2', 'p3p2.id', '=', 'match.pokemon3_p2')
		.join('pokemon as p4p2', 'p4p2.id', '=', 'match.pokemon4_p2')
		.join('pokemon as p5p2', 'p5p2.id', '=', 'match.pokemon5_p2')
		.join('pokemon as p6p2', 'p6p2.id', '=', 'match.pokemon6_p2')
		.join('countries', 'countries.id', '=', 'events.country_id')
		.select('match.id as match_id', 
			'events.name as event_name', 
			'events.id as event_id',
			'events.location as event_location', 
			'countries.name as country_name',
			'countries.alpha_3 as country_code',
			'formats.name as format_name',
			'formats.id as format_id',
			'match.date',
			'match.round as round',
			'match.age_division as age_division',
			'match.video_url as url',
			'p1.player_name as player1_name',
			'p1.id as player1_id',
			'p2.player_name as player2_name',
			'p2.id as player2_id',
			'cp1.name as p1_country_name',
			'cp1.alpha_3 as p1_country_code',
			'cp2.name as p2_country_name',
			'cp2.alpha_3 as p2_country_code',
			'p1p1.name as pokemon1_p1_name',
			'p1p1.id as pokemon1_p1_id',
			'p2p1.name as pokemon2_p1_name',
			'p2p1.id as pokemon2_p1_id',
			'p3p1.name as pokemon3_p1_name',
			'p3p1.id as pokemon3_p1_id',
			'p4p1.name as pokemon4_p1_name',
			'p4p1.id as pokemon4_p1_id',
			'p5p1.name as pokemon5_p1_name',
			'p5p1.id as pokemon5_p1_id',
			'p6p1.name as pokemon6_p1_name',
			'p6p1.id as pokemon6_p1_id',
			'p1p2.name as pokemon1_p2_name',
			'p1p2.id as pokemon1_p2_id',
			'p2p2.name as pokemon2_p2_name',
			'p2p2.id as pokemon2_p2_id',
			'p3p2.name as pokemon3_p2_name',
			'p3p2.id as pokemon3_p2_id',
			'p4p2.name as pokemon4_p2_name',
			'p4p2.id as pokemon4_p2_id',
			'p5p2.name as pokemon5_p2_name',
			'p5p2.id as pokemon5_p2_id',
			'p6p2.name as pokemon6_p2_name',
			'p6p2.id as pokemon6_p2_id').orderBy('match.id');

	knex.destroy();

	return match;
}

module.exports = {
	getMatch,
	getAllMatches
};
