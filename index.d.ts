type SumFunction = {
	/**
	Sum numbers.

	@param values - The numbers to sum. Also accepts an array of numbers.
	@returns The sum of the numbers.

	@example
	```
	import sum from 'math-sum';

	sum(5, 5);
	//=> 10

	sum([1, 2, 3, 4]);
	//=> 10
	```
	*/
	(...values: readonly number[]): number;
	(values: readonly number[]): number;

	/**
	Sum numbers and return a BigInt.

	Accepts both regular numbers and BigInts.
	Always returns a BigInt regardless of input types.

	@param values - The numbers to sum. Also accepts an array of numbers or BigInts.
	@returns The sum of the numbers as a BigInt.
	@throws {RangeError} If any value is a non-integer number.

	@example
	```
	import sum from 'math-sum';

	sum.bigInt(5, 5);
	//=> 10n

	sum.bigInt([1, 2, 3, 4]);
	//=> 10n

	sum.bigInt(1, 2n, 3);
	//=> 6n

	const largeNumber = 9_007_199_254_740_993n; // Number.MAX_SAFE_INTEGER + 2
	sum.bigInt(largeNumber, largeNumber);
	//=> 18_014_398_509_481_986n
	```
	*/
	bigInt(...values: ReadonlyArray<number | bigint>): bigint;
	bigInt(values: ReadonlyArray<number | bigint>): bigint;
};

declare const sum: SumFunction;

export default sum;
