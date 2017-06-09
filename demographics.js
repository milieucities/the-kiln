const data = require('./data/demo-example.json')
const fs = require('fs')

//this will create an array of objects of {text: tally}

function getDemographic() {
	var frequencies = [];
	var demoObj = {};
  for (var i in data) {
    var answer = data[i].text
    demoObj[answer] = (demoObj[answer] || 0) + 1;
  }
  console.log(demoObj);
}


getDemographic(data)


function writeToJSON(obj) {
    fs.writeFile(`demographic.json`, JSON.stringify(obj, null, "  "), function (err) {
      if (err) {
        console.log(err, `Cannot write output file.`)
      }
      console.log(`Success! Check demographic.json`);
    });
}

