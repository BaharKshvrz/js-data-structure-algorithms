// Q: if there is a common items between two arrays return true

const arr1 = ['a', 'b', 'c'];
const arr2 = ['x', 'a', 'd', 'j'];

// Solution No1 
// Time Complexity: O(n)
// Space Complexity: O(n)

// Create a mpa of first arr
// Find the items of next arr in that map
function containCommmonItems(arr1, arr2) {
  // Create a mpa of first arr
   let map = {};
   for (let key of arr1) {
      if (!map[arr1[key]]) {
        map[key] = true;
      }
   }

  // Find the items of next arr in that map
  for (let key of arr2) {
    if (map[key]) return true;
  }

  return false;
}

const result = containCommmonItems(arr1, arr2);
console.log(`Find the common in arrays solution 1:`, result);


// Solution No2 
// Time Complexity: O(n^2)
//Array.includes() has a time complexity o(n)
//some has a time complexity o(n)
function containCommmonItems2(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
const result2 = containCommmonItems2(arr1, arr2);
console.log(`Find the common in arrays solution 2:`, result2);
