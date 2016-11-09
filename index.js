'use strict';
module.exports = function (n) {
	var x = Array.isArray(n) ? n : arguments;

	var sum = 0;

	for (var i = 0, length = x.length; i < length; i++) {
		sum += x[i];
	}

	return sum;
};
