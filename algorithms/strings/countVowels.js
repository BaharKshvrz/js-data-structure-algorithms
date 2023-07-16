let vowels = ["o", "i", "u", "e", "a"];

// First approach
function getVowelsCount(str) {
    return str.split('').filter(s => vowels.includes(s.toLowerCase())).length;
}
let count = getVowelsCount("Book my our field");
console.log(count);


// Second approach
function getVowelsCount2(sentence) {
  let vowelCount = 0;  
  for (let char of sentence) {
     if (vowels.includes(char.toLowerCase())) {
        vowelCount++;
     }
  }
  return vowelCount;
}
let count2 = getVowelsCount2("Book my our field");
console.log(count2);

// Third approach
function getVowelsCount3(sentence) {
    let vowelCount = 0;  
    for (let char of sentence) {
       if (/[aeiuo]/gi.test(char.toLowerCase())) {
          vowelCount++;
       }
    }
    return vowelCount;
  }
  let count3 = getVowelsCount3("Book my our field");
  console.log(count3);

// Fourth approach
function getVowelsCount4(str) {
    const result =  str.split('').reduce((prev, current) => {
     return (vowels.includes(current.toLowerCase())) ? ++prev : prev;
    }, 0);

    return result;
}
let count4 = getVowelsCount4("Book my our field");
console.log(count4);


// Fifth approach
function getVowelsCount5(str) {
       return str.match(/[aeiuo]/gi) ? str.match(/[aeiuo]/gi).length : 0;
}
let count5 = getVowelsCount5("Book my our field");
console.log(count5);

/*
The g and i modifiers have these meanings:
g = global, match all instances of the pattern in a string, not just one
i = case-insensitive (so, for example, /a/i will match the string "a" or "A"


const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]

*/
  
