# Calculate a Grade

# I worked on this challenge [with: Kevin Huang].


# Your Solution Below
# input: grade as float
# output: letter grade
# IF grade is greater than 90, lettergrade is A
# A 90
# B 80
# C 70
# D 60
# F else

def get_grade(grade)
  case
  when grade >= 90
    letter = "A"
  when grade >= 80
    letter = "B"
  when grade >= 70
    letter = "C"
  when grade >= 60
    letter = "D"
  else
    letter = "F"
  end
  letter
end