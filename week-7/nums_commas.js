// Separate Numbers with Commas in JavaScript **Pairing Challenge**



// I worked on this challenge with: Tyler McKenzie.



// Pseudocode
/*
input: int
output: comma-separated number as string

convert int to string
iterate from the end, starting at (end-3), then insert comma every -4 chars until our index < 3

steps

int --> oldstring

newstring = ""

UNTIL oldstring length < 3 {
newstring = last 3 chars popped from oldstring + ',' + newstring
}

newstring = oldstring + ',' + newstring


*/
// Initial Solution

function separate_commas(int) {

  var oldArray;
  oldArray = int.toString().split('');
  var newArray = [];

  while (oldArray.length >= 3) {
    for (var i = 0; i < 3; i++) {
      newArray = oldArray.pop() + newArray;
    }; //pop 3 over
    newArray = ',' + newArray;
  };

  newArray = oldArray.join('') + newArray;

  if (newArray.charAt(0) == ',') {
    newArray = newArray.substring(1);
  }

  return newArray;
}

console.log(separate_commas(12567374974698648679));


// Refactored Solution


function separate_commas(int) {

  var oldString = int.toString();
  var newString = "";

  while (oldString.length >= 3) {
    newString = oldString.slice(-3) + newString;
    oldString = oldString.slice(0, -3);
    newString = ',' + newString;
  };

  newString = oldString + newString;

  if (newString.charAt(0) == ',') {
    newString = newString.substring(1);
  }

  return newString;
}

console.log(separate_commas(12567374974698648679));


// Your Own Tests (OPTIONAL)




// REFLECTION

// -What was it like to approach the problem from the perspective of JavaScript? Did you approach the problem differently?
// Frustrating! I felt I had a handle on the Ruby enumerators we could use to solve this, but we didn't know how to do whatever equivalent JavaScript might have, so the solution was a lot more sort of decompressed.

// -What did you learn about iterating over arrays in JavaScript?
// The shorthand for-loop is nice, but it would've been nicer still to be able to do that over ranges (like in Ruby: for i in 0..3, etc.)

// -What was different about solving this problem in JavaScript?
// We didn't have enumerators or a shorthand for iterating through ranges.

// -What built-in methods did you find to incorporate in your refactored solution?
// Slice let us take the last 3 letters of a string.