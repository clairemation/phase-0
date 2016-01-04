// Separate Numbers with Commas in JavaScript **Pairing Challenge**



// I worked on this challenge with: .



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

// def separate_comma(num)
//   num.to_s.reverse.each_char.each_slice(3).map{|n| ",#{n.join}"}.join.reverse.chomp(",")
// end

// def separate_comma(int)
//   int.to_s.reverse.gsub(/(\d{3})(?=\d)/, '\\1,').reverse
// end

//  return int.toString().split('').reverse().join('').replace(/(\d{3})(?=\d)/, '$1,').split('').reverse().join('');
