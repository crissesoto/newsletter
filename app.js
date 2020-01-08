const expresss = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const port = 3000;

const app = expresss();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req, res) {
	console.log(req.body);

	app.send('file sent!');
});

app.listen(port, function() {
	console.log(`Server started at port: ${port}`);
});
