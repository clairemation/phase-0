# Class Warfare, Validate a Credit Card Number


# I worked on this challenge [with: Marshall Sosland].
# I spent [1.5] hours on this challenge.

# Pseudocode

# Input: integer
# Output: true or false
# Steps:

#check for 16 digits

#setup
# convert num to string to array
# FOR positions range (1..15)
#   IF odd # x2
# FOR each num in array as "num"
#   IF length > 1
#     = string[0] + string[1]
#   END
# reduce array using +

# #check
# return reduced # % 10 == 0


# Initial Solution---------------------------------------------

class CreditCard
  def initialize(number)
    if number.to_s.size != 16
      raise ArgumentError.new("Not a valid CC number.")
    end
    @number = number
  end

  def check_card

    #convert num into string, split into array of chars
    num = @number.to_s
    num_for_check = []
    num.each_char do |char|
      num_for_check << char
    end

    (0..15).each do |digit| #double even digits
      if digit % 2 == 0 #if even
        num_for_check[digit] = (num_for_check[digit].to_i * 2).to_s
      end
    end

    num_for_check.map! do |item| #add double digits together
      if item.length > 1
        item[0].to_i + item[1].to_i
      else
        item
      end
    end

    num_for_check.map! do |item| #convert everything back to integers
      if item.is_a?(String)
        item.to_i
      else
        item
      end
    end

    check_num = num_for_check.inject(:+) #add all integers together

    check_num % 10 == 0 #if divisble by 10, you win!

  end

end


# Refactored Solution------------------------------------------------

class CreditCard

  def initialize(number)
    if number.to_s.size != 16
      raise ArgumentError.new("Not a valid CC number.")
    end
    @number = number
  end

  def check_card
    num_for_check = @number.to_s.chars # split digits into array
    (0..15).step(2) do |digit| #double every other digit--must end as string
        num_for_check[digit] = (num_for_check[digit].to_i * 2).to_s
    end
    all_digits = num_for_check.join.split(//) #array of all digits separately
    sum = all_digits.inject(0) {|acc, item| acc + item.to_i} #add them all up
    sum % 10 == 0 #if divisible by 10, dolla dolla y'all!
  end

end

#driver code-------------------------------

card = CreditCard.new(4563960122001999)

p card.check_card



=begin ####REFLECTION#####

-What was the most difficult part of this challenge for you and your pair?
For this challenge there was a lot of conversion between integers, strings, characters, and arrays. Making sure you were feeding the right class of object to the various methods was critical, and it was easy to forget about that.

-What new methods did you find to help you when you refactored?
We learned about char, which splits a string into an array of characters, and step, which allows you to iterate over a range several elements at a time. The latter one let us operate on every other member of an array instead of going through each one and checking whether it was odd or even.
This was the most successful refactoring I've done yet, in that we were able to find methods that significantly simplified the code.

-What concepts or learnings were you able to solidify in this challenge?
It helped me think about what's the right class for the job and how to get your data there.