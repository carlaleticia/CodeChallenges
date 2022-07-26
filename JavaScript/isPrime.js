const isPrime = (num) => {
	for (let i = 2; i < num; i++)
		if (num % i === 0) {
			return console.log(`O número ${num} não é primo.`);
		}
	console.log(`O número ${num} é primo`);
	return num > 1;
};
