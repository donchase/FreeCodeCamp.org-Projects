/*
ASSIGNMENT:
Return the lowest index at which a value (second argument) should
be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because 
it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once 
the array has been sorted it will look like [3,5,20] and 19 is less
than 20 (index 2) and greater than 5 (index 1).

TESTS:
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([40, 60], 50) should return a number.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([3, 10, 5], 3) should return a number.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([5, 3, 20, 3], 5) should return a number.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 20, 10], 19) should return a number.
getIndexToIns([2, 5, 10], 15) should return 3.
getIndexToIns([2, 5, 10], 15) should return a number.
getIndexToIns([], 1) should return 0.
getIndexToIns([], 1) should return a number.
*/

function getIndexToIns(arr, num) {
    // sort arr
    let sortedArr = arr.sort(function(a, b) { return a - b });
    // find 1st number larger than num
    //return index of 1st number larger than num
    //console.log(sortedArr);
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] >= num) {
            return i;
        }
    }
    return sortedArr.length;
}


console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2
console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([3, 10, 5], 3)); // 0
console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2
console.log(getIndexToIns([2, 20, 10], 19)); // 2
console.log(getIndexToIns([2, 5, 10], 15)); // 3
console.log(getIndexToIns([], 1)); // 0