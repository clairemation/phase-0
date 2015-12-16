# Die Class 2: Arbitrary Symbols


# I worked on this challenge [by myself].
# I spent [#] hours on this challenge.

# Pseudocode

# initializer
# Input: array of strings
# Output: Die object
# Steps:
# instance var labels = labels

# sides
# Input: none
# Output: integer number of sides
# Steps:
# return size of labels array

# roll
# Input: none
# Output: single string from labels array
# Steps:
# return labels element at index (random num between 1 and #sides)



# Initial Solution

# class Die
#   def initialize(labels)
#     raise ArgumentError.new("Needs non-empty array of side labels.") if labels.empty?
#     @labels = labels
#   end

#   def sides
#     @labels.size
#   end

#   def roll
#     @labels[rand(sides)] #@labels at random index
#   end
# end





# Refactored Solution

class Die
  def initialize(labels)
    raise ArgumentError.new("Needs non-empty array of side labels.") if labels.empty?
    @labels = labels
  end

  def sides
    @labels.size
  end

  def roll
    @labels.sample #random element of @labels
  end
end


# I have a little dreidl, I made it out of code
# And when it's saved and ready, oh, dreidl I will load

d = Die.new(["Nun", "Gimmel", "Hey", "Shin"])
puts d.sides
puts d.roll
puts d.roll
puts d.roll



=begin -*-*-*Reflection*-*-*-

-What were the main differences between this die class and the last one you created in terms of implementation? Did you need to change much logic to get this to work?

The difference between just numbered sides and named sides meant that this class couldn't really have a default value in the initializer, and also that the number of sides had to be separately derived. Also that the roll method, instead of returning just a random number, returned a random array index value. So that's about one extra step in a couple areas. But otherwise it was pretty similar.

-What does this exercise teach you about making code that is easily changeable or modifiable?

Commenting your code and using descriptive names makes it easier to swap out or modify sections, since it's easier to see what does what precisely.

-What new methods did you learn when working on this challenge, if any?

I learned the Array#sample method, which returns a random element from the array. It's marginally shorter to write and I guess a bit clearer to read than the longhand alternative, but I'm not sure if it's actually any less work on the computer's side of things.

-What concepts about classes were you able to solidify in this challenge?

I had one instance method calling another, which I was a bit unsure about till I tried it.

=end