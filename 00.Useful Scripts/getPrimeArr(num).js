/*
Array
Returns an array of prime numbers up to num (inclusive);
*/
function getPrimeArr(num) {
    let returnArr = [2];
    while (num >= getNextPrime(returnArr[returnArr.length - 1])) {
        returnArr.push(getNextPrime(returnArr[returnArr.length - 1]));
    }
    return returnArr;
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

console.log(getPrimeArr(11));