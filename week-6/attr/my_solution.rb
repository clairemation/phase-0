#Attr Methods

# I worked on this challenge [by myself]

# I spent [#] hours on this challenge.

# Pseudocode

# Input:
# Output:
# Steps:

class NameData
  attr_accessor :name

  def initialize(name="")
    @name = name
  end

end


class Greetings

  attr_accessor :recipient

  def initialize(name)
    @recipient = NameData.new(name)
  end

  def hello
    puts "Hello, #{@recipient.name}!"
  end

end

greeting = Greetings.new("Claire")
greeting.hello
greeting.recipient.name = "Queen Victoria"
greeting.hello

=begin ~*~*~*~Reflection~*~*~*~

Release 1

-What are these methods doing?
The what_is methods are each returning the value of an instance variable inside the object. The change_whatever= methods are setting an instance variable to the argument they receive. It's just that Ruby allows us to put a space before the =, to make it feel like we're using the = assignment operator.

-How are they modifying or returning the value of instance variables?
They're working like any instance method would. The getters are just returning the variable @whatever, and the setters are setting the variable @whatever to the received argument "whatever". The = in the setter name is there to make using it feel indistinguishable from just assigning the variable directly with the assignment operator =.

Release 2

-What changed between the last release and this release?
We added an attribute reader for the instance variable @age and removed the what_is_age getter because it's now redundant.

-What was replaced?
We replaced the what_is_age explicit getter method with an attribute reader for the instance variable @age. This created a getter method that's exactly the same as what_is_age, but now that it's named the same thing as the variable we're getting, it obscures the fact that it's a method and makes it feel like we're just accessing a variable directly.

-Is this code simpler than the last?
It is, in that calling on instance_of_profile's age is now more straightforward. Basically the method call obscures the action and feels more organically like a noun than like adding a verb in order to retrieve a noun.

Release 3

-What changed between the last release and this release?
Similar to last time, we added an attribute writer for age and removed the setter method change_my_age.

-What was replaced?
We replaced change_my_age with an attribute writer for @age. The functionality is the same, but now it feels less like calling a method and more like making a straightforward assignation to a variable.

-Is this code simpler than the last?
Yes, because the new setter method is shorter and more straightforward, and feels more intuitive to use.

Release 6

-What is a reader method?
A reader method is a method that returns an object's instance variable to the outside world.

-What is a writer method?
A writer method is one that assigns an object's instance variable to an argument passed in from outside.

-What do the attr methods do for you?
The attr methods automatically create reader and/or writer methods for the specified variables. attr_reader methods carry the same name as the variable, so you can reference them like this: object.variable. Attr_writer methods are named like: object.variable= so you can use them outside as if you were using the assignment operator, like so: object.variable = 3. Attr_accessor will create both a reader and a writer method for the specified instance variables.

-Should you always use an accessor to cover your bases? Why or why not?
You should use accessors only when necessary. There are cases where you may not want an object's innards to be vulnerable to outside tampering. It could threaten data security, and also create confusion and bugs when you end up changing things you don't mean to.

-What is confusing to you about these methods?
I guess I'm curious about how the attr methods themselves work, and why they have to take arguments in the form of symbols.


=end