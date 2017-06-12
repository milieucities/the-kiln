const data = require('../data/demo-example.json')
const fs = require('fs')

//this will create an array of objects of {text: tally}
function getDemographic() {
	var demoObj = {};
	var arr = [];
  for (var i in data) {
    var answer = data[i].text
    demoObj[answer] = (demoObj[answer] || 0) + 1;
    console.log(demoObj)
  }
  writeToJSON(toLabeledSequence(demoObj))
}

function toLabeledSequence(m) {
  return Object.keys(m).map(function(k) {
    return {"label" : k, "value" : m[k]};
  });
}

getDemographic(data)

function writeToJSON(obj) {
    fs.writeFile(`../data/demographics.json`, JSON.stringify(obj, null, "  "), function (err) {
      if (err) {
        console.log(err, `Cannot write output file.`)
      }
      console.log(`Success! Check demographic.json`);
    });
}

