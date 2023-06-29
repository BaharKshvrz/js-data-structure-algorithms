/*
  Time Complexity: O(n)
  These are all linear search
*/


const fruits = ["apple", "orange", "banana", "mango"];

fruits.indexOf("orange");

fruits.findIndex(item => item == "orange");

fruits.find(item => item === "orange");

fruits.includes("orange")