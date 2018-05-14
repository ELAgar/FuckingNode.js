module.exports.index = function (req, res) {
	req.getConnection(function(err, connection) {
		if (err) throw err;
		connection.query('SELECT * FROM users ORDER BY age DESC', function(err, data) {
			res.render('index', {title: 'Главная страница!', data: data})
		});
	});
};

module.exports.about = function (req, res) {
	res.render('about', {title: 'О нас!'});
};

module.exports.contacts = function (req, res) {
	res.render('contacts', {title: 'Наши контакты!'});
};