"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  object destructuring
const person = {
    name: {
        firstName: "John",
        lastName: "Doe",
    },
    age: 30,
    city: "New York",
};
const { age, city } = person;
console.log(age); // 30
console.log(city); // New York
//# sourceMappingURL=destructuring.js.map