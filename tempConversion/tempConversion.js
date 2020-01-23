const ftoc = function(fahrenheitTemp) {
	return round((fahrenheitTemp - 32) * (5 / 9))
}

const ctof = function(celsisusTemp) {
	return round(celsisusTemp * (9 / 5) + 32 )
}

function round (numberToRound) {
	return Math.round( numberToRound * 10 ) / 10;
}

module.exports = {
  ftoc,
  ctof
}
