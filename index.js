export default function mathSum(...arguments_) {
	const numbers = Array.isArray(arguments_[0]) ? arguments_[0] : arguments_;

	let sum = 0;
	for (const number of numbers) {
		sum += number;
	}

	return sum;
}
