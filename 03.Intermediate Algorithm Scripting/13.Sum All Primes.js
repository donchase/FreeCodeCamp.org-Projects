/*
ASSIGNMENT:
Intermediate Algorithm Scripting: Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

TESTS:
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/

function getPrimes(num) {
    let primes = [];
    for (let i = 3; i <= num; i += 2) {
        let primeTest = true;
        for (let elem of primes) {
            //console.log(i, elem, i % elem == 0)
            if (i % elem == 0) {
                primeTest = false;
                break;
            }
        }
        if (primeTest == true) {
            primes.push(i);
        }
    }
    primes.unshift(2);
    return primes;
}

function sumPrimes(num) {
    let sum = 0;
    for (let elem of getPrimes(num)) {
        sum += elem;
    }
    return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));