/* Write a Program to Flatten a given n-dimensional array */

function flattenArray(arr) {
	return arr.reduce((acc, val) => {
		return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
	}, []);
}

const flatten = (inputArray) => {
	// Write your code here
	if (!Array.isArray(inputArray)) {
		return null;
	}
	let finalArray = [];
	if (inputArray.length > 0) {
		finalArray = flattenArray(inputArray);
	}
	return finalArray;
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
