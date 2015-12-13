# Research Methods

# I spent [] hours on this challenge.

i_want_pets = ["I", "want", 3, "pets", "but", "only", "have", 2]
my_family_pets_ages = {"Evi" => 6, "Ditto" => 3, "Hoobie" => 3, "George" => 12, "Bogart" => 4, "Poly" => 4, "Annabelle" => 0}

# Person 1's solution
def my_array_finding_method(source, thing_to_find)
  source.select! { |item| item.to_s.include?(thing_to_find) }
  p source
end

def my_hash_finding_method(source, thing_to_find)
  source.select! {|key,value| value == thing_to_find}
  p source.keys
end

# Identify and describe the Ruby method(s) you implemented.
# For the Array I used the select method with ! to implement changes on the original array
#The select method and passing of a block allows me to specifically look for the item that includes
# the thing_to_find and then print and returns the value of the array
#For the Hash it's similar, except when passing the block we have both the key and the value
#and we are specifically looking for the value that equals the thing_to_find but then we return an array
#by only returning the key(in this case it happens to be the name of the pet)

# Person 2: Modifying Existing Data

i_want_pets = ["I", "want", 3, "pets", "but", "only", "have", 2]
my_family_pets_ages = {"Evi" => 6, "Ditto" => 3, "Hoobie" => 3, "George" => 12, "Bogart" => 4, "Poly" => 4, "Annabelle" => 0}


def my_array_modification_method!(source, thing_to_modify)
  modded_array = source.map! {|x|
    if x.is_a? Fixnum then x + thing_to_modify
    else
      x
    end}
  p modded_array
end

my_array_modification_method!(i_want_pets, 3)

# This method takes in an array and a number to be added to all internal numbers. The output replaces the original array with the updated numbers. The first method I used was "map!". This method allows you to invoke the given block once for each element in the array and then replaces the element returned by the block. In this block, we asked if the element was a Fixnum, and if so then we add the element to the number given in the argument. The next method I used is the "is_a?". This method simply asks if the object is a certain class. In the block, we asked if the element was a Fixnum using "is_a?" and if so, then we continue applying the rest of the code. The result is that the array would update any Fixnum inside the array and add them by the desired number.



def my_hash_modification_method!(source, thing_to_modify)
  modded_hash = source.update(source){|k, v| v + thing_to_modify}
  p modded_hash
end

my_hash_modification_method!(my_family_pets_ages, 2)

# This method takes in a hash and a number to modify the existing value. The output replaces the original hash with a new one that adds the desired number to the values. The method that I used is "update". This method allows you to update a hash with specific instructions given in the block. In this case, we called the update method to modify the desired hash and add all values by the number given in the argument. The result is an updated array with the changes called in the argument.




# Release 3: Reflect!
# What did you learn about researching and explaining your research to others?
#
#
#
#




# Person 3
def my_array_sorting_method(source)
  # This line is here to make sure all tests initially fail. Delete it when you begin coding.
end

def my_hash_sorting_method(source)
   # This line is here to make sure all tests initially fail. Delete it when you begin coding.
end

# Identify and describe the Ruby method(s) you implemented.
#
#
#


# Person 4
def my_array_deletion_method!(source, thing_to_delete)
  source.delete_if {|item| item.is_a?(String) && item.include?(thing_to_delete)}
end

#We need the #is_a?(String) condition first because the interpreter will shit the bed if it hits #include? with something that isn't a string.


def my_hash_deletion_method!(source, thing_to_delete)
  source.delete_if {|key, value| key == thing_to_delete}
end

# Identify and describe the Ruby method(s) you implemented.
# These methods hinge on the delete_if method. It looks like this:
# my_array_or_hash.delete_if {code block}
# Delete_if plugs each entry of the array/hash into the code block, one by one, and if the result of the code block is "true," it deletes the entry. In other words, it deletes every entry that fulfills the conditions you specify.
# The array version goes like this:
# my_array.delete_if {|element| code block that returns true or false}
# For each entry in the array, delete_if puts that entry into the variable "element," and runs the code block. The block could be "element == 3" or it could be a 1,000-line program. It just needs to return true or false at the end. Hell, technically you don't even need to have it do anything. You COULD write "my_array.delete_if{true}" and it would work. It would just delete every entry in the array because it returns true every time. You probably want to put some code there that does something useful.
# The hash version looks slightly different, because each entry in a hash is a key => value pair. So delete_if passes both parts into to your code block, like this:
# my_hash.delete_if {|key, value| some_code}


# Person 5
def my_array_splitting_method(source)
   # This line is here to make sure all tests initially fail. Delete it when you begin coding.
end

def my_hash_splitting_method(source, age)
   # This line is here to make sure all tests initially fail. Delete it when you begin coding.
end

# Identify and describe the Ruby method(s) you implemented.
#
#
#


# Release 1: Identify and describe the Ruby method you implemented. Teach your
# accountability group how to use the methods.
#
#
#


# Release 3: Reflect!
# What did you learn about researching and explaining your research to others?
#
#
#
#