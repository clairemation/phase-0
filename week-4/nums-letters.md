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
