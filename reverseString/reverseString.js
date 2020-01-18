const reverseString = function(straightString) {
	let reversedString = "";
	for (let i = straightString.length-1; i > -1 ; i--) {
		reversedString += straightString[i];
	}
	return (reversedString)
	//return straightString.length
}

module.exports = reverseString
