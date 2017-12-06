var arrayTasks = {

	concat : function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
	 arr.splice(index, 0, itemToAdd);
	 return arr;
	},

	square: function (arr) {
		newArray = []
		for (let number of arr) {
			newArray.push(number*number)
		}
		return newArray;
	},

	sum: function (arr) {
		total = 0;
		for (let number of arr) {
			total += number;
		}
		return total;
	},

	// findDuplicates: function (arr) {

	// },

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
