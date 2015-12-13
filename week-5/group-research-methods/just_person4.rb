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