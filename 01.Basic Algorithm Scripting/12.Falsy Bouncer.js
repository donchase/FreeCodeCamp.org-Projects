/*
ASSIGNMENT:
Basic Algorithm Scripting: Falsy Bouncer: Passed

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

TESTS:
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
*/

function bouncer(arr) {
    let returnArr = [];
    let element;
    for (element in arr) {
        //console.log(arr[element]);
        if (arr[element]) {
            returnArr.push(arr[element]);
        }
    }
    return returnArr;
}

console.log(bouncer([7, "ate", "", false, 9])); // [7, "ate", 9]
console.log(bouncer(["a", "b", "c"])); // ["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // []
console.log(bouncer([null, NaN, 1, 2, undefined])); // [1, 2]