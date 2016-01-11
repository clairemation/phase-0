// Tally Votes in JavaScript Pairing Challenge.

// I worked on this challenge with: Lindsey Ullman
// This challenge took me [2] hours.

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}

// Tally the votes in voteCount.
var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

/* The name of each student receiving a vote for an office should become a property
of the respective office in voteCount.  After Alex's votes have been tallied,
voteCount would be ...
  var voteCount = {
    president: {
      Bob: 1,
      David: 3,
      Rose: 17
      },
    vicePresident: { Devin: 1 },
    secretary: { Gail: 1 },
    treasurer: { Kerry: 1 }
  }
*/


/* Once the votes have been tallied, assign each officer position the name of the
student who received the most votes. */
var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}

// Pseudocode

// FOR each element in votes
//  FOR each element in person
//    voteCount.key[personsName] += 1
//
//
// Determine WInners
// FOR each office in voteCount object
//   Set previous maximum count to 0
//   FOR each person the office
//     IF value is greater than previous maximum
//       Assign the value to the maximum
//       Assign the person's name to officers object
//     END IF
// __________________________________________
// Initial Solution


// for (var i in votes) {
//   for (var j in votes[i]) {
//     var name = votes[i][j];
//     var office = j;
//     if (voteCount[office][name]) {
//       voteCount[office][name] += 1;
//     }
//     else {
//       voteCount[office][name] = 1;
//     }
//   }
// }

// // console.log(voteCount);

// for (var office in voteCount) {
//   var highestVote = 0;
//   for (var candidate in voteCount[office]) {
//     if (voteCount[office][candidate] > highestVote) {
//       highestVote = voteCount[office][candidate];
//       officers[office] = candidate;
//     }
//   }
// }

// console.log(officers);
// __________________________________________
// Refactored Solution

for (var voter in votes) {
  for (var office in votes[voter]) {
    var name = votes[voter][office];
    if (voteCount[office][name]) {
      voteCount[office][name] += 1;
    }
    else {
      voteCount[office][name] = 1;
    }
  }
}

// console.log(voteCount);

for (var office in voteCount) {
  var highestVote = 0;
  for (var candidate in voteCount[office]) {
    if (voteCount[office][candidate] > highestVote) {
      highestVote = voteCount[office][candidate];
      officers[office] = candidate;
    }
  }
}


// __________________________________________
// Reflection

-What did you learn about iterating over nested objects in JavaScript?
It finally made sense to me, at least, why "for (i in whatever)" works the way it does, passing the index instead of the item into i. It makes sense when it's used on an associative array like here, where i is a key. Then you're basically saying "for each key." In fact it would make more sense if examples were phrased like that, "for key in object" instead of i. It's also helpful because then you have the key too if you need to refer to its string value for something, like we did here.

-Were you able to find useful methods to help you with this?
We found at a lot of array methods but nothing helpful for objects. And we couldn't get entries() to work to convert the objects into arrays for that purpose. And the idea we were tossing around about entries() and reduce() would've been less efficient than the simple for loops anyway.

-What concepts were solidified in the process of working through this challenge?
"For i in" loops make a lot more sense to me now.



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
  (voteCount.president["Bob"] === 3),
  "Bob should receive three votes for President.",
  "1. "
)

assert(
  (voteCount.vicePresident["Bob"] === 2),
  "Bob should receive two votes for Vice President.",
  "2. "
)

assert(
  (voteCount.secretary["Bob"] === 2),
  "Bob should receive two votes for Secretary.",
  "3. "
)

assert(
  (voteCount.treasurer["Bob"] === 4),
  "Bob should receive four votes for Treasurer.",
  "4. "
)

assert(
  (officers.president === "Louise"),
  "Louise should be elected President.",
  "5. "
)

assert(
  (officers.vicePresident === "Hermann"),
  "Hermann should be elected Vice President.",
  "6. "
)

assert(
  (officers.secretary === "Fred"),
  "Fred should be elected Secretary.",
  "7. "
)

assert(
  (officers.treasurer === "Ivy"),
  "Ivy should be elected Treasurer.",
  "8. "
)