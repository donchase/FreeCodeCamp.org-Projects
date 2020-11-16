/*
ASSIGNMENT:
Basic Algorithm Scripting: Confirm the Ending: Passed
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

TESTS:
confirmEnding("Bastian", "n") should return true.

confirmEnding("Congratulation", "on") should return true.

confirmEnding("Connor", "n") should return false.

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.

confirmEnding("He has to give me a new name", "name") should return true.

confirmEnding("Open sesame", "same") should return true.

confirmEnding("Open sesame", "sage") should return false.

confirmEnding("Open sesame", "game") should return false.

confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.

confirmEnding("Abstraction", "action") should return true.

Your code should not use the built-in method .endsWith() to solve the challenge.
*/

function confirmEnding(str, target) {
    if (str.slice(-1 * target.length) == target) {
        return true;
    }
    return false;
}

console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Congratulation", "on")); // true
console.log(confirmEnding("Connor", "n")); // false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // false
console.log(confirmEnding("He has to give me a new name", "name")); // true
console.log(confirmEnding("Open sesame", "same")); // true
console.log(confirmEnding("Open sesame", "sage")); // false
console.log(confirmEnding("Open sesame", "game")); // false
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); // false
console.log(confirmEnding("Abstraction", "action")); // true