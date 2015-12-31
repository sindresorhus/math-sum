import test from 'ava';
import fn from './';

test(t => {
	t.is(fn(1, 2, 3, 4), 10);
	t.is(fn(1000, 1000), 2000);
	t.is(fn([1, 2, 3, 4]), 10);
});
