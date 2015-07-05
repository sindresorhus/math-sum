'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.assert(fn(1, 2, 3, 4) === 10);
	t.assert(fn(1000, 1000) === 2000);
	t.assert(fn([1, 2, 3, 4]) === 10);
	t.end();
});
