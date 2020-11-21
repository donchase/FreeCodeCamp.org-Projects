/*
Boolean
Returns true if prime.
Return false if compound.
*/
function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}

testNum = 1;
console.log(isPrime(testNum));