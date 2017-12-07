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
  // use 2 arrays like Andrea - noice
	// findDuplicatesALaAndrea: function (arr) {
	// 	newArray = [];
	// 	duplicates = [];
	// 	for (i = 1, i < arr.length; i++) {
	// 		newArray.push(arr[i])
	// 		if (newArray.contains(arr[i+1])){
	// 			duplicates.push(arr[i+1]);
	// 		}
	// 		else newArray.push(arr.[i+1])
	// 	}
	// 	return duplicates;
	// }
	removeAndClone: function (arr, valueToRemove) {

	},

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
