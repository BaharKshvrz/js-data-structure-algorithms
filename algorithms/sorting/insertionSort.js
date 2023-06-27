/*
   Space Complexity: O(1) [We don't use extra memory.]
   Time Complexity: O(n^2)
   The time complexity of the best case is O(N).
*/

/*
 const array1 = [1, 2, 3];
 console.log(array1.unshift(4, 5));   // Expected output: Array [4, 5, 1, 2, 3]


 splice(start, deleteCount, item1, item2, itemN)
 const months = ['Jan', 'March', 'April', 'June'];
 months.splice(1, 0, 'Feb');  // Inserts at index 1
 // Expected output: Array ["Jan", "Feb", "March", "April", "June"]


 let numbers = [100, 2, 50, 6, 3, 65, 80, 22, 1, 5];
console.log(numbers.splice(1, 1));     // [2]
console.log(numbers.splice(1, 1)[0]);  // 2
*/

let numbers = [100, 2, 50, 6, 3, 65, 80, 22, 1, 5];

function insertionSort(arr) {
    let length = arr.length;
  
    for(let i= 0; i < length; i++) {
           if (arr[i] < arr[0]) {
             // move number to first position and no need to search more
             arr.unshift(arr.splice(i, 1)[0]);
           } else {
             // find where number should go
             for(let j= 0; j < i; j++) {
                 if (arr[i] > arr[j-1] && arr[i] < arr[j]) {
                    arr.splice(j, 0, arr.splice(i, 1)[0])
                    // remove:  arr.splice(i, 1)[0]
                    // add:  arr.splice(j, 0, arr.splice(i, 1)[0])
                 }
              }
          }
    }
    return arr;
}

let sortedArr = insertionSort(numbers);
console.log(sortedArr);