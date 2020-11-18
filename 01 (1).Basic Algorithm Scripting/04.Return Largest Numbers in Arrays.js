/*
ASSIGNMENT:
Basic Algorithm Scripting: Return Largest Numbers in Arrays: Passed
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
TESTS:
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].
*/
function largestOfFour(arr) {
    let largestArr = [];
    /*
    let testArr;
    for (testArr of arr) {
        let largestNum = testArr[0];
        let num;
        for (num of testArr) {
            if (num > largestNum) {
                largestNum = num;
            }
        }
        largestArr.push(largestNum);
    }
    */


    for (let i = 0; i < arr.length; i++) {
        let testArr = arr[i];
        //console.log("testArr: " + testArr);
        let largestNum = testArr[0];
        //console.log("largestNum:" + largestNum);

        for (let j = 0; j < testArr.length; j++) {
            let num = testArr[j];
            //console.log("num: " + num);
            if (num > largestNum) {
                largestNum = num;
                //console.log("New largestNum: " + largestNum);
            }
        }
        largestArr.push(largestNum);
        //console.log("largestArr: " + largestArr);
    }
    return largestArr;
}

largestOfFour([
        [13, 27, 18, 26],
        [4, 5, 1, 3],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
    ])
    /*
    console.log(largestOfFour([
    [13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]
    ])); // should return [27, 5, 39, 1001]
    console.log(largestOfFour([
    [4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]
    ])); // should return [9, 35, 97, 1000000]
    console.log(largestOfFour([
    [17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]
    ])); // should return [25, 48, 21, -3]
    */