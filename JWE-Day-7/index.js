// 1. Declare a variable and check if it’s greater than 10 or not using Conditional Branching.

const number = 18;

if (number > 10) {
    console.log("The number is greater than 10.");
} else {
    console.log("The number is not greater than 10.");
}

// Declare two variables, One as number and another as null. Check which value is getting printed when using Nullish Operator.

const num = 5;
const value = null;

console.log(num ?? "Number is null or undefined"); 
console.log(value ?? "Value is null or undefined");   

// Create an object and store info about your favorite Celebrity. 
//     1. Using the “this” keyword, try to get the info. To use this, You’ll need to use the function inside the object

const celebrity = {
    name: "Raj",
    profession: "Actor",
    getInfo: function() {
        return `Name: ${this.name}, Profession: ${this.profession}`;
    }
};

console.log(celebrity.getInfo());


// // // // const director = {
// // // //     name: "S. S. Rajamauli",
// // // //     profession: 'Director',
// // // //     movies: ['Bahubali', 'RRR', 'Makkhi'],
// // // //     getAllMovies: function () {
// // // //         console.log(this.movies)

//Create a variable and pass it into a string using String Interpolation.

const age = 25;
const message = `I am ${age} years old.`;
console.log(message); // Output: I am 25 years old.

//Create a sum function that accepts two parameters and returns the sum value. By mistake, you’ve passed only one argument to the function. Fix it with Default Params of Function.

function sum(a, b = 0) {
    return a + b;
}

console.log(sum(5));      // Output: 5
console.log(sum(5, 10));  // Output: 15

//Use the above Celebrity object and get the name and other properties without using a dot operator like director.name. Use Destructuring.

const { name, profession } = celebrity;
console.log(`Name: ${name}, Profession: ${profession}`);

// Create a function that takes two inputs/arguments - A number and a function. Inside the function, call the parameter function and return the result. In the parameter function, Multiply the number with 2(Check code 

function multiplyBy2(num) {
    return num * 2;
}

function processNumber(number, operation) {
    return operation(number);
}

const inputNumber = 7;
const result = processNumber(inputNumber, multiplyBy2);
console.log(result); // Output: 14
// Shades of Functions
// 1. High Order Function
function sum(a, b, func) {
    const result = a + b

    func(result, log) // log2() => Callback Function

    return result
}

function log(result) {
    console.log("Sum function result is ", result)
}

function log2(result, func) {
    console.log("Sum function 2 result is ", result)
    func(result)
}

sum(7, 8, log2)
