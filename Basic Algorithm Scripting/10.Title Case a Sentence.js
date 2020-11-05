/*
ASSIGNMENT:
Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

TESTS:
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
*/

function titleCase(str) {
    let returnStr = "";
    //split str into an array
    let wordArr = str.split(" ");
    let word;
    //iterate 
    for (word of wordArr) {
        //properly capitalize each word
        let cappedWord = word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
        //add word to returnStr
        returnStr += cappedWord + " ";
    }
    returnStr = returnStr.trim();
    return returnStr;
}

console.log(titleCase("I'm a little tea pot")); // "I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt")); // "Short And Stout"
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // "Here Is My Handle Here Is My Spout"