//  type alias

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    district: string;
  };
};

// const user1:
// {
//   id: number;
//   name: {
//     firstName: string;
//     lastName: string;
//   };
//   gender: "male" | "female";
//   contactNo: string;
//   address: {
//     division: string;
//     district: string;
//   };
// } = {
//   id: 1,
//   name: {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   gender: "male",
//   contactNo: "1234567890",
//   address: {
//     division: "Dhaka",
//     district: "Dhaka",
//   },
// };

// const user2: {
//   id: number;
//   name: {
//     firstName: string;
//     lastName: string;
//   };
//   gender: "male" | "female";
//   contactNo: string;
//   address: {
//     division: string;
//     district: string;
//   };
// } = {
//   id: 2,
//   name: {
//     firstName: "Neli",
//     lastName: "Huang",
//   },
//   gender: "male",
//   contactNo: "1234567890",
//   address: {
//     division: "Chattogram",
//     district: "Chattogram",
//   },
// };

const user1: User = {
  id: 1,
  name: {
    firstName: "John",
    lastName: "Doe",
  },
  gender: "male",
  contactNo: "1234567890",
  address: {
    division: "Chattogram",
    district: "Chattogram",
  },
};

console.log(user1);

type Admin = true;

const isAdmin: Admin = true;

type Name = string;

const myName: Name = "Samiul Islam";

// fucntion

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;
