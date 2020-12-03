/*
ASSIGNMENT:
JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

TESTS:
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(400) should return "CD"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/
"use strict";

function convertToRoman(num) {
    let numRom = "";
    let numAr = num;
    while (numAr > 0) {
        switch (true) {
            case numAr === 2020:
                return "NOOOOOO";
            case numAr >= 1000:
                numRom += "M";
                numAr -= 1000;
                break;
            case numAr >= 900:
                numRom += "CM";
                numAr -= 900;
                break;
            case numAr >= 500:
                numRom += "D";
                numAr -= 500;
                break;
            case numAr >= 400:
                numRom += "CD";
                numAr -= 400;
                break;

            case numAr >= 100:
                numRom += "C";
                numAr -= 100;
                break;
            case numAr >= 90:
                numRom += "XC";
                numAr -= 90;
                break;
            case numAr >= 50:
                numRom += "L";
                numAr -= 50;
                break;
            case numAr >= 40:
                numRom += "XL";
                numAr -= 40;
                break;

            case numAr >= 10:
                numRom += "X";
                numAr -= 10;
                break;
            case numAr >= 9:
                numRom += "IX";
                numAr -= 9;
                break;
            case numAr >= 5:
                numRom += "V";
                numAr -= 5;
                break;
            case numAr >= 4:
                numRom += "IV";
                numAr -= 4;
                break;
            case numAr >= 1:
                numRom += "I";
                numAr -= 1;
                break;
        }
    }

    return numRom;
}


console.log(convertToRoman(2)); // 
console.log(convertToRoman(3)); // 
console.log(convertToRoman(4)); // 
console.log(convertToRoman(5)); // 
console.log(convertToRoman(9)); // 
console.log(convertToRoman(12)); // 
console.log(convertToRoman(16)); // 
console.log(convertToRoman(29)); // 
console.log(convertToRoman(44)); // 
console.log(convertToRoman(45)); // 
console.log(convertToRoman(68)); // 
console.log(convertToRoman(83)); // 
console.log(convertToRoman(97)); // 
console.log(convertToRoman(99)); // 
console.log(convertToRoman(400)); // 
console.log(convertToRoman(500)); // 
console.log(convertToRoman(501)); // 
console.log(convertToRoman(649)); // 
console.log(convertToRoman(798)); // 
console.log(convertToRoman(891)); // 
console.log(convertToRoman(1000)); // 
console.log(convertToRoman(1004)); // 
console.log(convertToRoman(1006)); // 
console.log(convertToRoman(1023)); // 
console.log(convertToRoman(2014)); // 
console.log(convertToRoman(3999)); // 
console.log(convertToRoman(2020));