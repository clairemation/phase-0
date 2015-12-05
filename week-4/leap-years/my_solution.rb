# Leap Years

# I worked on this challenge [by myself with: Kevin Huang].

#leap years:
#divisible by 4
#exception: *00 unless divisble by 400
#(a.k.a. *00 years that are INdivisible by 400)

# logic--> divisible by 4 && NOT (hundred-year exception)

# hundred-year exception = (divisible by 100 && NOT divisible by 400)

# logic expanded--> divisible by 4 && NOT (divisible by 100 && NOT divisible by 400)

# Your Solution Below

def leap_year?(year)
  year % 4 == 0 && !((year % 100 == 0) && (year % 400 != 0)) # True if divisble by 4 && NOT((Divisble by 100) && (NOT divisible by 400))
end