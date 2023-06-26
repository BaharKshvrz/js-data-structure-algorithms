/*
   Space Complexity: O(1) [We don't use extra memory.]
   Time Complexity: O(n^2)
*/

let numbers = [100, 2, 50, 6, 3, 65, 80, 22, 1, 5];
function bubbleSort(arr) {
    let length = arr.length;

    for(let i= 0; i < length; i++) {
        for (let j= 0; j < length;  j++) {
            if (arr[j] >= arr[j + 1]) {
               // swap numbers 
               let tmp = arr[j];
               arr[j] = arr[j + 1] ;
               arr[j + 1] = tmp;
            }
        }
    }

    return arr;
}

let sortedArr = bubbleSort(numbers);
console.log(sortedArr);