/*
*** Solution uses non-mutating sort ***
ASSIGNMENT:
Functional Programming: Sort an Array Alphabetically using the sort Method
The sort method sorts the elements of an array according to the callback function.

For example:

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']
JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.

Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

TESTS:
--Your code should use the sort method.
--alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"].
--alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) should return ["a", "h", "m", "m", "n", "x"].
--alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) should return ["a", "a", "a", "a", "t", "x"].
*/

"use strict";

function alphabeticalOrder(arr) {
    // Only change code below this line
    let sortArr = arr.slice();
    return sortArr.sort(function(a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
    })

    // Only change code above this line
}
let arr1 = ["a", "d", "c", "a", "z", "g"];
let arr2 = ["x", "h", "a", "m", "n", "m"];
let arr3 = ["a", "a", "a", "a", "x", "t"];
let arr4 = "the quick brown fox jumped over the lazy sleeping dog".split("");

console.log(alphabeticalOrder(arr1)); // ["a", "a", "c", "d", "g", "z"]
console.log(alphabeticalOrder(arr2)); // ["a", "h", "m", "m", "n", "x"]
console.log(alphabeticalOrder(arr3)); // ["a", "a", "a", "a", "t", "x"]
console.log(alphabeticalOrder(arr4));