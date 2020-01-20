const removeFromArray = function(originalArray, ...elementsToDelete) {
	var filteredArray = originalArray.filter(function(originalArrayElement) {
		return elementsToDelete.includes(originalArrayElement) ? null:originalArrayElement 
		});
	return (filteredArray) ;
}

module.exports = removeFromArray
