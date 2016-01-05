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
