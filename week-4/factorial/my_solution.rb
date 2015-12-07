# Factorial

# I worked on this challenge [with: Gino Capio].
# pseudocode
# take number multiply by number minus 1 until zero
# if below 0 return nil
# if number is <= 1 return 1
# number * (number-1)

#(1..number).each do |x| result = result * x



# Your Solution Below
def factorial(number)
  if number <= 1
    return 1
  else
    result = 1
    (1..number).each {|x| result = result * x}
    return result
  end
end

#Recursive version!

def factorial_recursive(numbers)
  return numbers * (numbers - 1) if numbers > 1
  numbers
end

puts factorial_recursive(3)