export default function sum(...values) {
	values = Array.isArray(values[0]) ? values[0] : values;

	let sum = 0;

	for (const value of values) {
		sum += value;
	}

	return sum;
}
