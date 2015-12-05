# I worked on this challenge [with: Kevin Huang].

#To be a triangle: the sum of any two sides must be greater than the third side, e.g.:
#a + b > c
#a + c > b
#b + c > a

# Your Solution Below

def valid_triangle?(a, b, c)
  a + b > c && a + c > b && b + c > a
end