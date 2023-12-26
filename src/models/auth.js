const { connectDatabase } = require('../utils/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function doLogin(username, password){
	const knex = await connectDatabase();

	//Find username first
	let users = await knex('users').where('username', username);

	if(users.length == 0){
		knex.destroy();
		return false;
	}
	let user = users[0];

	if(!bcrypt.compareSync(password, user.password)){
		knex.destroy();
		return false;
	}

	let token = jwt.sign({data: user}, process.env.SECRET, { expiresIn: 60*60*24 });

	knex.destroy();
	return token;

}

async function doSignup(username, password){
	const knex = await connectDatabase();

	let hash = bcrypt.hashSync(password, 8);

	const user = await knex('users').insert({username: username, password: hash});

	knex.destroy();

	return user;
}

async function verifyToken(token) {

	let data = jwt.verify(token, process.env.SECRET );

	return data.data.username;
}


module.exports = {
	doLogin,
	doSignup,
	verifyToken
};
