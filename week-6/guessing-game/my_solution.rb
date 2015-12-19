# Build a simple guessing game


# I worked on this challenge [by myself].
# I spent [#] hours on this challenge.

# Pseudocode

# Input:
# Output:
# Steps:

#-------------------------------------------------------

# Initial Solution

class GuessingGame__Use_refactored_below #renamed initial solution instead of commenting it out because it is REALLY hard to read without the syntax formatting


  def initialize(answer)
    #input: integer
    #output: self
    #set instance variable @answer = argument
    #initialize solved state as false

    @answer = answer
    @solved_state = false
  end


  def guess__Use_refactored_below(guess)

    #compare guess to answer
    #input: integer
    #output: symbol :low, :correct, or :high
    #Compare values of guess and answer
    #less -> returns :low
    #more -> returns :high
    #equal -> set solved state to true, return :correct

    case guess <=> @answer
      when -1
        :low
      when 0
        @solved_state = true
        :correct
      when 1
        :high
    end

  end


  def solved?__Use_refactored_below

    # determine whether player has won
    # input: none
    # output: true or false
    # steps: return solved state

    @solved_state
  end

end

#----------------------------------------------------------

# Refactored Solution

class GuessingGame

  def initialize(answer)
    @answer = answer
    @last = nil
  end

  def guess(guess)
    @last = { -1 => :low, 0 => :correct, 1 => :high }[ guess <=> @answer]
  end

  def solved?
    @last == :correct
  end

end

#-----------------------------------------------------------

# Test code
# g = GuessingGame.new(5)
# p g.guess(2)
# p g.solved?
# p g.guess(7)
# p g.solved?
# p g.guess(5)
# p g.solved?

#-----------------------------------------------------------

# Test code from assignment instructions

# game = GuessingGame.new rand(100)
# last_guess  = nil
# last_result = nil

# until game.solved?
#   unless last_guess.nil?
#     puts "Oops!  Your last guess (#{last_guess}) was #{last_result}."
#     puts ""
#   end

#   print "Enter your guess: "
#   last_guess  = gets.chomp.to_i
#   last_result = game.guess(last_guess)
# end

# puts "#{last_guess} was correct!"

#-----------------------------------------------------------

=begin ~~~Reflection~~~

-How do instance variables and methods represent the characteristics and behaviors (actions) of a real-world object?
Variables can record the state of an object, and methods can represent events that alter the objects' own states or the states of other, outside objects. For instance, a Cat object could have a hunger variable, and an eat method that would lower it. It could also have a scratch method that would lower the resale-value variable of a Furniture object and set its under-warrantee variable to false.

-When should you use instance variables? What do they do for you?
Local variables vanish Instance variables allow an object to maintain a state outside of when its methods are called. This helps you real-world objects that have persistent traits. Local variables are sort of your scratch paper for the calculations you need to make within your methods, but anything that's a trait of the object itself should probably be an instance variable.

-Explain how to use flow control. Did you have any trouble using it in this challenge? If so, what did you struggle with?
Flow control is a big part of programming logic. At some point you're going to need to do something only IF a certain condition is true, and do something else if it's false. Maybe you'll need to repeat an action several times, or until a condition is met. In this challenge I spent a lot of time trying to find the most concise and resource-light way to implement the guess function. What I came up with might fail the readability test, though.

-Why do you think this code requires you to return symbols? What are the benefits of using symbols?

Symbols are kind of like numbers in word form; there's only one of each, it can never change, and it sort of exists eternally. Just as with the number 3, sitting there somewhere on the coordinate plane, you don't bring a symbol into existence so much as reference a thing that already exists. Symbols are the same. A :triangle symbol is less like "this paper triangle here in my hand" but more like "the triangle" as a geometric concept. In this case, low, high, and correct are like the latter. You will never need to change the value "high" itself into something else. You might reassign a variable from high to low, but high remains itself.

Symbols are faster to look up because it is more direct; they sit on Ruby's symbol table simply as themselves. They also take up less memory than, say, string variables, because there's only one of each.

=end