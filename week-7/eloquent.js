// Eloquent JavaScript

// Run this file in your terminal using `node my_solution.js`. Make sure it works before moving on!

// Program Structure
// Write your own variable and do something to it.

var animal = "cat";
animal += " on a hot tin roof";
console.log(animal);

// Complete one of the exercises: Looping a Triangle, FizzBuzz, or Chess Board

// Looping a Triangle

for (var str = "#"; str.length <= 7; str += "#")
  console.log(str);


//FizzBuzz

for (var i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    if (i % 3 == 0)
      console.log("FizzBuzz");
    else
      console.log("Buzz");
  }
  else if (i % 3 == 0)
    console.log("Fizz");
  else
    console.log(i);
}

//Favorite Food

prompt("Enter your favorite food.");
alert("Hey! That's my favorite food too!");


// Functions

// Complete the `minimum` exercise.

function min(num1, num2) {
  if (num1 < num2)
    return num1;
  return num2;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Data Structures: Objects and Arrays
// Create an object called "me" that stores your name, age, 3 favorite foods, and a quirk below.

var me = {
  name: "Claire",
  age: 33,
  faveFoods: ["cake", "ramen", "korma"],
  quirk: "very short"
};