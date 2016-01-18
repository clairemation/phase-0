# I worked on this challenge [with: Katie Meyer].
# This challenge took me [1] hours.


# Pseudocode
# Input: array of integers
# Output:
# Steps:
# - use map to go over array
# - IF % 3 == 0 && % 5 == 0
#    - RETURN "FizzBuzz"
# - ELSIF % 3 == 0
#    - RETURN "Fizz"
# ELSIF % 5 == 0
#    - RETURN "Buzz"
# ELSE
#    - RETURN value in array
# ENDIF


# Initial Solution

def super_fizzbuzz(array)
  x = 0
  while x < array.length
    if array[x] % 15 == 0
      array[x] = "FizzBuzz"
    elsif array[x] % 3 == 0
      array[x] = "Fizz"
    elsif array[x] % 5 == 0
      array[x] = "Buzz"
    else
    end
  x += 1
  end
  p array
end


# Refactored Solution

def super_fizzbuzz(array)
  array.map{ |item|
    if item % 3 == 0 && item % 5 == 0
      "FizzBuzz"
    elsif item % 3 == 0
      "Fizz"
    elsif item % 5 == 0
      "Buzz"
    else
      item
    end
  }
end



p super_fizzbuzz([1,2,3])
p super_fizzbuzz([1,2,5])
p super_fizzbuzz([1,2,15])
p super_fizzbuzz([30,9,20,1])








# Reflection
