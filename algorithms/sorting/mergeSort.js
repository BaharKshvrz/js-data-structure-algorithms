/*
   Space Complexity: O(n)
   Time Complexity: O(n^log(n))
*/

let numbers = [100, 2, 50, 6, 3, 65, 80, 22, 1, 5];

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    
    // split array in into right and left
    const middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
   const result = [];
   let leftInx = 0;
   let rightInx = 0;

   if (left && right) {
      while(leftInx < left.length && rightInx < right.length) {
        if (left[leftInx] < right[rightInx]) {
           result.push(left[leftInx]);
           leftInx++;
        } else {
           result.push(right[rightInx]);
           rightInx++;
        }
      }
   }

   return result.concat(left.slice(leftInx)).concat(right.slice(rightInx));
}

let sortedArr = mergeSort(numbers);
console.log(sortedArr);