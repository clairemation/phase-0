# Calculate the mode Pairing Challenge

# I worked on this challenge [with: Angelika Yoder]

# I spent [1.5] hours on this challenge.

# Complete each step below according to the challenge directions and
# include it in this file. Also make sure everything that isn't code
# is commented.

# 0. Pseudocode

#Input: Array of misc. items (potentially all different data types)
#Output: Array of most frequently-appearing value[s] (any data types)
#Steps: -count unique elements of argument unsorted_array, store in hash frequencies:
# frequencies -- {element1 => count1, element2 => count2...}
# for each element of unsorted_array: add 1 to existing key "element_name"'s value in frequencies, or create new pair with value = 1
# highest_frequency = frequencies.max by value
# Select hash of all key-value pairs with the value highest_frequency --> return array of all their keys

# 1. Initial Solution

def mode__Use_refactored_version_below__(unsorted_array)
  frequencies = {}
  unsorted_array.each do |item|
    if frequencies[item]
      frequencies[item] += 1
    else
      frequencies[item] = 1
    end
  end
  mostest_items = frequencies.max_by{|key, value| value}[1]
  frequencies.select{|key, value| value == mostest_items}.keys
end


# 3. Refactored Solution

def mode(items)

items.group_by{|item| item}

=begin
  unique_items = items.uniq
  count_unique_items = unique_items.collect {|unique_item| [unique_item, items.count(unique_item)]}
  max_count = count_unique_items.collect{|key, value| value}.max
  final_tally = count_unique_items.group_by{|key, value| value==max_count}
  final_tally[true].collect{|k, v| k}
=end

end


#  frequencies = Hash.new(1)
#  items.each {|item| frequencies[item] += 1}
#  highest_frequency = frequencies.max_by{|k,v| v}[1]
#  frequencies.select {|key, value| value == highest_frequency}.keys
#end

#test:
p mode ["cat", "dog", "cat", "dog", "dog", :one, :one, :one, "horse", 1, 2, 2, 4, "cat", 2, 3, 3]


=begin ~*~*~Reflection~*~*~

-Which data structure did you and your pair decide to implement and why?
We used a hash to store the items counts. This worked really well because it was easy to increment or instantiate a count which would be bound to a key automatically named for the thing it was counting.

-Were you more successful breaking this problem down into implementable pseudocode than the last with a pair?
We came up with pseudocode more easily. But when we got down to actual code, seeing what worked and what didn't, and what methods were available and what weren't, our program ended up departing from the pseudocode pretty drastically. I went back and changed the pseudocode to reflect our code. Maybe I shouldn't have because now it doesn't reflect our process, but the original doesn't make sense now.

-What issues/successes did you run into when translating your pseudocode to code?
It wasn't till we got to writing the code that we could really tell what was practicable and what wasn't.

-What methods did you use to iterate through the content? Did you find any good ones when you were refactoring? Were they difficult to implement?
We used the #each, #max_by, and #select. The challenge was in keeping straight which data types you'd get your results in, and how you'd get them into the form you needed for the next method down the chain.

=end