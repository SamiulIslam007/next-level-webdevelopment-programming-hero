// array , object

let bazarList: string[] = ["eggs", "milk", "sugar"];

//bazarList.push(true); // error

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 45];

mixedArr.push(67);
mixedArr.push("apple");
mixedArr.push("sugar");

// tuple - Ts type

let coOrdinates: [number, number] = [20, 30];

let couple: [string, string] = ["Husband", "Wife"];

let samiulNameAndRoll: [string, number] = ["samiul", 21];

let destination: [string, string, number] = ["Dhaka", "Chattogram", 3];

// Tuple with array
