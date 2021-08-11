/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (inputArray, key) => {
	// Write your code here
	if (typeof inputArray !== 'object') {
		return null;
	}
	let objectToReturn = {};
	if (inputArray.length > 0) {				
		objectToReturn = inputArray.reduce((obj, item) => {
			if (key && item.hasOwnProperty(key)) {
				return Object.assign(obj, { [item[key]]: item });
			}
			return obj;
		}, {});
	}
	return objectToReturn;
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
