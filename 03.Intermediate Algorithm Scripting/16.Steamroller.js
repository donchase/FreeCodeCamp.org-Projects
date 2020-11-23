/*
ASSIGNMENT:
Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.

TESTS:
Passed: steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
Passed: steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
Passed: steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
Passed: steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Passed: Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/
"use strict";

function steamrollArray(arr) {
    let returnArr = arr.reduce((returnArr, elem) => returnArr.concat(Array.isArray(elem) ? steamrollArray(elem) : elem), []);
    return returnArr;
}

console.log(steamrollArray([
    [1, [2]],
    [3, [
        [4]
    ]]
]));
console.log(steamrollArray([
    [
        ["a"]
    ],
    [
        ["b"]
    ]
]));
console.log(steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]));
console.log(steamrollArray([1, [],
    [3, [
        [4]
    ]]
]));
console.log(steamrollArray([1, {},
    [3, [
        [4]
    ]]
]));