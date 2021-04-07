import test from 'ava';
import mathSum from './index.js';

test('main', t => {
	t.is(mathSum(1, 2, 3, 4), 10);
	t.is(mathSum(1000, 1000), 2000);
	t.is(mathSum([1, 2, 3, 4]), 10);
});
