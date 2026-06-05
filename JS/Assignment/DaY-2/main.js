//Task-1
//Create an arrow function that accepts a student's first name and last name and returns the full name.

const userName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(userName("Balaji", "K"));

//Task 2
//Create an arrow function that accepts a product price and quantity and returns the total amount.

const totalAmount = (price, quantity) => {
  return price * quantity;
};
console.log(totalAmount(4, 8));

//Task 3
//Create an arrow function that accepts a person's age and returns whether they are eligible for voting.

const isEligibleForVoting = (age) => {
  const isEligible =
    age >= 18 ? "Eligible for voting" : "Not eligible for voting";

  return isEligible;
};

console.log(isEligibleForVoting(23));
console.log(isEligibleForVoting(15));

//Task 4
//Create an arrow function that accepts three numbers and returns the largest number.

const largestNumber = (num1, num2, num3) => {
  return Math.max(num1, num2, num3);
};
console.log(largestNumber(4, 8, 2));
console.log(largestNumber(12, 5, 9));

const largestNumber1 = (num1, num2, num3) => {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  }
  if (num2 >= num1 && num2 >= num3) {
    return num2;
  }
  return num3;
};
console.log(largestNumber1(4, 8, 2));
console.log(largestNumber1(12, 5, 9));

//Task-5
//Create an arrow function that accepts a username. If no username is provided, return "Guest" using a default parameter.

const userDetails = (userName = "Guest") => {
  return userName;
};
console.log(userDetails("Balaji"));
console.log(userDetails());

//Task-6
// Create an arrow function that accepts two numbers and returns:

const mathOperation = (num1, num2) => {
  console.log("Sum ", num1 + num2);
  console.log("Sub ", num1 - num2);
  console.log("multiply ", num1 * num2);
  console.log("division ", num1 / num2);
};
mathOperation(5, 10);

//Task-8
const calculateSalary = (salary) => {
  const hra = salary * 0.2;
  const da = salary * 0.1;
  const totalSalary = salary + hra + da;
  console.log("HRA", hra);
  console.log("da", da);
  console.log("Total salary", totalSalary);
};
calculateSalary(50000);

//Task-9
const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

console.log("Fahrenheit :", celsiusToFahrenheit(25));

//Task-10

const isEvenOrOdd = (num) => {
  const isevenorodd = num % 2 == 0 ? "is even" : "is odd";
  return isevenorodd;
};
console.log(isEvenOrOdd(2));
console.log(isEvenOrOdd(5));

//Task-11

const stringLen = (word) => {
  console.log(word.length);
};
stringLen("balaji");
stringLen("javascript");

//Task-12
const printName = (name, count) => {
  for (let i = 1; i <= count; i++) {
    console.log(name);
  }
};

printName("welcome", 3);

//Task-13

const totalMarks = (...marks) => {
  let Total = marks.reduce((p, c) => {
    return p + c;
  }, 0);
  return Total;
};
console.log(totalMarks(12, 12, 12, 16));

//Task-14

const highestValue = (...values) => {
  return Math.max(...values);
};
console.log(highestValue(1, 2, 3, 4));
console.log(highestValue(12, 42, 63, 94));

//Task-15

const lowestValue = (...values) => {
  return Math.min(...values);
};
console.log(lowestValue(12, 24, 30, 43));
console.log(lowestValue(10, 72, 60, 91));

//Task-16

const calculateBill = (...prices) => {
  return prices.reduce((total, price) => {
    total + price;
  }, 0);
};

console.log(calculateBill(100, 250, 75, 50));
