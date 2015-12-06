# Longest String

# I worked on this challenge [by myself].

# longest_string is a method that takes an array of strings as its input
# and returns the longest string
#
# +list_of_words+ is an array of strings
# longest_string(list_of_words) should return the longest string in +list_of_words+
#
# If +list_of_words+ is empty the method should return nil


# Your Solution Below

=begin -- iterative version!

def longest_string(list_of_words)
  # Your code goes here!

  return nil if list_of_words.empty?

  longest = list_of_words[0]

  list_of_words.each {|item| longest = item if item.length > longest.length}

  return longest

end

=end

#Now using built-in methods!

def longest_string(list_of_words)
  list_of_words.max_by {|item| item.length}
end
