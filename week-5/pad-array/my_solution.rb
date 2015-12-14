# Pad an Array

# I worked on this challenge [with: Thomas Huang]

# I spent [2] hours on this challenge.


# Complete each step below according to the challenge directions and
# include it in this file. Also make sure everything that isn't code
# is commented in the file.



# 0. Pseudocode

# What is the input?

# Array, min_size, and value equal to nil.

# What is the output? (i.e. What should the code return?)

# Should return a modified array for destructive and new array for non-destructive.

# What are the steps needed to solve the problem?

# ! version
# If array length >= min size, return array
# Else:
# Do (min size - array length) times
#  array << value
# return array
# end if block

# Non-destructive version
# If array length >= min size, return array
# Else:
# Create new array new_array = array.dup
# Do (min size - array length) times
# new_array << value
# return new_array
# (end if block)


# 1. Initial Solution
def pad_destructive__Use_refactored_version_below(array, min_size, value = nil) #destructive
  if array.length >= min_size
    return array
  end
  num_spaces = min_size - array.length
  num_spaces.times { array << value }
  return array
end

def pad_nondestructive__Use_refactored_version_below(array, min_size, value = nil) #non-destructive

  new_array = array.dup

  if array.length >= min_size
    return new_array
  end
  num_spaces = min_size - array.length
  num_spaces.times {new_array << value}
    return new_array
end


# 3. Refactored Solution

def pad!(array, min_size, value = nil) #destructive
  return array if array.length >= min_size
  num_spaces = min_size - array.length
  num_spaces.times { array << value }
  return array
end

def pad(array, min_size, value = nil) #non-destructive
  pad!(array.dup, min_size, value)
end

=begin ~*~*~Reflection~*~*~

-Were you successful in breaking the problem down into small steps?

Yes, I think we both found that this problem broke down more easily than previous ones.

-Once you had written your pseudocode, were you able to easily translate it into code? What difficulties and successes did you have?

Since our pseudocode was pretty specific and pretty close to being code, it was pretty easily translated.

-Was your initial solution successful at passing the tests? If so, why do you think that is? If not, what were the errors you encountered and what did you do to resolve them?

We had to correct little errors and typos, but after that it passed.

-When you refactored, did you find any existing methods in Ruby to clean up your code?

We didn't find any new methods that we thought were better than what we used, but we did find a way to cut out a lot of redundancy by having pad just be a wraparound for pad! that fed it a new array instead of the original one.

-How readable is your solution? Did you and your pair choose descriptive variable names?

I think it's pretty readable. We resisted collapsing a couple lines into single lines for the sake of readability. I do think the parameter name min_size was slightly confusing. From the point of view of the method, it's not really a minimum anything, it's really the GOAL size. So it's a bit confusing to have something called min_size that's supposed to be bigger than the array's current size. But we couldn't change the parameter names we were supplied.

-What is the difference between destructive and non-destructive methods in your own words?

A non-destructive method doesn't alter the objects you pass into it. Anything it returns is a new object. So if you want to save the changed version for later, you have to assign it to a new or other variable. A destructive method alters the objects that are passed into it. Generally the method's parameters are local to the method and don't affect the outside versions, so reassigning them won't change the originals. But when you perform an operation that affects the base object that the variable was pointing TO (for instance, replacing a string's contents using String#replace instead of just reassigning the string variable using = ), the changes will be effective outside, too.


=end