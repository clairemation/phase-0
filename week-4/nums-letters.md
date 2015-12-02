**What does puts do?**

Puts outputs what follows it to the console, ending with a newline character. It returns nil.

**What is an integer? What is a float?**

An integer is a whole (non-decimal) number. A float is a decimal number that's stored internally as a floating-point number (which is a different system of numberic representation).

**What is the difference between float and integer division? How would you explain the difference to someone who doesn't know anything about programming?**

Float division comes out the way you'd expect it to if you entered it into a calculator, with the results in decimal form if they're not whole numbers. In integer division, the results are rounded down to the nearest whole number.


**Hours in a year:**

```ruby
hoursperday=24
daysperyear=365
puts hoursperday * daysperyear
=>8760
```

**Minutes in a decade**
```ruby
minutesperhour=60
hoursperday=24
daysperyear=365
yearsperdecade=10
puts minutesperhour * hoursperday * daysperyear * yearsperdecade
=>5256000
```

**How does Ruby handle addition, subtraction, multiplication, and division of numbers?**



**What is the difference between integers and floats?**
Integers are whole numbers (without decimal points). Floats are decimal numbers that are represented differently inside the computer.

**What is the difference between integer and float division?**
The results of float division can go out to several decimal points, but the results of integer division are rounded down to the next whole number, leaving a remainder or modulo.

**What are strings? Why and when would you use them?**
Strings are variables that store sequences of text characters. You might use a string to store a name or some descriptive attribute of an object—e.g. color, address, species—that might be different from case to case, or that you'll want to reference, operate on, or make comparisons about later on. Storing text in a string can save you from having to type long text sequences over and over again. And it makes it super easy if you decide you want to change some text that's used a hundred times in your program—you only have to assign it to something different at the beginning.

Actually, I realize right now that I've been defending using string VARIABLES—but even "Miss Lucy had a steamboat" on its own is a string, although it isn't assigned to a variable. So I guess if you're doing anything at all with just about any text (that's longer than one character long), you're using a string.

**What are local variables? Why and when would you use them?**
Local variables are variables that can only be referenced from within the method they appear. If you're just a using variable for the short term in the course of executing the method, and it's not called on outside the method at all, then you only need a local variable. It's good to limit the scope of your variables in this way, because then they're protected against you accidentally referencing or overwriting them elsewhere in the program. You might be using outside libraries that contain all sorts of methods, and those methods might contain all sorts of different variables that you're not even aware of. It'd be easy to end up using one accidentally; it's better that they're out your reach.

**How was this challenge? Did you get a good review of some of the basics?**
Boy, have I forgotten a lot since the pre-interview studying! This is a good review, but I have to do a lot more reviewing.

Other exercises:

[4.2.1](defining-variables.rb)
[4.2.2](simple-string.rb)
[4.2.3](basic-math.rb)