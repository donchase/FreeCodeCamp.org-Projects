/*
ASSIGNMENT:
Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

TESTS:
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let firstLett = alphabet.search(str[0]);
    for (let i = 0; i < str.length; i++) {
        if (alphabet[firstLett + i] != str[i]) {
            return alphabet[firstLett + i];
        }
    }
    return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));