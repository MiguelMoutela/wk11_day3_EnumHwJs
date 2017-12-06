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

	findDuplicates: function (arr) {
		newArray = arr.sort();
		duplicates = [];
		for (i = 0; i < newArray.length; i++) {
			if (newArray[i] === newArray[i+1]) {
				if (duplicates.includes(newArray[i]) === false)
					duplicates.push(newArray[i]);
			}
		}
		return duplicates;
	},

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
