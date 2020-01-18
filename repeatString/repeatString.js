const repeatString = function(stringToRepeat, numberOfRepetitions) {
	let repeatedString ="";
	if (numberOfRepetitions < 0) {
		repeatedString = "ERROR";
	} else {
		for (let i = 1; i <= numberOfRepetitions; i++) {
			repeatedString += stringToRepeat;
		}
	}
	return repeatedString;
}

module.exports = repeatString
