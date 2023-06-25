function fib(n, sum= 0, prev= 1) {
	if (n <= 1) return sum;
	return fib(n-1, prev + sum, sum);
}

console.log(fib(43));
