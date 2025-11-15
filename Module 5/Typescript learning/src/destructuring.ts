//  object destructuring
const person = {
  name: {
    firstName: {
      first: "John",
      middle: "M.",
    },
    lastName: "Doe",
  },
  age: "samiul",
  city: "New York",
};

const {
  age,
  city,
  name: {
    firstName: { first },
  },
} = person;

console.log(age); // 30
console.log(city); // New York
console.log(first);

const friends = ["Alice", "Bob", "Charlie", "David"];

// const myBestFriend = friends[1];

const [, , myBestFriend] = friends;

console.log(myBestFriend);
