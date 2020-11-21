/*
Array
Returns an array with all of the prime factors of num.
*/

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

function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}

function getNextPrime(num) {
    let returnNum = num + 1;
    while (!(isPrime(returnNum))) {
        returnNum++
    }

    return returnNum;
}

console.log(getPrimeFactors(2));