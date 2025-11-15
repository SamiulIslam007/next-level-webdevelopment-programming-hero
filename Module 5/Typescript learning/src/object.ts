const user: {
  firstName: string;
  middleName?: string;
  lastName: string;
  age: number;
  isMarried: boolean;
  spouseName?: string;
  readonly organization: string;
} = {
  firstName: "Samiul",
  lastName: "Islam",
  age: 20,
  isMarried: true,
  organization: "Software Ltd",
};

console.log(user);
