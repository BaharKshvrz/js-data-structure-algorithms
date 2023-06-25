// Merge tow sorted arrays
// Put the pointer at each array
// in while loop compare two items and added it to result

let array1 = [4, 10, 25, 65];
let array2 = [1, 3, 12, 20, 40, 85];

function mergerdArrays(arr1, arr2) {
    const mergedArray = [];

    // Check the exceptions
    if (!arr1.length) {
        return arr2;
    }
    if (!arr2.length) {
        return arr1;
    }

     let arr1Item = arr1[0];
     let arr2Item = arr2[0];
     let i = j = 0;

     while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            i++;
            arr1Item = arr1[i];
        } else {
            mergedArray.push(arr2Item);
            j++;
            arr2Item = arr2[j];
        }
     }

     return mergedArray;
}

const result = mergerdArrays(array1, array2);
console.log(result);