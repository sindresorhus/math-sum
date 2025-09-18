# math-sum

> Sum numbers

## Install

```sh
npm install math-sum
```

## Usage

```js
import sum from 'math-sum';

sum(5, 5);
//=> 10

sum([1, 2, 3, 4]);
//=> 10
```

### BigInt

```js
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

The `sum.bigInt()` method accepts both regular numbers and BigInts and always returns a BigInt. Regular numbers are converted to BigInts automatically. This is useful when you need to sum numbers that exceed JavaScript's safe integer range.

> [!NOTE]
> The method throws a `RangeError` if any value is a non-integer number (e.g., `3.14`).

## Related

- [math-average](https://github.com/sindresorhus/math-average) - Get the average of numbers
- [math-clamp](https://github.com/sindresorhus/math-clamp) - Clamp a number
