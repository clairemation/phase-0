# Leap Years

# I worked on this challenge [by myself with: Kevin Huang].

#There is a leap year every year whose number is perfectly divisible by four - except for years which are both divisible by 100 and not divisible by 400.

#leap years:
#divisble by 4
#except for *00 unless divisble by 400


# Your Solution Below

def leap_year?(year)
  year % 4 == 0 && !((year % 100 == 0) && (year % 400 != 0)) #Returns true IF year is divisible by 4 AND it is NOT the case that it is both divisble by 100 and indivisble by 400
end