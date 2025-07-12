export default function mathSum(...values) {
	values = Array.isArray(values[0]) ? values[0] : values;

	let sum = 0;

	for (const number of numbers) {
		sum += number;
	}

	return sum;
}
