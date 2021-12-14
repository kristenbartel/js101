console.log("Hello World");
// storing values and definition 
// 42 will see this number a lot hitch hikers guide to the galaxy

    // const greeting = "Hello World"
    // function helloWorld() {
    //     console.log(greeting); 
    // }

    // helloWorld();

    // let n = 1;

    //         while (n <= 10){ //no counter on a while loop
    //         console.log(n);
    //             n++; //n++ means n+1
    //         }

// DATA TYPES
// everything is js is an object
//strings:
//strung integers 
let aString = "I am a 'string'.";
let aString2 = `I am a "string".`;
let aString3 = 'I am a "string".'
let aString4 = "2"

// console.log(aString, aString2, aString3);

//numbers

    // let aNumber = 42;
    // let pie = 3.14;
    // let notANumber = NaN;

    // console.log(aString4 + aNumber);
    // console.log(Number(aString4) + aNumber);
    // console.log(aString4 + aString4);
    // console.log(aString4 * aNumber);

    // // boolean 1 is true regardless because 0 is false

    // let maxUsers = 100;
    // let areWeFull = maxUsers > 120;

// console.log(areWeFull);

// array and object
//a sequence of values
    // const anArray = ["milk", "butter", "eggs"];
    // const anArray2 = ["1", 2, 3, "a string"];

    // const anObject = {
    //     firstName: "Zaphod",
    //     lastName: "Skywalker",
    //     bestFriend: "yoda",
    // }

    // console.log(anObject.bestFriend);
    // console.log(anObject.firstName);
//dot notation will reach into an object and pull that piece (key:value pair) that you want out. 

const friendlyGreeting = "hello + world";
console.log(friendlyGreeting);

const firstNum = 23;
let secondNum = 19;
const theAnswer = firstNum + secondNum;
console.log(`theAnswer is ${theAnswer}`);

secondNum = 100; //this will not overwrite what is above-- the anAnswer is what it is-- it's already calculated-- single threaded language- only one direction- forward
console.log("theAnswer is still", theAnswer);

// let sum = 5 + 5;
//let subtract = 10 - 6;
let multiply = 5 * 10;
let divide = 100 / 5;
let modulous = 3 % 2;

function add(num1, num2) {
        let result = num1 + num2;
        //console.log(sum);
        return result; //return is what pushed the result outside of teh function-- it is like having an equals sign on a calculator. 
} //this is the calculator
console.log(add(2, 3)); //this is th input into the calculator
//hoisting is when we see the invoke/call above a function block

function subtract(num1, num2,) {
    return num1 - num2; //typically you would want the return inside the scope
}

console.log(subtract(5, 1));
