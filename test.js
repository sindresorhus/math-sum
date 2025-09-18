import test from 'ava';
import sum from './index.js';

test('main', t => {
	t.is(sum(1, 2, 3, 4), 10);
	t.is(sum(1000, 1000), 2000);
	t.is(sum([1, 2, 3, 4]), 10);
});

test('sum.bigInt with regular numbers', t => {
	t.is(sum.bigInt(1, 2, 3, 4), 10n);
	t.is(sum.bigInt(1000, 1000), 2000n);
	t.is(sum.bigInt([1, 2, 3, 4]), 10n);
});

test('sum.bigInt with BigInts', t => {
	t.is(sum.bigInt(1n, 2n, 3n, 4n), 10n);
	t.is(sum.bigInt(1000n, 1000n), 2000n);
	t.is(sum.bigInt([1n, 2n, 3n, 4n]), 10n);
});

test('sum.bigInt with mixed inputs', t => {
	t.is(sum.bigInt(1, 2n, 3, 4n), 10n);
	t.is(sum.bigInt([1, 2n, 3, 4n]), 10n);
	t.is(sum.bigInt(0, 0n), 0n);
	t.is(sum.bigInt(-5, 10n, -5n), 0n);
});

test('sum.bigInt edge cases', t => {
	t.is(sum.bigInt([]), 0n);
	t.is(sum.bigInt(), 0n);
	t.is(sum.bigInt(5n), 5n);
	t.is(sum.bigInt([42]), 42n);
});

test('sum.bigInt with large numbers', t => {
	const largeNumber = '9007199254740993'; // Number.MAX_SAFE_INTEGER + 2
	t.is(sum.bigInt(largeNumber, largeNumber), 18_014_398_509_481_986n);
	t.is(sum.bigInt(9_007_199_254_740_993n, 9_007_199_254_740_993n), 18_014_398_509_481_986n);
});

test('sum.bigInt error cases', t => {
	t.throws(() => {
		sum.bigInt(3.14, 2);
	}, {
		name: 'RangeError',
	});

	t.throws(() => {
		sum.bigInt('not a number', 2);
	});
});
