/*
ASSIGNMENT:
Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

TESTS:
Passed: convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".
Passed: convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".
Passed: convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".
Passed: convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".
Passed: convertHTML("Schindler's List") should return "Schindler&apos;s List".
Passed: convertHTML("<>") should return "&lt;&gt;".
Passed: convertHTML("abc") should return "abc".
*/

function convertHTML(str) {
    let returnStr = "";
    for (let char of str) {
        switch (char) {
            case "&":
                returnStr += "&amp;";
                break;
            case "<":
                returnStr += "&lt;";
                break;
            case ">":
                returnStr += "&gt;";
                break;
            case '"':
                returnStr += "&quot;";
                break;
            case "'":
                returnStr += "&apos;";
                break;
            default:
                returnStr += char;
                break;
        }
    }
    return returnStr;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));