const fs = require('fs');
const http = require('http');


// var fileReaded = fs.readFileSync('text.txt', 'utf8');
// var message = 'Text from message variable!\n' + fileReaded;
// fs.writeFileSync('some_new_file.txt', message);

// fs.readFile('text.txt', 'utf8', function(err, data) { console.log(data); });
// fs.writeFile('some.txt', 'Hi! It is me!', function(err, data) {});
// console.log('Test');


// fs.unlink('some.txt', function () {
// 	console.log('File deleted!');
// });

// fs.mkdirSync('new-one');
// fs.rmdirSync('new-one');

// fs.mkdir('new-one', function () {
// 	fs.writeFile('./new-one/some_new.txt', 'Some text for new file', function () {});
// });

// fs.unlink('./new-one/some_new.txt', function () {
// 	fs.rmdir('new-one', function () {});
// });


// var readStream = fs.createReadStream(__dirname + '/article.txt', 'utf8');
// var writeStream = fs.createWriteStream(__dirname + '/news.txt');

// readStream.on('data', function(chunk) {
// 	console.log(chunk);
// 	writeStream.write(chunk + '\n\n\n\n\n============================================================\n\n\n\n\n');
// });

// readStream.pipe(writeStream);


// var server = http.createServer(function (req, res) {
// 	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
// 	// var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
// 	// readStream.pipe(res);
// 	var obj = {
// 		model: 'Audi',
// 		speed: '294',
// 		wheels: 4
// 	};
// 	res.end(JSON.stringify(obj));
// });
//
// server.listen(3000, function () {
// 	console.log('Listen on port 3000');
// });