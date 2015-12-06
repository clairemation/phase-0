# Largest Integer

# I worked on this challenge [by myself].

# largest_integer is a method that takes an array of integers as its input
# and returns the largest integer in the array
#
# +list_of_nums+ is an array of integers
# largest_integer(list_of_nums) should return the largest integer in the +list_of_nums+
#
# If +list_of_nums+ is empty the method should return nil

=begin -- Iterative version!

# Your Solution Below

def largest_integer(list_of_nums)

  # Your code goes here!

  return nil if list_of_nums.empty?

  largest = list_of_nums[0]

  list_of_nums.each {|item| largest = item if item > largest}

  return largest

end

=end

#Version using built-in methods!

def largest_integer(list_of_nums)
  list_of_nums.max
end