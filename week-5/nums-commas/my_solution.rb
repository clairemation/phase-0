# Numbers to Commas Solo Challenge

# I spent [] hours on this challenge.

# Complete each step below according to the challenge directions and
# include it in this file. Also make sure everything that isn't code
# is commented in the file.

# 0. Pseudocode

# What is the input? - a positive integer
# What is the output? (i.e. What should the code return?) - a string of a number with commas between every third digit counting from the right
# What are the steps needed to solve the problem?
#-convert integer to string
#-reverse string
#-split into array of 3-char strings
#-join all into one string, inserting a comma between every grouping
#-remove extraneous trailing comma if there is one
#-re-reverse string


# 1. Initial Solution

def separate_comma__Use_refactored_method_below (num)
  strs = String.new
  num.to_s.reverse.each_char.each_slice(3){|chars| strs << "#{chars.join},"}
  strs.chomp(',').reverse
end


# 2. Refactored Solution

def separate_comma(num)
  num.to_s.reverse.each_char.each_slice(3).map{|n| ",#{n.join}"}.join.reverse.chomp(",")
end




# 3. Reflection

=begin --**--Reflection section --**--

-What was your process for breaking the problem down? What different approaches did you consider?

I did a whole lot in IRB, testing method chains piece by piece to see how they would work. I ended up trying several different directions. I tried attaching enumerators to slice and to each_char to create the ability to enumerate backwards from the end of the string in 3-character sub-strings. But slice couldn't enumerate, and each_char couldn't step backwards or return strings instead of arrays of characters. So I ended up having to reverse the string in order to operate from the end, and having to join arrays of characters into strings. (And the extra enumerator object turned out not to be necessary). It feels like I'm missing some forehead-slappingly perfect and obvious solution here.

-Was your pseudocode effective in helping you build a successful initial solution?

Yes, it helped me think out my logic. But most helpful was the ability to try things out immediately in IRB.

-What new Ruby method(s) did you use when refactoring your solution? Describe your experience of using the Ruby documentation to implement it/them (any difficulties, etc.). Did it/they significantly change the way your code works? If so, how?

I ended up not using anything that wasn't covered in the Rubyist book, I don't think. I scoured the Ruby docs for string methods and Enumerable methods, but nothing enumerated the way I wanted or returned its results in the form I wanted. Ultimately to implement the methods I found, I would've had to do them iteratively in a bunch of loops that would have made the program longer.

-How did you initially iterate through the data structure?

It was always enumerating through a reversed string using each_char, passing the results on to each_slice to grab every three characters. I tried using stuff like the String method slice, but then I started having to built iterative loops, which involved some math for grouping the string into 1000s, and that felt counter to the point of the exercise.

-Do you feel your refactored solution is more readable than your initial solution? Why?

Nope. It's shorter--I got it into one line--but I think that comes at the expense of readability.

=end