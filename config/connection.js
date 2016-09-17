var mysql = require('mysql');

var source = {
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'	
	},
	livehost: {
		port: 3306,
		host: 'd6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'vnhzm1oaaipbpuef',
		password: 'ayzw4lhggczakoav',
		database: 'mhnmixpemvns73fj'
	}
}

var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected to MySQL Database as id ' + connection.threadId);
});

module.exports = connection;