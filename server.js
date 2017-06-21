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


historicalBarChart = [
    {
        key: "Cumulative Return",
        values: [
            {
                "label" : "A" ,
                "value" : 29.765957771107
            } ,
            {
                "label" : "B" ,
                "value" : 0
            } ,
            {
                "label" : "C" ,
                "value" : 32.807804682612
            } ,
            {
                "label" : "D" ,
                "value" : 196.45946739256
            } ,
            {
                "label" : "E" ,
                "value" : 0.19434030906893
            } ,
            {
                "label" : "F" ,
                "value" : 98.079782601442
            } ,
            {
                "label" : "G" ,
                "value" : 13.925743130903
            } ,
            {
                "label" : "H" ,
                "value" : 5.1387322875705
            }
        ]
    }
];

//json data is passed in as templateVars
app.get("/", (req, res) => {
	var templateVars = {datajson: json}
	res.render('pie-chart', templateVars)
});

app.get("/bar", (req, res) => {
	console.log(json, JSON.stringify(historicalBarChart))
	var templateVars = {datajson: {"key": "barchart", "values": json}}
	res.render('bar-graph', templateVars)
});

app.listen(PORT)
console.log(`App listening on localhost:${PORT}!`)

// [{"key":"Cumulative Return","values":[{"label":"A","value":29.765957771107},{"label":"B","value":0},{"label":"C","value":32.807804682612},{"label":"D","value":196.45946739256},{"label":"E","value":0.19434030906893},{"label":"F","value":98.079782601442},{"label":"G","value":13.925743130903},{"label":"H","value":5.1387322875705}]}]'

