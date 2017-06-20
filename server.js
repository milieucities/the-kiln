const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080; // default port 8080
const path = require('path');
const json = require('./data/demographics.json')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/scripts',  express.static(__dirname + '/scripts'));
app.use('/data',  express.static(__dirname + '/data'));

app.get("/", (req, res) => {
	var templateVars = {datajson: json}
	console.log(json)
	res.render('graph-demographics', templateVars)
});

app.listen(PORT)
console.log(`App listening on ${PORT}!`)