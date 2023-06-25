// Google Question
// Given an array: [2, 3, 2, 5, 6, 5]
// It should return 2


// Time Complexity: O(n)
let arr = [ 20, 5, 50, 2, 3, 15, 6, 3 ];
function findFirstRecurring(arr) {
   let hashMap = new Map();
   for (let i= 0; i < arr.length; i++) {
     if (!hashMap.get(arr[i])) {
        hashMap.set(arr[i], 'false');
     } else {
        hashMap.set(arr[i], 'true');
      }
   }
   
   return hashMap;
}

function checkLastDuplication(hashMap) {
   for (let [key, value] of hashMap) {
      if (value == 'true') return key;
   }

   return undefined;
}

let result = findFirstRecurring(arr);
let firstMatched = checkLastDuplication(result)
console.log(firstMatched);

