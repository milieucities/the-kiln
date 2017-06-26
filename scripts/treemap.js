const data = require('../data/watson-example.json');
const categoriesArr = [];
const re = new RegExp('\/([A-Za-z ]+)\/');

// function getCategories() {
// 	for (var i in data) {
// 		var categories = data[i].watson.categories;
// 		for (var category in categories) {
// 			var category = categories[category].label;
//   		categoriesArr[category] = (categoriesArr[category] || 0) + 1;
// 		}
		
// 	}
// 	return getParent(categoriesArr);
// }

function getCategories(data) {
	var categoriesArr = []
		for (var i in data) {
			var categories = data[i].watson.categories;
			for (var category in categories) {
				var categoryObj = {name: categories[category].label, value: 1}
				categoriesArr.push(categoryObj)
				// var mainCategory = re.exec(categoryObj.name);
				// if (mainCategory) {
				// 	categoriesArr.push(mainCategory[1])
				// } else {
				// 	categoriesArr.push(categoryObj.name.replace('/', ''))
				// }
			}
		}
	return getParent(categoriesArr)
}

function getParent(arr) {
	var parentArr = [];
	for (var i in arr) {
		name = arr[i].name
		var mainCategory = re.exec(name);
		if (mainCategory) {
			parentArr.push(mainCategory[1])
		} else {
		parentArr.push(name.replace('/', ''))
		}
	}
	return getMainCategories(parentArr)
}

function getMainCategories(arr) {
	var finalArr = [];
	for (var i in arr) {
		var category = arr[i];
		add(category)
	}
	return finalArr;
}

// console.log(getCategories(data))

var arr = [{
    value: 1,
    name: 'fred'
}, {
    value: 1,
    name: 'bill'
}, {
    value: 1,
    name: 'ted'
}];

function add(name) {
    var id = arr.length + 1;
    var found = arr.some(function (el) {
    	console.log(el.value)
      return el.value ++;
    });
    if (!found) {
        arr.push({value: 1, name: name });
    }
}

add('ted');
console.log(arr);
