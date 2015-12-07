# Add it up!

# Complete each step below according to the challenge directions and
# include it in this file. Also make sure everything that isn't code
# is commented in the file.

# I worked on this challenge [with: Gino Capio].

# 0. total Pseudocode
# make sure all pseudocode is commented out!

# Input: Array of numbers (integers and floats)
# Output: Integer or float that is the sum of the array elements
# Steps to solve the problem.
# def total(numbers)
# set result = 0
# For each element of numbers as x, result = result + x
# return result



# 1. total initial solution

def total(numbers)
  result = 0
  numbers.each { |x| result += x }
  return result
end




# 3. total refactored solution


# 4. sentence_maker pseudocode
# make sure all pseudocode is commented out!

# Input: array of strings words
# Output: a string containing all the elements of words, with spaces in between, a period at the end, and the first word capitalized at the beginning

# Steps to solve the problem.
# set sentence = ""
# for each element in words as word,
#  if word == words[last]
#    sentence += word+"."
#  else
#    sentence += word + " "

#  sentence.capitalize

# 5. sentence_maker initial solution

def sentence_maker(words)
  sentence = ""
  words.each { |word|
    word = word.to_s
    if word == words.first.to_s #cap if word is first in sentence
      sentence << (word.capitalize)
    else
      sentence << word
    end

    if word == words.last #period after last word, otherwise space
      sentence += "."
    else
      sentence += " "
    end
    }
  sentence
end

puts sentence_maker(["alaska", "has", "over", 586, "thousand", "miles", "and", "borders", "the", "Pacific", "ocean"])


# 6. sentence_maker refactored solution

def sentence_maker_refactored(words)
  words.first.capitalize!
  words.join(" ") + "."
end

puts sentence_maker_refactored(["alaska", "has", "over", 586, "thousand", "miles", "and", "borders", "the", "Pacific", "ocean"])