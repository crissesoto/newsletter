const expresss = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const port = 3000;

const app = expresss();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expresss.static('public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req, res) {
	console.log(req.body);
	const data = req.body;
	const firstName = data.firstName;
	const lastName = data.lastName;
	const email = data.email;

	res.send(`Hello ${firstName} ${lastName}, your are registrated with ${email}}`);
});

app.listen(port, function() {
	console.log(`Server started at port: ${port}`);
});
