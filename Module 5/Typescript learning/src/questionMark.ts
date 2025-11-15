// ? : ternary operator - decision making
// ?? : nullish coalescing operator - default value assignment
// ? : optional chaining - safe property access

const userAge = 24;

const biyerJonnoEligible = (age: number) => {
  //   if (userAge >= 21) {
  //     console.log("You are eligible");
  //   } else {
  //     console.log("You are not eligible");
  //   }

  const result = age >= 21 ? "you are eligible" : "you are not eligible";
  console.log(result);
};

// biyerJonnoEligible(userAge);

// nulish coalescing operator : null or undefined

const userTheme = null;

const selectedTheme = userTheme ?? "Light Theme";

// console.log(selectedTheme);

const isAuthenticated = false;

const resultWithWithTernary = isAuthenticated
  ? isAuthenticated
  : "you are guest !";

const resultWithNullish = isAuthenticated ?? "you are guest !";

// console.log({ resultWithWithTernary }, { resultWithNullish });

// Optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  //   address: {
  //     city: "Dhaka",
  //     town: "Uttara",
  //     // postalCode: '1234'
  //   },
};

// const postalCode = user.address.postalCode;
const postalCode = user?.address?.postalCode;
console.log(postalCode);
