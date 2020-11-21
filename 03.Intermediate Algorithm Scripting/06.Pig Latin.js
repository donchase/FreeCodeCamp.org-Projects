/*
ASSIGNMENT:
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

TESTS:
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
*/
"use strict";

function translatePigLatin(str) {
    let returnStr = "";
    switch (true) {
        case str.search(/[aeiou]/) < 0:
            returnStr = str + "ay";
            break;
        case str.search(/[aeiou]/) == 0:
            returnStr = str + "way";
            break;
        default:
            returnStr = str.slice(str.search(/[aeiou]/)) + str.slice(0, str.search(/[aeiou]/)) + "ay";
            break;
    }
    return returnStr;
}


console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));