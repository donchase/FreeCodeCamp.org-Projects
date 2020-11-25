/*
ASSIGNMENT:
Intermediate Algorithm Scripting: Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

TESTS:
Passed: addTogether(2, 3) should return 5.
Passed: addTogether(23, 30) should return 53.
Passed: addTogether(5)(7) should return 12.
Passed: addTogether("http://bit.ly/IqT6zt") should return undefined.
Passed: addTogether(2, "3") should return undefined.
Passed: addTogether(2)([3]) should return undefined.
*/
"use strict";

function addTogether() {
    for (let i = 0; i < arguments.length; i++) {
        if (checkNum(arguments[i]) == undefined) {
            return undefined;
        }
    }
    if (arguments.length > 1) {
        return arguments[0] + arguments[1];
    }

    return waitingToAdd(arguments[0]);
}

function waitingToAdd(val) {
    if (checkNum(val) == undefined) {
        return undefined;
    }
    return arg0 => checkNum(arg0 + val);
}


function checkNum(val) {
    if (typeof val != 'number') {
        return undefined;
    }
    return val;
}


console.log(addTogether(2, 3));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));