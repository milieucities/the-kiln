const data = require('./data/example.json')

const conceptsArr = []

//this will create an array of objects of {text: tally}

function getConcepts() {
	for (var i in data) {
		var concepts = data[i].watson.concepts
		for (var concept in concepts) {
			var concept = concepts[concept].text
  		conceptsArr[concept] = (conceptsArr[concept] || 0) + 1;
		}
		
	}
	return conceptsArr;
}	