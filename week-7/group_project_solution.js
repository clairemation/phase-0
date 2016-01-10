#Tests to user stories
#As a user, I want to be able to get the sum of elements
#As a user, I want to be able to get the sum of all the elements in an odd length data collection
#As a user, I want to be able to get the sum of all the elements in an even length data collection
#As a user, I want to be able to get the mean of elements
#As a user, I want to be able to get the average of all the elements in an odd length data collection
#As a user, I want to be able to get the average of all the elements in an even length data collection
#As a user, I want to be able to get the median value of elements
#As a user, I want to be able to get the median value of all the elements in an odd length data collection
#As a user, I want to be able to get the median value of all the elements in an even length data collection

// Stories to Psuedocode
// Sum of Elements
//   input: an array of elements
//   output: sum of all elements
//   steps:
//     - define a function called "sumArray" that accepts array as argument
//     - define a variable as a counter and set equal to 0
//     - use 'for' loop to iterate over each element in the array:
//         set var i to 0 inside the for loop, as long as the i is less than the length of the array, increment the i by 1
//     - set the counter to the sum of all elements using:
//         counter += array[i]
//     - return counter

// Mean of Elements
//   input: array of elements
//   output: mean of elements
//   steps:
//     - define a function called "meanArray" that accepts array as argument
//     - use the sumArray function on the array
//     - return the result of the sum of the array divided by the length of the array:
//         return (sumArray(array) / array.length)

// Median of Elements
//   input: array of elements
//   output: median of elements
//   steps:
//     - define a function called "medArray" that accepts array as argument
//     - define a variable called "index" and set it equal to the length of the array divided by 2:
//         var index = array.length / 2
//     - use the floor method to make the index a whole number:
//         index = Math.floor(index)
//     - if the array.length is even,
//           return (array[index] + array[index + 1] / 2)
//     - else return array[index]

// These functions should work with both odd and even length arrays.

function sumArray(numArray) {
  counter = 0;
  for (var i = 0; i < numArray.length; i ++) {
    counter += numArray[i];
  } //counter is sum of all values in numArray
  return counter;
}

function meanArray(numArray){
  return (sumArray(numArray) / numArray.length);
} //divide num of values by number of values to get the mean

function medArray(numArray) {
  var index = numArray.length / 2;
  index = Math.floor(index); //rounds index down to nearest integer
  if (numArray.length % 2 == 0) { //if array length is even
    return ((numArray[index] + numArray[index + 1]) / 2 );
    //return average of the two middle values
  }
  return numArray[index]; //otherwise return the middle value
}