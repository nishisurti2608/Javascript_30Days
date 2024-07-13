// Activity 1: Variable Declaration

// • Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var myNumber= 1

console.log(`I choose : ${myNumber} as a Number`)

// • Task 2: Declare a variable using let , assign it a string, and log the value to the console.

let myString="Coder"

console.log(`I choose: ${myString} as a String`)

// Activity 2: Constant Declaration
// • Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const myBoolean = true
console.log(`I choose: ${myBoolean} as a Boolean value`)

// Activity 3: Data Types
// • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

const myObject = {
    name: "Nishi",
    level : "Noob"
}

const myArray = ["I", "am" , "just", "a", "noob", "in", "JavaScript"]

console.table([typeof(myNumber), typeof(myString), typeof(myBoolean), typeof(myObject), typeof(myArray)])

// Activity 4: Reassigning Variables

// • Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.

let myLevel = "Noob"
console.log(`Changing value of let variable: ${myLevel} `)

myLevel = "Beginer"

console.log(`I just reassign let variable with value: ${myLevel}`)

//Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.

// let's face some error 

const myConstError = "Error"

//const myConstError = "Yes an Error!" //SyntaxError: Identifier 'myConstError' has already been declared