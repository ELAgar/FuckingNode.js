const express = require('express'),
	  app = express(),
	  bodyParser = require('body-parser'),
	  mysql = require('mysql'),
	  connection = require('express-myconnection'),
	  static_files = require('./routes'),
	  users = require('./routes/users'),
	  bp = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static('public'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

app.use(connection(mysql, {
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'node.js'
}));

app.get('/', static_files.index);
app.get('/about', static_files.about);
app.get('/contacts', static_files.contacts);

app.get('/users', users.all);
app.get('/delete/:id', users.delete);
app.get('/edit/:id', users.edit);
app.post('/edit/:id', users.edit_save);
app.get('/create_user', users.create);
app.post('/create_user', users.create_save);

app.listen(3000);