const data = require(process.argv[2]);
const fs = require('fs');
//this will create an array of objects of {text: tally}
function getDemographic() {
	var demoObj = {};
	var arr = [];
  for (var i in data) {
    var answer = data[i].text
    // if (demoObj.)
    demoObj[answer] = (demoObj[answer] || 0) + 1;
    // demoObj = formatObj(answer, demoObj[answer])
  }
  writeToJSON(toLabeledSequence(demoObj))
}

function toLabeledSequence (m) {
  return Object.keys(m).map(function(k) {
    return {"label" : k, "value" : m[k]};
  });
}

getDemographic(data)

function writeToJSON(obj) {
    fs.writeFile(`./results/demographics/data.json`, JSON.stringify(obj, null, "  "), function (err) {
      if (err) {
        console.log(err, `Cannot write output file.`)
      }
      console.log(`Success! Check ./results/demographics/data.json`);
    });
}
//${process.argv[2].replace("./data/", "")
