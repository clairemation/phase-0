=begin Reflection section

-What are some general rules you can apply to nested arrays?

It's probably a good idea to write your "end"s as soon as you write the beginning of the loops, or you can quickly get lost.

-What are some ways you can iterate over nested arrays?

You can nest an iterator or enumerator inside another iterator or enumerator, like this:

outer_loop.each do |inner_item|
  inner_item each do |element|
    #whatever
  end
end

Some methods will travel recursively through nested arrays, like flat_map.

-Did you find any good new methods to implement or did you re-use one you were already familiar with? What was it and why did you decide that was a good option?

We used #map!, which I was somewhat familiar with but not completely. We initially tried to use #each, but discovered that the changes didn't keep. That's how we learned that #each is non-destructive and we needed a different solution. We wrote three nested enumerators to handle the three nested levels of the array, but we were dissatisfied with the fact that our code only worked for this particular data set.

We tried to write code that would be able to traverse nested arrays of any depth, where you wouldn't have to know ahead of time how many nested layers you were going to receive. For that, we ended up trying lots of different methods and techniques, wacky things with loops, but in the end it seems like there isn't any way to do that except recursion, which required writing a new method. We actually took a stab at it—I learned recursion in high school about a million years ago—but we couldn't get it right and were in danger of going down the rabbit hole on it. So, we actually learned all kinds of new stuff, it just didn't show up in our final answer. :p

=end



# RELEASE 2: NESTED STRUCTURE GOLF
# Hole 1
# Target element: "FORE"

array = [[1,2], ["inner", ["eagle", "par", ["FORE", "hook"]]]]

# attempts:
# ============================================================

p array[1][1][2][0]

# ============================================================

# Hole 2
# Target element: "congrats!"

hash = {outer: {inner: {"almost" => {3 => "congrats!"}}}}

# attempts:
# ============================================================

p hash[:outer][:inner]["almost"][3]


# ============================================================


# Hole 3
# Target element: "finished"

nested_data = {array: ["array", {hash: "finished"}]}

# attempts:
# ============================================================

p nested_data[:array][1][:hash]

# ============================================================

# RELEASE 3: ITERATE OVER NESTED STRUCTURES

number_array = [5, [10, 15], [20,25,30], 35]

number_array.map! do |element|
  if element.kind_of?(Array)
    element.map! {|inner| inner += 5}
  else element += 5

  end
end
p number_array

# Bonus:

startup_names = ["bit", ["find", "fast", ["optimize", "scope"]]]

startup_names.map! do |element|
  if element.kind_of?(Array)
    element.map! do |inner|
      if inner.kind_of?(Array)
        inner.map! {|inner_inner| inner_inner << "ly"}
      else
        inner << "ly"
      end
    end
  else
    element << "ly"
  end
end

p startup_names









