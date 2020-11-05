/*
ASSIGNMENT:
Basic Algorithm Scripting: Find the Longest Word in a String: Passed
Return the length of the longest word in the provided sentence.

Your response should be a number.
TESTS:
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.

findLongestWordLength("May the force be with you") should return 5.

findLongestWordLength("Google do a barrel roll") should return 6.

findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/

function findLongestWordLength(str) {
    let strArr = str.split(" ");
    let word;
    let longestWord = strArr[0];
    for (word of strArr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWordLength("May the force be with you")); //5
console.log(findLongestWordLength("Google do a barrel roll")); //6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); //8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); //19
console.log(findLongestWordLength("Supercalifragilisticexpialidocious Even though the sound of it is something quite atrocious")); //34