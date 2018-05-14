// Считывание
module.exports.all = function(req, res) {
	req.getConnection(function (err, connection) {
		if (err) throw err;
		connection.query('SELECT * FROM users', function (err, data) {
			if (err) throw err;
			res.render('users', {title: 'Наши ользователи!', data: data});
		});
	});
};

// Создание
module.exports.create = function(req, res) {
	req.getConnection(function(err, connection) {
		if (err) throw err;
		connection.query('SELECT * FROM users', function(err, data) {
			if (err) throw err;
			res.render('create_user', {title: 'Создание пользователя'});
		});
	});
}
module.exports.create_save = function(req, res) {
	let input = req.body;

	req.getConnection(function(err, connection) {
		let data = {
			name: input.name,
			surname: input.surname,
			age: input.age,
			location: input.location,
			height: input.height,
			weight: input.weight
		};
		if (err) throw err;
		connection.query('INSERT INTO users SET ? ', [data], function(err, data) {
			if (err) throw err;
			res.redirect('/users');
		});
	});
}

// Изменение
module.exports.edit = function(req, res) {
	let id = req.params.id;

	req.getConnection(function(err, connection) {
		if (err) throw err;
		connection.query('SELECT * FROM users WHERE id = ? ', [id], function(err, data) {
			if (err) throw err;
			res.render('edit', {title: 'Настройка пользователя №' + id, data: data});
		});
	});
};
module.exports.edit_save = function(req, res) {
	let id = req.params.id;
	let input = req.body;

	req.getConnection(function(err, connection) {
		if (err) throw err;
		let data = {
			name: input.name,
			surname: input.surname,
			age: input.age,
			location: input.location,
			height: input.height,
			weight: input.weight
		};
		connection.query('UPDATE users SET ? WHERE id = ? ', [data, id], function(err, data) {
			if (err) throw err;
			res.redirect('/users');
		});
	});
};

// Удаление
module.exports.delete = function(req, res) {
	let id = req.params.id;

	req.getConnection(function(err, connection) {
		if (err) throw err;
		connection.query('DELETE FROM users WHERE id = ? ', [id], function(err, data) {
			if (err) throw err;
			res.redirect('/users');
		});
	});
};