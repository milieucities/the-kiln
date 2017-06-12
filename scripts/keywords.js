const data = require('../data/example.json')
const fs = require('fs')

//to do -- refactor this code to run synchronously

//format into label: keyword, value: sentiment score

function getKeywords() {
	var keywordArr = [];
  for (var i in data) {
    var text = data[i].watson.keywords
    // console.log(text)
    for (var j in text) {
    	var keyword = text[j].text
    	var sentiment = text[j].sentiment.score
    	keywordObj = {"label" : keyword, "value" : sentiment}
    	keywordArr.push(keywordObj)
    }
  }
  writeToJSON(topFive(keywordArr.sort(compare)))
}

getKeywords(data)

//sort by sentiment score

function compare(a,b) {
  if (a.value < b.value)
    return -1;
  if (a.value > b.value)
    return 1;
  return 0;
}



//if the array is < 10, pop off the top 5 and bottom 5

function topFive(arr) {
	if (arr.length > 10) {
		var top5 = arr.slice(0, 5)
		var bottom5 = top5.push(arr.slice(arr.length - 5, arr.length))
		console.log(top5)
		return top5;
	} else {
		return arr;
	}
}

function writeToJSON(obj) {
    fs.writeFile(`../data/keywords.json`, JSON.stringify(obj, null, "  "), function (err) {
      if (err) {
        console.log(err, `Cannot write output file.`)
      }
      console.log(`Success! Check keywords.json`);
    });
}

