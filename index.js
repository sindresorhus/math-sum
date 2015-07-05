'use strict';
module.exports = function (x) {
	x = Array.isArray(x) ? x : arguments;

	var sum = 0;

	for (var i = 0; i < x.length; i++) {
		sum += x[i];
	}

	return sum;
};
