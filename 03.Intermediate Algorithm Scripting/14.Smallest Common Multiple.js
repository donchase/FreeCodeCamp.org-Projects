"use strict";

// Get full Array to test (testArr)
function getTestArr(arr) {
    arr.sort(function(a, b) { return a - b });
    let testArr = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        testArr.push(i);
    }
    return testArr;
}

// get prime factors of each number in testArr
function getAllFactors(arr) {
    let factorsArr = [];
    for (let elem of arr) {
        // console.log(elem);
        factorsArr.push(getPrimeFactors(elem));
    }
    return factorsArr;
}

function getNextPrime(num) {
    let returnNum = num + 1;
    while (!(isPrime(returnNum))) {
        returnNum++
    }

    return returnNum;
}

function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}

function getPrimeFactors(num) {
    if (num < 2) {
        return [];
    }
    let returnArr = [];
    let testNum = num;
    let testPrime = 2;
    while (!(isPrime(testNum))) {
        if (testNum % testPrime == 0) {
            returnArr.push(testPrime);
            testNum /= testPrime;
            testPrime = 2;
        } else {
            testPrime = getNextPrime(testPrime);
        }
    }
    returnArr.push(testNum);
    return returnArr;
}

// count the values of an array, returning an object
function countValues(arr) {
    let countingObj = {};
    for (let i = 0; i < arr.length; i++) {
        countingObj[arr[i]] = (countingObj[arr[i]] + 1) || 1;
        //console.log(countingObj);
    }
    return countingObj;
}

// compare the values of 2 objects, returning an object with the higher count of both.
function combineObjects(obj1, obj2) {
    let returnObj = obj1;
    Object.keys(obj2).forEach(key => {
        if (obj1.hasOwnProperty(key)) {
            if (obj1[key] < obj2[key]) {
                obj1[key] = obj2[key];
            }
        } else {
            obj1[key] = obj2[key];
        }
    })

    return returnObj;
}
// turn the object into an array with the correct number of factors
function arrayOfValues(obj) {
    let returnArr = [];
    for (let key in obj) {
        for (let i = 1; i <= obj[key]; i++) {
            returnArr.push(Number(key));
        }
    }
    return returnArr;
}

// reduce the array by multiplying
function productOfArr(arr) {
    return arr.reduce((a, b) => a * b);
}

function smallestCommons(arr) {
    let testArr = getTestArr(arr);
    // console.log("testArr =", testArr);
    let factorsArr = getAllFactors(testArr);
    // console.log("factorsArr =", factorsArr);
    let allFactorsObj = {};
    for (let elem of factorsArr) {
        // console.log("elem =", elem, "allFactorsObj =", allFactorsObj);
        allFactorsObj = combineObjects(allFactorsObj, countValues(elem));
    }
    // console.log(allFactorsObj);
    let commonFactorsArr = arrayOfValues(allFactorsObj);
    // console.log(productOfArr(commonFactorsArr));
    return productOfArr(commonFactorsArr);
}



// console.log(getPrimeFactors(12345));
// console.log(compareObjects({ '2': 2, '3': 2, '5': 2, '7': 6, '10': 1 }, { '2': 10, '3': 5, '5': 2, '7': 1, '11': 1, '13': 1 })); // {'2': 10, '3': 5, '5': 2, '7': 6, '10': 1, '11': 1, '13': 1  }
// console.log(productOfArr(arrayOfValues({ '2': 10, '3': 5, '5': 2, '7': 6, '10': 1, '11': 1, '13': 1 })))

console.log(smallestCommons([1, 5])); // should return 60.
console.log(smallestCommons([5, 1])); // should return 60.
console.log(smallestCommons([2, 10])); // should return 2520.
console.log(smallestCommons([1, 13])); // should return 360360.
console.log(smallestCommons([23, 18])); // should return 6056820.