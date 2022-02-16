function fibonacciSum (n) {
	if (n === 1) return 1;
	if (n === 2) return 2;
	let arr = [],
		sum;
	arr.length = n + 1;
	arr[0] = 0;
	arr[1] = 1;
	sum = arr[0] + arr[1];
	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
		sum = sum + arr[i];
	}
	return sum;
};
let output = fibonacciSum(6);
console.log(output);