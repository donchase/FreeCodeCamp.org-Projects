/*
ASSIGNMENT:
Basic Algorithm Scripting: Reverse a String: Passed
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
TESTS:
reverseString("hello") should return a string.

reverseString("hello") should become "olleh".

reverseString("Howdy") should become "ydwoH".

reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
*/

function reverseString(str) {
    let returnString = "";
    let char;
    for (char of str) {
        returnString = char + returnString;
    }
    return returnString;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
console.log(reverseString(".edoc tnagele etirw syawlA :rebmemeR"));