# Shortest String

# I worked on this challenge [by myself].

# shortest_string is a method that takes an array of strings as its input
# and returns the shortest string
#
# +list_of_words+ is an array of strings
# shortest_string(array) should return the shortest string in the +list_of_words+
#
# If +list_of_words+ is empty the method should return nil

=begin -- Iterative version!

#Your Solution Below
def shortest_string(list_of_words)
  # Your code goes here!

  return nil if list_of_words.empty?

  shortest = list_of_words[0]

  list_of_words.each {|item| shortest = item if item.length < shortest.length}

  return shortest

end

=end

#Now using built-in methods!

def shortest_string(list_of_words)
  list_of_words.min_by { |item| item.length }
end