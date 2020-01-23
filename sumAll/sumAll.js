const sumAll = function(fromNumber, toNumber) {
	if (!is_Natural(fromNumber)|!is_Natural(toNumber)) 
		return 'ERROR'
	if (toNumber < fromNumber) {
		[toNumber, fromNumber] = [fromNumber, toNumber];
	}
	let finalNumber = 0;

	for (let i = fromNumber; i<= toNumber; i++) {
		finalNumber += i;
	}
	return finalNumber;

}

function is_Natural(n)
      {
	   if (typeof n !== 'number')
	        return false;

	 return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
	    }

module.exports = sumAll
