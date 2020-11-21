/*
Number
Returns the next prime number after num.
*/

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

console.log(getNextPrime(10));