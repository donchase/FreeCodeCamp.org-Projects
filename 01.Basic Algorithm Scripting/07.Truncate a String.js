/*
ASSIGNMENT:
Basic Algorithm Scripting: Truncate a String: Passed
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

TESTS:
truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) should return "A...".
truncateString("Absolutely Longer", 2) should return "Ab...".
*/

function truncateString(str, num) {
    if (num < str.length) {
        str = str.slice(0, num) + "...";
    }
    return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // "A-tisket..."
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // "Peter Piper..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // "A-tisket a-tasket A green and yellow basket"
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // "A-tisket a-tasket A green and yellow basket"
console.log(truncateString("A-", 1)); // "A..."
console.log(truncateString("Absolutely Longer", 2)); // "Ab..."