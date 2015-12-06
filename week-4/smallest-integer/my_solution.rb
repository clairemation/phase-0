# Smallest Integer

# I worked on this challenge [by myself].

# smallest_integer is a method that takes an array of integers as its input
# and returns the smallest integer in the array
#
# +list_of_nums+ is an array of integers
# smallest_integer(list_of_nums) should return the smallest integer in +list_of_nums+
#
# If +list_of_nums+ is empty the method should return nil

#If size = 0 return nil
#Counter = list[0]
#For each element x in list[0], if smaller than counter then counter = x

# Your Solution Below

=begin -- Iterative version!

def smallest_integer(list_of_nums)
  # Your code goes here!

  return nil if list_of_nums.empty?

  smallest_integer = list_of_nums[0]

  list_of_nums.each {|item| smallest_integer = item if item < smallest_integer}

  return smallest_integer

end

=end

#Using built-in methods!

def smallest_integer(list_of_nums)
  list_of_nums.min
end