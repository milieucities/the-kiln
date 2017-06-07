const data = require('./data/example.json')

const categoriesArr = [];
const mainCategoriesArr = [];
const finalArr = [];
const re = new RegExp('\/([a-z]*)\/');

//this will create an array of objects of {text: tally}

function getCategories() {
	for (var i in data) {
		var categories = data[i].watson.categories;
		for (var category in categories) {
			var category = categories[category].label;
  		categoriesArr[category] = (categoriesArr[category] || 0) + 1;
		}
		
	}
	return firstCategory(categoriesArr);
}

function firstCategory(arr) {
	for (i in arr) {
		var mainCategory = re.exec(i);
		if (mainCategory) {
			mainCategoriesArr.push(mainCategory[1])
		}
	}
	return getMainCategories(mainCategoriesArr);
}	

function getMainCategories(arr) {
	for (var i in arr) {
		var category = arr[i];
  	finalArr[category] = (finalArr[category] || 0) + 1;
	}
	console.log(finalArr)
	return finalArr;
}

getCategories()