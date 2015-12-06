# Concatenate Two Arrays

# I worked on this challenge [by myself].


# Your Solution Below

=begin -- Iterative version!

def array_concat(array_1, array_2)
  # Your code here

  array_2.each { |item|
    array_1 << item
  }

  return array_1

end

=end

#Now with built-in Ruby methods!

def array_concat(array_1, array_2)

  array_1.concat(array_2)

end
