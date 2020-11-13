/*
ASSIGNMENT:
Basic Algorithm Scripting: Slice and Splice: Passed

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

TESTS:
frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
All elements from the first array should be added to the second array in their original order.
The first array should remain the same after the function runs.
The second array should remain the same after the function runs.
*/


function frankenSplice(arr1, arr2, n) {
    let returnArr = [];
    for (element of arr2) {
        returnArr.push(element);
    }
    for (let i = arr1.length - 1; i >= 0; i--) {
        returnArr.splice(n, 0, arr1[i]);
    }
    //console.log(arr2);
    return returnArr;
}


// Doesn't pass the test "All elements from the first array
// should be added to the second array in their original order." 
// Not sure why. Maybe because it means add it to the second array when it's intact.
function frankenSplice2(arr1, arr2, n) {
    let returnArr = [];
    for (element of arr2) {
        returnArr.push(element);
        if (returnArr.length == n) {
            //for (item of arr1) {
            for (let i = 0; i < arr1.length; i++) {
                // returnArr.push(item);
                returnArr.push(arr1[i]);
            }
        }
    }
    //console.log(arr2);
    return returnArr;
}


console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2], ["a", "b"], 1)); // ["a", 1, 2, "b"]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); //["head", "shoulders", "claw", "tentacle", "knees", "toes"]
console.log(frankenSplice2([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]
console.log(frankenSplice2([1, 2], ["a", "b"], 1)); // ["a", 1, 2, "b"]
console.log(frankenSplice2(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); //["head", "shoulders", "claw", "tentacle", "knees", "toes"]