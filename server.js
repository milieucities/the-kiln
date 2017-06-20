const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080; // default port 8080
const path = require('path');
const json = require('./data/demographics.json')

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));
app.use('/lib',  express.static(__dirname + '/lib'));
app.use('/scripts',  express.static(__dirname + '/scripts'));
app.use('/data',  express.static(__dirname + '/data'));

//json data is passed in as templateVars
app.get("/", (req, res) => {
	var templateVars = {datajson: json}
	res.render('graph-demographics', templateVars)
});

app.listen(PORT)
console.log(`App listening on localhost:${PORT}!`)