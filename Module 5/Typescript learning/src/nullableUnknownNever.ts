// nullable types

const getUser = (user: string | null) => {
  if (user) {
    console.log(`From DB: ${user}`);
  } else {
    console.log("From DB: All Users");
  }
};

// getUser(null);
// getUser("Alice");

// unknown type

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountedPrice = input - input * 0.1;
    console.log(`Discounted Price: ${discountedPrice}`);
  } else if (typeof input === "string") {
    const [discountedPrice] = input.split(" ");
    console.log(`Discounted Price: ${Number(discountedPrice)}`);
  } else {
    console.log("Wrong Input");
  }
};

// discountCalculator(100);
// discountCalculator("5000 TK");
// discountCalculator(null);

// void

const error = (msg: string): never => {
  throw new Error(msg);
};

// error("Something went wrong!");
