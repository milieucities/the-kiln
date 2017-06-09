const data = require('./data/demo-example.json')
const fs = require('fs')

const demoArr = [];
const demoObj = {};

//this will create an array of objects of {text: tally}

function getDemographic() {
	for (var i in data) {
		var answer = data[i].text
		demoObj[answer] = (demoObj[answer] || 0) + 1;
		newObj = {
			label: answer, 
			value: demoObj[answer]
		}
		// console.log(newObj)
		demoArr.push(newObj)
	}
	console.log(demoArr);
}	


getDemographic();

function writeToJSON(obj) {
    fs.writeFile(`demographic.json`, JSON.stringify(obj, null, "  "), function (err) {
      if (err) {
        console.log(err, `Cannot write output file.`)
      }
      console.log(`Success! Check demographic.json`);
    });
}