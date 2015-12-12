# Die Class 1: Numeric

# I worked on this challenge [by myself]

# I spent [] hours on this challenge.

# 0. Pseudocode

#Initialize--
# Input: integer # of sides
# Output: returns ??
# Steps: if input < 1, raise ArgumentError, else set instance variable sides

#sides--
# Input: no args
# Output: integer # of sides
# Steps: returns sides

#roll--
# Input: no args
# Output: random integer 1..6
# Steps: return random int in the range of 1..6


# 1. Initial Solution

class Die__use_refactored_version_below
  def initialize(sides)
    raise ArgumentError.new("Die cannot have fewer than 1 side.") if sides < 1
    @sides = sides
  end

  def sides
    @sides
  end

  def roll
    Random.rand(1..sides)
  end
end

# 3. Refactored Solution

class Die
  attr_reader(:sides)
  def initialize(sides)
    raise ArgumentError.new("Die cannot have fewer than 1 side.") if sides < 1
    @sides = sides
  end
  def roll
    Random.rand(1..sides)
  end
end

d = Die.new(6)
p d.sides
p d.roll



# 4. Reflection

=begin ~~~Reflection~~~

-What is an ArgumentError and why would you use one?
An ArgumentError is a type of exception, which are objects of the Exception class. An exception terminates the program when raised (unless there is a rescue clause) and encapsulates information about what went wrong and where the offending code was called from. This guards against an error going unnoticed and producing wacky results down the line, and is very helpful in debugging.

-What new Ruby methods did you implement? What challenges and successes did you have in implementing them?
Pretty much everything in this challenge was new (discounting the pre-interview prep work). Everything was pretty straightforward, though, so I didn't encounter any problems. I have to admit I was a bit confused at the refactoring step, where we're instructed to look for enumerable methods to simplify our code. There doesn't seem to be anything here that could be enumerated. I scoured the docs, but literally all this object does is return a single random number, I'm not sure how this could get any simpler...?

-What is a Ruby class?
A class is an object that can instantiate new objects based on itself, and that other classes can inherit from. Classes can include variables and methods that aren't accessible to the individual objects.

-Why would you use a Ruby class?
You'd use a Ruby class to model a "kind" of object of which you'd want to make several instances with common features and behavior. You could also make a class just to store methods along a single theme that aren't tied to an individual object.

-What is the difference between a local variable and an instance variable?
A local variable only has scope within the method or block it's inside. It's generated when the method is called, and vanishes when the method ends. An instance variable belongs to a whole object, and maintains its state throughout the whole program.

-Where can an instance variable be used?
An instance variable can be used inside an object. You could set one singly inside an object, or set it in a class definition to be inherited by the class's inheritors. The instance variable can be used in any method inside the whole object. It's inaccessible from outside the object, and you have to provide methods for read or write functionality. You can use the attr_accessor family of methods in your class to make the variables readable and/or writable from outside, but technically these are also just creating methods to do the same job.

=end