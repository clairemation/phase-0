# Your Names
# 1)Claire Samuels
# 2)N/A

# We spent [2.5] hours on this challenge.

#To do:

#implement baking suggestions -- DONE
#differentiate between singular/plural -- DONE
#let you pass in multiple foods via splat argument


# Bakery Serving Size portion calculator.

def serving_size_calc(food, total_ingredients)

  #number of ingredients per food type
  library = {"cookie" => 1, "cake" =>  5, "pie" => 7}

  #if food is not in library, raise exception
  raise ArgumentError.new("#{food} is not a known food.") if !library.include?(food)

  serving_size = library[food] #serving size: # ingredients per food
  leftover_ingredients = total_ingredients % serving_size
  total_servings = total_ingredients / serving_size
  pluralizer = total_servings != 1 ? "s" : "" #add one or no "s"es
  result_string = "Ingredients yield #{total_servings} #{food}#{pluralizer}"

  if leftover_ingredients == 0
    result_string << "." #if no leftovers, then end sentence with a period
  else #suggest foods(keys) whose value is <= leftover_ingredients
    suggestions = library.select{|k,v| v <= leftover_ingredients}.keys
    pluralizer = leftover_ingredients != 1 ? "s": ""
    result_string << ", with #{leftover_ingredients} leftover ingredient#{pluralizer}. Suggested baking items: #{suggestions.join(", ").chomp(", ")}."
  end
end

#test code
puts serving_size_calc("pie", 1)
puts serving_size_calc("pie", 20)
puts serving_size_calc("cake", 5)
puts serving_size_calc("cake", 24)
puts serving_size_calc("cookie", 1)
puts serving_size_calc("cookie", 10)
puts serving_size_calc("THIS IS AN ERROR", 5)

 Reflection
-What did you learn about making code readable by working on this challenge?
It's fun to shorten code as much as possible, e.g. remove "middleman" variables, but that makes it practically unintelligible. Here I fought the desire to do that, so I could see what each expression stood for. I also tried to comment more than I've been doing.

-Did you learn any new methods? What did you learn about them?
I scoured the docs for Hash, String, and Enumerable methods, but I didn't find any that lessened the number of steps or created fewer intermediate objects. I did sort of learn the infix operator for strings (<<). I hadn't been entirely sure whether strings had that. Also, in a prior version of the code, I had a statement where I called a method on the string to the left of the infix operator. Like: my_string.chomp!("blah") << "more text". I wasn't sure it would work the way I wanted it to, but happily it did.

-What did you learn about accessing data in hashes?
I feel like this project built on what I already knew about hashes. But it was a good exercise in discerning between hashes and arrays, and how to get data into a form your methods can operate on.

-What concepts were solidified when working through this challenge?
I was glad for the chance to use #select "in the field," so to speak. I also glad to try out the infix operator for strings, because I wasn't entire sure at first that it would work.