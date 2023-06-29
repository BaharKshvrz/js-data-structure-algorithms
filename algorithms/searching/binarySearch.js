/*
   Time Complexity: O(log N)
   Auxiliary Space: O(1)
*/

const array = [2, 3, 4, 10, 40];

function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while(low <= high) {
    mid = Math.floor((high - low) / 2) + low;

    if (arr[mid] === x) {
        return mid;
    } else if (x > arr[mid]) {
       low = mid + 1;
    } else {
       high = mid - 1;
    }
 }

 return -1
}

const result = binarySearch(array, 2);
result == -1 ? console.log("Element is not present in array")
: console.log ("Element is present at index " + result);