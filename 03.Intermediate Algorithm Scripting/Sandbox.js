let val1 = 35873.5553;
let val2 = 413.6;
let val3 = 556.7;
let val4 = 378632.553;

function getOP(alt) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return Math.round(2 * Math.PI * Math.sqrt(((alt + earthRadius) ** 3) / GM));
}

console.log(2 ** 3);

console.log(getOP(val1)); // 86400
console.log(getOP(val2)); // 5557
console.log(getOP(val3)); // 5734
console.log(getOP(val4)); // 2377399