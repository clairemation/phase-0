 // JavaScript Olympics

// I paired [by myself, with:] on this challenge.

// This challenge took me [#] hours.


// Warm Up

// function winCondition (athletes)
// input: array of athlete objects {name: blah, event: blah}
// adds one k-v pair to each athlete object

// FOR each object in athlete array
//  object.win = (athletes.name) + " won the " + (athletes.event)


// Bulk Up

function winCondition(athletes){
    for (var i in athletes) {
      athletes[i].win = athletes[i].name + " won the " + athletes[i].event + " event.";
    }
  }

//driver code

var athletes = [{name: 'Michael Phelps', event: 'swimming'}];
winCondition(athletes);
console.log(athletes[0].win);


// Jumble your words

function stringReverse(randomString) {
  return randomString.split("").reverse().join("")
};

console.log(stringReverse("Hello"));


// 2,4,6,8


function evensOnly(numbers) {
  return numbers.filter(function(num){return (num % 2 == 0);});
}
// }

console.log(evensOnly([12, 5, 8, 130, 7, 125, 44]));



// "We built this city"

function Athlete(name, age, sport, quote) {
  this.name = name;
  this.age = age;
  this.sport = sport;
  this.quote = quote;
}

//driver code
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming", "It's medicinal I swear!");
console.log(michaelPhelps.constructor === Athlete);
console.log(michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.quote);

// Reflection

// -What JavaScript knowledge did you solidify in this challenge?
// It was nice to discover that JavaScript also has split, reverse, and join, and that the syntax is similiar to how it is in Ruby.

// -What are constructor functions?
// A constructor function establishes an object type and acts as an initialize function for new objects of that type.It takes arguments, and sets the object's variables.

// How are constructors different from Ruby classes (in your research)?