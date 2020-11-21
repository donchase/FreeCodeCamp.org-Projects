/*
ASSIGNMENT:
Intermediate Algorithm Scripting: Spinal Tap Case: Passed
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

TESTS:
Passed: spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
Passed: spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
Passed: spinalCase("TheAndyGriffith_Show") should return "the-andy-griffith-show".
Passed: spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
Passed: spinalCase("AllThe-small Things") should return "all-the-small-things".
*/
"use strict";

function spinalCase(str) {
    let returnStr = str[0].toLowerCase();
    for (let i = 1; i < str.length; i++) {
        switch (true) {
            case /\W/.test(str[i]):
                returnStr += "-";
                break;
            case /[a-z]/.test(str[i]):
                returnStr += str[i];
                break;
            case (/[A-Z]/.test(str[i]) && /\w/.test(str[i - 1])):
                returnStr += "-" + str[i].toLowerCase();
                break;
            case /[A-Z]/.test(str[i]):
                returnStr += str[i].toLowerCase();
                break;
        }
    }

    return returnStr;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("TheAndyGriffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));