//n = 	0 	1 	2 	3 	4 	5 	6 	7 	   8 	   9 	   10 	11 	12 	13 	14 	...
//xn = 	0 	1 	1 	2 	3 	5 	8 	13 	21 	34 	55 	89 	144 	233 	377 	...
// fib(0) = 0
// fib(1) = 1
// fib(2) = 1 
// fib(3) = 1 + 1 
// fib(4) = 1 + 2 
// fib(5) = 2 + 3
// fib(6) = 3 + 5

function fibonacciIterative(number) {  // O(n)
   let fiboArr = [0, 1];

   if (number < 2 ) {
      return fiboArr[number];
   } 

   for(let i = 2; i <= number; i++) {
       fiboArr.push(fiboArr[i-2] + fiboArr[i-1]);
   }

   return fiboArr[number];
}

function fibonacciRecursive(number) { // O(2 ^ n)
   if (number < 2) {
      return number;
   } 

   return fibonacciRecursive(number-1) + fibonacciRecursive(number -2);
}

let fib = fibonacciIterative(43);
let fib2 = fibonacciRecursive(43);

console.log("fibonacciIterative:", fib);
console.log("fibonacciRecursive:", fib2);