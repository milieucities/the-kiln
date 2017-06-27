const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080; // default port 8080
const path = require('path');
const bodyParser = require('body-parser')
const json = require('./data/demographics.json')
const watson = require('./data/keywords.json')
const treemapdata = require('./data/treeMapDataModel.json')
const cars = require('./data/cars.json')

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));
app.use('/lib',  express.static(__dirname + '/lib'));
app.use('/data',  express.static(__dirname + '/data'));
app.use('/scripts',  express.static(__dirname + '/scripts'));

//json data is passed in as templateVars
app.get("/pie", (req, res) => {
	var templateVars = {datajson: json}
	res.render('pie-chart', templateVars)
});

app.get("/bar", (req, res) => {
	var templateVars = {datajson: {"key": "barchart", "values": json}}
	res.render('bar-graph', templateVars)
});

app.get("/horizontal-bar", (req, res) => {
	var templateVars = {datajson: {"key": "barchart", "values": watson}}
	res.render('horizontal-bar-graph', templateVars)
});

app.get("/sankey", (req, res) => {
	var templateVars = {datajson: {"key": "barchart", "values": watson}}
	res.render('sankey-graph', templateVars)
});

app.get("/tree-map", (req, res) => {
	var templateVars = {datajson: treemapdata}
	res.render('treemap', templateVars)
});

app.get("/tree-map.json", (req, res) => {
	res.json(treemapdata)
});

app.get("/parallel-coordinates", (req, res) => {
	var templateVars = {datajson: json}
	res.render('parallel-coordinates', templateVars)
});

app.get("/cars.json", (req, res) => {
	res.json(cars)
});

app.listen(PORT)
console.log(`App listening on localhost:${PORT}!`)


// var jsonfile = require('jsonfile');

// exports.getStaticJSONFile = function(req, res) {

//   var fileName = req.params.fileName;
//   var file = path.normalize(__dirname + '/' + treeMapDataModel.json);
//   console.log('path: ' + file);

//   jsonfile.readFile(file, function(err, obj) {
//     if(err) {
//       res.json({status: 'error', reason: err.toString()});
//       return;
//     }

//     res.json(obj);
//   });
// };