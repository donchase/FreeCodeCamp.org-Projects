/*
ASSIGNMENT:
JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

TESTS:
Passed: rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
Passed: rot13("SERR CVMMN!") should decode to FREE PIZZA!
Passed: rot13("SERR YBIR?") should decode to FREE LOVE?
Passed: rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/
"use strict";

function rot13(str) {
    let returnStr = "";
    for (let ltr of str) {
        returnStr += caesarShift(ltr)
    }
    return returnStr;
}

function caesarShift(char) {
    let charASCII = char.charCodeAt(0);
    switch (true) {
        case (charASCII < 65 || (charASCII >= 91 && charASCII <= 96) || charASCII > 122):
            return String.fromCharCode(charASCII);
        case ((charASCII >= 78 && charASCII <= 90) || (charASCII >= 110 && charASCII <= 122)):
            return String.fromCharCode(charASCII - 13)
    }
    return String.fromCharCode(charASCII + 13);
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
console.log(rot13("42 vf gur nafjre gb Yvsr, Gur Havirefr & Rirelguvat. Jung vf gur dhrfgvba?"));