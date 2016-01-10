/*
Gradebook from Names and Scores
I worked on this challenge [with: Patrick Oliphant]
This challenge took me [.75] hours.
You will work with the following two variables.  The first, students, holds the names of four students.
The second, scores, holds groups of test scores.  The relative positions of elements within the two
variables match (i.e., 'Joseph' is the first element in students; his scores are the first value in scores.).
Do not alter the students and scores code.
*/

var students = ["Joseph", "Susan", "William", "Elizabeth"]

var scores = [ [80, 70, 70, 100],
               [85, 80, 90, 90],
               [75, 70, 80, 75],
               [100, 90, 95, 85] ]






// __________________________________________
// Write your code below.

var gradebook = {};

gradebook.Joseph = {};
gradebook.Susan = {};
gradebook.William = {};
gradebook.Elizabeth = {};


gradebook.Joseph.testScores = scores[0];
gradebook.Susan.testScores = scores[1];
gradebook.William.testScores = scores[2];
gradebook.Elizabeth.testScores = scores[3];


gradebook.addScore = function(name, score) {
  gradebook[name].testScores.push(score);
}

gradebook.getAverage = function(name){
  return average(gradebook[name].testScores);
};


function average(array) {
  var sum = array.reduce(function(m, o){
    return m + o;
     });
  return (sum / array.length);
}

// __________________________________________
// Refactored Solution

var gradebook = {}
for (var i = 0; i < scores.length; i++) {
  gradebook[students[i]] = {};
  gradebook[students[i]].testScores = scores[i];
}

gradebook.addScore = function(name, score) {
  gradebook[name].testScores.push(score);
}

gradebook.getAverage = function(name){
  return average(gradebook[name].testScores);
};

function average(array) {
  var sum = array.reduce(function(m, o){
    return m + o;
     });
  return (sum / array.length);
}


// TEST CODE------------------------------
console.log(average([1,2,3]));
console.log(gradebook.getAverage("Joseph"));



// __________________________________________
// Reflect

// -What did you learn about adding functions to objects?
// It's sort of alarmingly easy to do from outside the object. But you don't seem to be able to use object literal notation (something like function gradebook.getAverage(){}).

// -How did you iterate over nested arrays in JavaScript?
// [name] and [i] had to be in brackets, since it wasn't literally the key we were looking up, it just evaluated to it. But we could follow that with .testScores using dot notation because .testScores is a literal.

// -Were there any new methods you were able to incorporate? If so, what were they and how did they work?
// I'd known that JS had its own version of reduce, and it was tricky learning how to write JS's version of the syntax for that kind of sort-of enumeratory function, where you pass in a function to a function and the first function calls the function it received while passing IT arguments. Whew. But I'm really glad to learn that it does have it.







// __________________________________________
// Test Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}



assert(
  (gradebook instanceof Object),
  "The value of gradebook should be an Object.\n",
  "1. "
)

assert(
  (gradebook["Elizabeth"] instanceof Object),
  "gradebook's Elizabeth property should be an object.",
  "2. "
)

assert(
  (gradebook.William.testScores === scores[2]),
  "William's testScores should equal the third element in scores.",
  "3. "
)

assert(
  (gradebook.addScore instanceof Function),
  "The value of gradebook's addScore property should be a Function.",
  "4. "
)

gradebook.addScore("Susan", 80)

assert(
  (gradebook.Susan.testScores.length === 5
   && gradebook.Susan.testScores[4] === 80),
  "Susan's testScores should have a new score of 80 added to the end.",
  "5. "
)

assert(
  (gradebook.getAverage instanceof Function),
  "The value of gradebook's getAverage property should be a Function.",
  "6. "
)

assert(
  (average instanceof Function),
  "The value of average should be a Function.\n",
  "7. "
)
assert(
  average([1, 2, 3]) === 2,
  "average should return the average of the elements in the array argument.\n",
  "8. "
)

assert(
  (gradebook.getAverage("Joseph") === 80),
  "gradebook's getAverage should return 80 if passed 'Joseph'.",
  "9. "
)