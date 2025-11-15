// union

type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

getDashboard("admin");

// intersection - &

type Employee = {
  id: string;
  name: string;
  phoneNumber: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const empManager: EmployeeManager = {
  id: "123",
  name: "John Doe",
  phoneNumber: "123-456-7890",
  designation: "Project Manager",
  teamSize: 10,
};

console.log(empManager);
