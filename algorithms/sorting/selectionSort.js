/*
   Space Complexity: O(1) [We don't use extra memory.]
   Time Complexity: O(n^2)
*/

let numbers = [100, 2, 50, 6, 3, 65, 80, 22, 1, 5];

function selectionSort(arr) {
    let length = arr.length;

    for(let i= 0; i < length; i++) {
        let minVal = arr[i];
        let index = i;
        for (let j= i; j < length;  j++) {
            if (arr[j] < minVal) {
                minVal = arr[j];
                index = j;
            }
       }
        // swap numbers 
        arr[index] = arr[i];
        arr[i] = minVal;
    }

    return arr;
}

let sortedArr = selectionSort(numbers);
console.log(sortedArr);