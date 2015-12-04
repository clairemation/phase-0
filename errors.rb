# Analyze the Errors

# I worked on this challenge [by myself].
# I spent [#] hours on this challenge.

# --- error -------------------------------------------------------

cartmans_phrase = "Screw you guys " + "I'm going home."

# This error was analyzed in the README file.
# --- error -------------------------------------------------------

def cartman_hates(thing)
  while true
    puts "What's there to hate about #{thing}?"
  end
end

# This is a tricky error. The line number may throw you off.

# 1. What is the name of the file with the error?
# => my_solution.rb
# 2. What is the line number where the error occurs?
# => 170, but it traces back to the error in line 16.
# 3. What is the type of error message?
# => syntax error
# 4. What additional information does the interpreter provide about this type of error?
# => It reaches the end of the file without ever finding the "end" keyword it was waiting for.
# 5. Where is the error in the code?
# => The while statement beginning on line 14 is missing an end keyword closing it.
# 6. Why did the interpreter give you this error?
# => It got to the end of the file, interpreting each "end" as belonging to the prior code block, until it finally reached the last line and was short one "end." As far as it knew, it was just the last block missing at "end"--it didn't know that everything had been off since line 16.

# --- error -------------------------------------------------------

#south_park

# 1. What is the line number where the error occurs?
# => 36
# 2. What is the type of error message?
# => name error
# 3. What additional information does the interpreter provide about this type of error?
# => "south_park" is an undefined local variable or method.
# 4. Where is the error in the code?
# => The first time south_park is mentioned, it must be initialized to a value or a method definition. It isn't.
# 5. Why did the interpreter give you this error?
# => It didn't know what south_park was or what to do with it.

# --- error -------------------------------------------------------

#cartman()

# 1. What is the line number where the error occurs?
# => 51
# 2. What is the type of error message?
# => no method error
# 3. What additional information does the interpreter provide about this type of error?
# => The method cartman is undefined.
# 4. Where is the error in the code?
# => Line 51 is calling on a method, cartman(), that isn't defined anywhere.
# 5. Why did the interpreter give you this error?
# => The cartman method doesn't seem to exist, so the interpreter doesn't know what to do when it's told to call it.

# --- error -------------------------------------------------------

def cartmans_phrase
  puts "I'm not fat; I'm big-boned!"
end

cartmans_phrase

# 1. What is the line number where the error occurs?
# => 66
# 2. What is the type of error message?
# => argument error
# 3. What additional information does the interpreter provide about this type of error?
# => Wrong number of arguments (1 where 0 are expected)
# 4. Where is the error in the code?
# => Depending on how you look at it, either on line 66 where no parameters are included in the method definition, or line 70 where an argument is erroneously passed to the method.
# 5. Why did the interpreter give you this error?
# => Line 70 sends an argument to the method cartsmans_phrase, but that method doesn't take any arguments.

# --- error -------------------------------------------------------

def cartman_says(offensive_message)
  puts offensive_message
end

cartman_says("Screw you guys.")

# 1. What is the line number where the error occurs?
# => 85
# 2. What is the type of error message?
# => argument error
# 3. What additional information does the interpreter provide about this type of error?
# => Wrong number of arguments (0 for 1)
# 4. Where is the error in the code?
# => Line 89, which calls cartman_says without passing it an argument.
# 5. Why did the interpreter give you this error?
# => The method cartman_says requires a parameter, but line 89 doesn't pass it any arguments.



# --- error -------------------------------------------------------

def cartmans_lie(lie, name)
  puts "#{lie}, #{name}!"
end

cartmans_lie('A meteor the size of the earth is about to hit Wyoming', 'dudes')

# 1. What is the line number where the error occurs?
# => 106
# 2. What is the type of error message?
# => argument error
# 3. What additional information does the interpreter provide about this type of error?
# => Wrong number of arguments (1 for 2)
# 4. Where is the error in the code?
# => Line 110, which only passes one argument to cartmans_lie.
# 5. Why did the interpreter give you this error?
# => Line 110 only passes a lie to cartmans_lie, but cartmans_lie requires both a lie and a name.

# --- error -------------------------------------------------------

#5 * "Respect my authoritay!"

# 1. What is the line number where the error occurs?
# => 125
# 2. What is the type of error message?
# => type error
# 3. What additional information does the interpreter provide about this type of error?
# => String can't be coerced into Fixnum.
# 4. Where is the error in the code?
# => The asterisk between 5 and the string.
# 5. Why did the interpreter give you this error?
# => Ruby can't multiply a number by a string. It could multiply a string by a number (giving you that string x times in a row), but the other way around doesn't make any sense.

# --- error -------------------------------------------------------

#amount_of_kfc_left = 20/0


# 1. What is the line number where the error occurs?
# => 140
# 2. What is the type of error message?
# => zero division error
# 3. What additional information does the interpreter provide about this type of error?
# divided by 0
# 4. Where is the error in the code?
# => the expression on the right side of the equals sign
# 5. Why did the interpreter give you this error?
# => The code is assigning amount_of_kfc_left to the expression 20 divided by 0, which is mathematically indeterminate.

# --- error -------------------------------------------------------

require_relative "cartmans_essay.md"

# 1. What is the line number where the error occurs?
# => 156
# 2. What is the type of error message?
# => load error
# 3. What additional information does the interpreter provide about this type of error?
# => Cannot load the file cartmans_essay.md.
# 4. Where is the error in the code?
# => The filename
# 5. Why did the interpreter give you this error?
# => It's attempting to link in a file that isn't there.


# --- REFLECTION -------------------------------------------------------
# Write your reflection below as a comment.

=begin

-Which error was the most difficult to read?
I found them all pretty straightforward, but I was thrown for a bit with the second error or so, where it started listing the error type at the end of the line instead of near the beginning as in the example. Also, in line 25 (5 * "Respect my authoritah!"), I initially missed the 5 at the beginning of the line. And since the asterisk also has several other functions, I was trying to figure out what a lone asterisk might be doing in front of a string.

-How did you figure out what the issue with the error was?
I ended up reading a lot about the splat operator (which was really interesting, so I'm not sorry I did!) but it still didn't make sense in this context. Then I noticed the 5 and realized it was a similar case to one that had been in the book.

-When you encounter errors in your future code, what process will you follow to help you debug?
I'm sure there will be plenty of errors where the interpreter will first notice a problem far away from where I made the actual mistake. I could insert puts statements into the code to check the flow and the states of variables, so I can see what's going on.


=end