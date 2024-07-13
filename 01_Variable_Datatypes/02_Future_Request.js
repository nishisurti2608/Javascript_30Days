

console.log("---- ---- Task:1 --- ---- \n ")

// Write a script that declares all datatype and logs both value and datatype 

// Primitive Data types total #7: 

//1. Boolean 


let myBoolean = true

console.log(myBoolean,[typeof(myBoolean)])

//2. String 

let myString = "Noob"

console.log(myString,[typeof(myString)])

//3. Number 

//const myNumber = 0098 // java script will ignore 0 in the begining why ? URL : https://stackoverflow.com/questions/35047982/javascript-0-in-beginning-of-number

let myNumber = 10

console.log(myNumber,[typeof(myNumber)])

let myBigInt = 123456789n


console.log(myBigInt,[typeof(myBigInt)])

let myNull = null

console.log(myNull,[typeof(myNull)])

let myUndefined = undefined

console.log(myUndefined,[typeof(myUndefined)])

let myAnotherUndefined

console.log(myAnotherUndefined,[typeof(myAnotherUndefined)])

let mySymbol = "Symbol"

console.log(myBigInt,[typeof(myBigInt)])

console.log("\n---- ---- Task:2 --- ---- ")

//Task :2 

// behaviour about let and const 

let myName = "Nishi"

myName = "Surti"

console.log(myName)
const myAge = 30

//myAge = 29 // TypeError: Assignment to constant variable.
