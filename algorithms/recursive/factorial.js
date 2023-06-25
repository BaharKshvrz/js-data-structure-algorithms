function findFactorialIterative(number) {  // O(n)
  let result = 1;
  if (number === 2) {
   return 2;
   } 

  for (let i= 1; i <= number; i++) {
     result *= i;
  }

  return result;
}

function findFactorialRecursive(number) { // O(n)
   if (number === 2) {
      return 2;
   } 
   return findFactorialRecursive(number-1) * number
}

let fact = findFactorialIterative(3);
let fact2 = findFactorialRecursive(3);

console.log(fact, fact2);