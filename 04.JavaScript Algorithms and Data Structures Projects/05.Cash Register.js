/*
ASSIGNMENT:
JavaScript Algorithms and Data Structures Projects: Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

TESTS:
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
*/
"use strict";

function checkCashRegister(price, cash, cid) {
    let registerTotal = 0;
    let changeDue = cash - price;
    changeDue = +changeDue.toFixed(2);
    for (let arr of cid) {
        registerTotal += arr[1];
    }
    registerTotal = +registerTotal.toFixed(2);
    if (registerTotal < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (registerTotal == changeDue) {
        return { status: "CLOSED", change: cid };
    }
    let change = calculateChange(changeDue, cid);
    return { status: "OPEN", change };
}

function calculateChange(changeDue, cid) {
    let change = [
        ["PENNY", 0],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
    ];

    while (changeDue > 0) {
        switch (true) {
            case changeDue >= 100 && cid[8][1] > 0:
                cid[8][1] -= 100;
                changeDue -= 100;
                change[8][1] += 100;
                break;
            case changeDue >= 20 && cid[7][1] > 0:
                cid[7][1] -= 20;
                changeDue -= 20;
                change[7][1] += 20;
                break;
            case changeDue >= 10 && cid[6][1] > 0:
                cid[6][1] -= 10;
                changeDue -= 10;
                change[6][1] += 10;
                break;
            case changeDue >= 5 && cid[5][1] > 0:
                cid[5][1] -= 5;
                changeDue -= 5;
                change[5][1] += 5;
                break;
            case changeDue >= 1 && cid[4][1] > 0:
                cid[4][1] -= 1;
                changeDue -= 1;
                change[4][1] += 1;
                break;
            case changeDue >= 0.25 && cid[3][1] > 0:
                cid[3][1] -= 0.25;
                changeDue -= 0.25;
                change[3][1] += 0.25;
                break;
            case changeDue >= 0.1 && cid[2][1] > 0:
                cid[2][1] -= 0.1;
                changeDue -= 0.1;
                change[2][1] += 0.1;
                break;
            case changeDue >= 0.05 && cid[1][1] > 0:
                cid[1][1] -= 0.05;
                changeDue -= 0.05;
                change[1][1] += 0.05;
                break;
            case changeDue >= 0.01 && cid[0][1] > 0:
                cid[0][1] -= 0.01;
                changeDue -= 0.01;
                change[0][1] += 0.01;
                break;
        }
    }
    //console.log(cid);
    return change;
}



console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
])); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
])); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])); // {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])); // {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
console.log(); // 
console.log(); // 
console.log(); //