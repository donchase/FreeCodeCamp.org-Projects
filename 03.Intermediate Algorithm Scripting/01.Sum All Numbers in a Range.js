/*
ASSIGNMENT:
Intermediate Algorithm Scripting: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

TESTS:
Passed: sumAll([1, 4]) should return a number.
Passed: sumAll([1, 4]) should return 10.
Passed: sumAll([4, 1]) should return 10.
Passed: sumAll([5, 10]) should return 45.
Passed: sumAll([10, 5]) should return 45.
*/

function sumAll(arr) {
    let sum = 0;
    if (arr[0] <= arr[1]) {
        for (let i = arr[0]; i <= arr[1]; i++) {
            sum += i;
        }
    } else {
        for (let i = arr[1]; i <= arr[0]; i++) {
            sum += i;
        }
    }

    return sum;
}

function sumAll2(arr) {
    //non-mutating sort
    let sortedArr = arr.slice(0).sort(function(a, b) { return a - b });
    let sum = 0;
    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
        sum += i;
    }

    return sum;
}

arr1 = [-1, -4];
arr2 = [-10, 10];

console.log(sumAll2(arr1));
console.log(arr1);
console.log(arr2);
console.log(sumAll2(arr2));
console.log(arr2);
console.log(sumAll2([1, 4]));
console.log(sumAll2([4, 1]));
console.log(sumAll2([5, 10]));
console.log(sumAll2([10, 5]));
console.log(sumAll2([5, 6]));
console.log(sumAll2([6, 5]));
console.log(sumAll2([5, 5]));