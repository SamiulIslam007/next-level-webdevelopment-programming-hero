// Function
// Arrow Function , normal / pure function

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

const result = sum(2, 3);

// console.log(result);

const add = (num1: number, num2: number): number => num1 + num2;

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
  addBalance(value: number) {
    const totalBalance = (this.balance += value);
    return totalBalance;
  },
};

poorUser.addBalance(1000);

const arr: number[] = [1, 2, 3, 4, 5];

const sqrArray = arr.map((elem: number): number => elem * elem);

console.log(sqrArray);
