"use strict";
// Function
// Arrow Function , normal / pure function
Object.defineProperty(exports, "__esModule", { value: true });
function sum(num1, num2) {
    return num1 + num2;
}
const result = sum(2, 3);
// console.log(result);
const add = (num1, num2) => num1 + num2;
const res = add(5, 10);
// console.log(res);
/** User input neyar jonno simpliest way in nodejs terminal:
 * prompt-sync (Simplest)

Install:

npm install prompt-sync


Use:

const prompt = require("prompt-sync")();

const name = prompt("Name: ");
console.log("Hi " + name);
 */
// object => function => method
const poorUser = {
    name: "samiul",
    balance: 0,
    addBalance(value) {
        const totalBalance = (this.balance += value);
        return totalBalance;
    },
};
poorUser.addBalance(1000);
const arr = [1, 2, 3, 4, 5];
const sqrArray = arr.map((elem) => elem * elem);
console.log(sqrArray);
//# sourceMappingURL=function.js.map