=begin --**REFLECTION**--

-What did you learn about pseudocode from working on this challenge?
I learned how valuable pseudocode is when working in a team to make sure everyone understands what's going on before moving forward.

-What are the tradeoffs of using Arrays and Hashes for this challenge?
A Hash seems like the ideal data structure for this. An Array would be not so ideal, because you'd more likely be looking things up by name than by list position. Best of all would be to create a new object containing the hash and the methods, so you wouldn't have to pass the whole list to every method whenever you call it.

-What does a method return?
A method returns whatever you explicitly tell it to, or in the absense of that it returns the value of the last expression evaluated.

-What kind of things can you pass into methods as arguments?
You can pass any object type into a method: integers, floats, characters, strings, arrays, hashes, objects, even code blocks in the form of procs.

-How can you pass information between methods?
You can have a method call another method and pass it some information as arguments.

-What concepts were solidified in this challenge, and what concepts are still confusing?

I solidified my off-the-cuff memory of different methods and constructors for hashes. I still didn't find methods for things that I wanted to do in a single line (like add an array of keys to a hash all with the same value) but I feel like those methods MUST exist. I'm still looking.

=end


# Method to create a list
# input: string of items separated by spaces (example: "carrots apples cereal pizza")
# steps:
# [take a string with multiple inputs and make an array, then put those values in a hash with a value of one for each. return the hash]
  # set default quantity
  # print the list to the console [can you use one of your other methods here?]
# output: [a hash with each key having a corresponding value. {"carrots" => 1}]
# {"}

def create_list(items=nil)  #optional string arg: "item1 item2 item3 etc."
  list = Hash.new
  #if we were passed a string, add its items to the list
  if items
    items.split(" ").each { |item| add_to_list(list, item, 1) }
  end
  list
end


# ADD Method
# input: hash, item name, and optional quantity
# steps: add to hash using name as key and quantity as value
# output:

def add_to_list(list, name, qty)
  list[name] = qty
  list
end

# Delete Method
# input: hash, item name
# steps: delete key "item name" from hash
# output:

def delete_from_list(list, name)
  list.delete(name)
  list
end


# Update Method
# input: hash, name, qty
# steps: check hash for name, if present then hash[name]=qty, else add(name, qty)
# output:

def update_list(list, name, qty)
  #Overwrite if present, add if not present, aka exact same effect as:
  add_to_list(list, name, qty)
end


# Print Method
# input: hash
# steps: print each item from hash
# output:
#  name, qty: x
#  name2, qty y


def print_list(list)
    list.each { |name, qty| puts "#{name}, qty: #{qty}"}
end

#Tests
my_list = create_list
add_to_list(my_list, "Lemonade",2)
add_to_list(my_list, "Tomatoes",3)
add_to_list(my_list, "Onions",1)
add_to_list(my_list, "Ice cream",4)
my_list = delete_from_list(my_list, "Lemonade")
update_list(my_list, "Ice cream", 1)
print_list(my_list)