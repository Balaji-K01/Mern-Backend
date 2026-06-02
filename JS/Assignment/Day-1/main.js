//Task-1

var name="Balaji";

console.log(name);

name="Raji";

console.log(name);

let age=25;
console.log(age);
age=26;
console.log(age);

const city="Pondicherry";
console.log(city);
/* city="Mailam"; */  //cannot reassign value to constant variable
/* console.log(city); */  

//Task-2

var UserId=1121;   //global scope variable

const displayUser=()=>{
    var userRole="Admin"; //function scope variable

    if(true){
        let userRole="User"; //block scope variable
        console.log("Role :",userRole);
        console.log("User ID :",UserId);
    }
    console.log("Role :",userRole);
}
displayUser();

//Task-3
//lexical scope  
const sumOfThreeNumbers=()=>{
    let num1=10;
    const num2=()=>{
        let num2=20;
        const num3=()=>{
            let num3=30;
            return num1+num2+num3;
        }
        return num3();
    }
    return num2();
}

console.log(sumOfThreeNumbers());

//Task-4

const company = "SLA";
const level1 = () => {
    const level2 = () => {
        const level3 = () => {
            console.log(company);
        };

        level3();
    };

    level2();
};

level1();


//Task-5
//when we try to access variable 'a' before its declaration, it results in 'undefined' due to hoisting. 
//1. Memory Creation Phase-Before executing the code, JavaScript scans the program and allocates memory.
//2. Execution Phase-JavaScript executes the code line by line. cvrrent value of a is undefgined
console.log(a);
var a=100;

//Task-6
//TDZ is time betweem variable declarartion and initialization. During this time, the let and const is in a "temporal dead zone" and cannot be accessed.
//Scope Starts->TDZ Begins -> console.log(username) => ReferenceError -> let username = "Balaji" -> TDZ Ends   -> username can be used

console.log(username); //ReferenceError: Cannot access 'username' before initialization
let username="Balaji";

//Task-7

const greet = () => {
  console.log("Hello");
};

greet();

//Global Execution Context
/* When the JavaScript program starts, the Global Execution Context is created.

Memory Phase:

greet = function reference

Execution Phase:

greet();

JavaScript encounters the function call and creates a new execution context for greet(). */

/* Step 2: Function Execution Context (FEC)

When greet() is called:

const greet = () => {
  console.log("Hello");
};

A Function Execution Context is pushed onto the Call Stack.

Inside the function:

console.log("Hello");

Output:

Hello

After the function finishes, its execution context is removed from the Call Stack.

Step 3: Execution Complete

The function execution context is destroyed.

Control returns to the Global Execution Context.

Since no more code remains, the program finishes execution. */

//Task-8

console.log("10" + 5);      // 105
//in this case, the + operator performs string concatenation because one of the operands is a string. The number 5 is converted to a string and concatenated with "10", resulting in "105".
console.log("10" - 5);      // 5
//in this case, the - operator performs numeric subtraction. The string "10" is converted to the number 10, and then 5 is subtracted from it, resulting in 5.
console.log(true + 1);      // 2
//true value is one so one + 1 -2
console.log(false + 10);    // 10
//false value is 0 so 0+10=10
console.log(Number("100")); // 100
//type convention so "100" string coneertys to number
console.log(String(500));   // "500"
// number 500 converts into string using type convention

//task-9

// Primitive Data Types
let name = "Balaji";              // String
let age = 22;                     // Number
let isStudent = true;             // Boolean
let city;                         // Undefined
let data = null;                  // Null
let bigNumber = 12345678901234567890n; // BigInt
let id = Symbol("id");            // Symbol

// Non-Primitive Data Types
let person = {                    // Object
    name: "Balaji",
    age: 22
};

let colors = ["Red", "Green", "Blue"]; // Array

let greet = () => {               // Function
    console.log("Hello");
};

console.log(name);
console.log(age);
console.log(isStudent);
console.log(city);
console.log(data);
console.log(bigNumber);
console.log(id);

console.log(person);
console.log(colors);
greet();


