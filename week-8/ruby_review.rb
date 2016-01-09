# Reverse Words


# I worked on this challenge [by myself].
# This challenge took me [#] hours.

# Pseudocode
# method reversed(sentence) -- take a sentence and return a copy with all the words reversed
# input: string
# output: string

# split string into array of words along spaces
# map array -> EACH word reversed
# join array into string with spaces in between



# Initial Solution
def reverse_words(sentence)
  words = sentence.split(/ /)
  words.map!{|w| w.reverse}
  words.join(' ')
end

# Refactored Solution


#driver code
puts reverse_words('Push B select.')

# Reflection

-What concepts did you review or learn in this challenge?
Enumerators. Man, are they cool. It sure would be nice to have them in JavaScript.

-What is still confusing to you about Ruby?
Not much, I think Ruby was really starting to jel for me before we moved on to JS.

-What are you going to study to get more prepared for Phase 1?
I really need to get on this RegExp train, it looks like a pretty powerful way to address some pretty common tasks.