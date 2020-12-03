/*
I wanted to expand in the Caesar's Cipher assignment by allowing for an optional argument that allows 
a designated amount of shift.
*/
"use strict";

function decipher(str, shift) {
    let shiftAmt = 13;
    if (arguments.length > 1) {
        shiftAmt = shift;
        while (shiftAmt > 26) {
            shiftAmt -= 26;
        }
        while (shiftAmt < 0) {
            shiftAmt += 26
        }
    }
    let returnStr = "";
    for (let ltr of str) {
        returnStr += betterShift(ltr, shiftAmt)
    }
    return returnStr;
}

function betterShift(char, shift) {
    let charASCII = char.charCodeAt(0);

    /*
    switch (true) {
        case (charASCII < 65 || (charASCII >= 91 && charASCII <= 96) || charASCII > 122):
            return String.fromCharCode(charASCII);
        case ((charASCII >= 78 && charASCII <= 90) || (charASCII >= 110 && charASCII <= 122)):
            charASCII -= 26;
    }
    */
    if (charASCII < 65 || (charASCII >= 91 && charASCII <= 96) || charASCII > 122) {
        return String.fromCharCode(charASCII);
    }
    if (charASCII + shift < 65 || (charASCII + shift >= 91 && charASCII <= 96) || charASCII > 122)

        return String.fromCharCode(charASCII + shift);
}

console.log(decipher("I;HH F8GH FDP9", -3));
console.log(decipher("SERR CVMMN!", 13));
console.log(decipher("SERR YBIR?", 13));
console.log(decipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.", 13));
console.log(decipher("42 vf gur nafjre gb Yvsr, Gur Havirefr & Rirelguvat. Jung vf gur dhrfgvba?", 13));