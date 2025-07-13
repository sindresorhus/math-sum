import test from 'ava';
import sum from './index.js';

test('main', t => {
	t.is(sum(1, 2, 3, 4), 10);
	t.is(sum(1000, 1000), 2000);
	t.is(sum([1, 2, 3, 4]), 10);
});
