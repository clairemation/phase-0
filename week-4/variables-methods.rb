puts 'Input first name:'
first_name = gets.chomp
puts 'Input middle name'
middle_name = gets.chomp
puts 'Input last name:'
last_name = gets.chomp

puts 'Salutations, ' + first_name + ' ' + middle_name + ' ' + last_name + '!'

puts 'Now, what\'s your favorite number?'
fav_num = gets.chomp.to_i
better_num = fav_num + 1
puts 'Are you sure ' + better_num.to_s + ' isn\'t better?'

=begin

-How do you define a local variable?
  You can define a variable by simply assigning it a value, e.g. [variablename] = [value]. Or you can use the class's constructor method, either passing it a starting value or not, if it allows, e.g. my_hash = Hash.new().

-How do you define a method?

def method_name (argument1, argument2, argument3)
  #code goes here
end

You can also leave the parentheses out:

def method_name argument1, argument2, argument3

-What is the difference between a local variable and a method?

A variable stores a value but doesn't do anything. A method is a named block of code that can be called and passed arguments, and will return a value. You can use a method in sort of the same ways as you could use a variable; each one yields a value that will be "plugged in" to its place in the expression. Just that the method does something active to create that value, and the variable does no more than retrieve it.

-How do you run a ruby program from the command line?
ruby program_name.rb
Or, you can execute ruby code on the fly using IRB.

-How do you run an RSpec file from the command line?
rspec rspec_filename.rb

-What was confusing about this material? What made sense?
It took a while to understand what the rspec file was and what rspec was doing or checking for. In the assignment where you get the user's name and then greet them, I included an option to handle people with no middle name, and my program failed the test. I had to take it out to make my code match exactly what rspec was expecting.

exercise 4.2.1: https://github.com/clairemation/phase-0/blob/master/week-4/address/my_solution.rb

exercise 4.2.2: https://github.com/clairemation/phase-0/blob/master/week-4/math/my_solution.rb

exercise 3: https://github.com/clairemation/phase-0/blob/master/week-4/math/my_solution.rb

=end