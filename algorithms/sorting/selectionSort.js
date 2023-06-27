/*
   Space Complexity: O(1) [We don't use extra memory.]
   Time Complexity: O(n^2)
*/

let numbers = [100, 2, 50, 6, 3, 65, 80, 22, 1, 5];

function selectionSort(arr) {
    let length = arr.length;

    // One by one move boundary of unsorted subarray
    for(let i= 0; i < length; i++) {
        let min_idx = i;
      
        // Find the minimum element in unsorted array
        for (let j= i; j < length;  j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
       }
        // Swap the found minimum element with the first element
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

let sortedArr = selectionSort(numbers);
console.log(sortedArr);