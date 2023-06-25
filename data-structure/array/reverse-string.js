// Create a function that reverse a string
// Input: "HI BAHAR!"
// Output: "HI BAHAR!"

function reverse1(str) {
    if (!str || str.length < 2 || typeof str !== "string") {
        return 'The input value is not correct!'
    }

    let backwardsArr = [];
    let arrLength = str.length -1;
    for (let i = arrLength; i >= 0; i--) {
        backwardsArr.push(str[i]);
    }

    return backwardsArr.join('');
}

function reverse2(str) {
    // str.split(''):   input: "hi" output: ["h", "i"]
    return str.split('').reverse().join('');
}

const reverse3 = (str) => str.split('').reverse().join('');

const reverse4 = (str) => [...str].reverse().join('');


let strData = "HI BAHAR!"
console.log(reverse1(strData));
console.log(reverse2(strData));
console.log(reverse3(strData));
console.log(reverse4(strData));