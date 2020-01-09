const expresss = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const port = 8080;

const app = expresss();
app.use(bodyParser.urlencoded({ extended: true }));

// static files
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
	const listID = '633413991b';
	const APIkey = '114d1765a98d0bc3d606b271490189fa-us4';
	const usX = 'us4';

	// javascript object
	let userData = {
		members: [
			{
				email_address: email,
				status: 'subscribed',
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName
				}
			}
		]
	};

	// convert userData js object into JSON
	const jsonData = JSON.stringify(userData);

	const options = {
		url: `https://${usX}.api.mailchimp.com/3.0/lists/${listID}`,
		method: 'POST',
		headers: {
			Authorization: `crisse ${APIkey}`
		},
		body: ''
	};

	request(options, function(error, response, body) {
		if (error) {
			res.sendFile(__dirname + '/failure.html');
		}
		if (response.statusCode === 200) {
			res.sendFile(__dirname + '/succes.html');
		} else {
			res.sendFile(__dirname + '/failure.html');
		}
	});
});

app.listen(port, function() {
	console.log(`Server started at port: ${port}`);
});
