# A Nested Array to Model a Bingo Board SOLO CHALLENGE

# I spent [2] hours on this challenge.


# Release 0: Pseudocode
# Outline:

# Create a method to generate a letter ( b, i, n, g, o) and a number (1-100)
#   #fill in the outline here
#   input: none
#   output: array [letter, number]
#   @bingo = ["b", "i", "n", "g", "o"] (array)
#   @board = board

#   return [random sampled letter from bingo array, random#]


# # Check the called column for the number called.
#   #fill in the outline here
#   input: array [letter, number]
#   column = letter's index in @bingo array
#   FOR each array "row" in board
#     IF row @ column == number THEN row @ column = X
#   END

# # If the number is in the column, replace with an 'x'
#   #fill in the outline here
#   see above

# # Display a column to the console
#   #fill in the outline here
#   input: column letter
#   FOR each array "row" in @board
#     puts row[index of letter in @bingo array]
#   END


# # Display the board to the console (prettily)
#   #fill in the outline here
#   FOR each array "row" in board
#     FOR each element "cell" in row
#       print cell + a space " "
#     END
#     puts linebreak
#   END

# # Initial Solution

# class BingoBoard

#   attr_accessor :bingo_board, :bingo

#   def initialize(board)
#     @bingo_board = board
#     @bingo = ['b', 'i', 'n', 'g', 'o']
#   end

#   def generate_call
#     [@bingo.sample, rand(100)]
#   end

#   def check_call(letter, number)
#     column = @bingo.index(letter)
#     @bingo_board.each_with_index do |row|
#       row[column].to_s == number.to_s ? row[column] = 'X' : row[column]
#     end

#   end

# def disp_column(letter)
#   column = @bingo.index(letter)
#   @bingo_board.each do |row|
#     puts row[column]
#   end
# end

# def disp_board #add a space to 1-digit numbers to make them line up properly
#   @bingo_board.each do |row|
#     row.map! do |cell|
#       if cell.to_s.size <= 1
#         " " + cell.to_s
#       else cell.to_s
#       end
#     end
#     puts row.join(' ')
#   end
# end

# end

#----------------------------------------------------------------
# Refactored Solution

class BingoBoard

  def initialize(board) #board is 2-dimensional array, 5 columns, n rows
    @bingo_board = board
    @bingo = ['b', 'i', 'n', 'g', 'o']
  end

  def generate_call
    [@bingo.sample, rand(100)]
  end

  def check_call(letter, number) #column letter, number to check for
    column = @bingo.index(letter) #convert letter into index
    @bingo_board.each do |row| #if cell==search value, replace w 'X'
      row[column] == number ? row[column] = 'X' : row[column]
    end
  end

  def disp_column(letter)
    column = @bingo.index(letter)
    @bingo_board.each {|row| puts row[column]}
  end

  def disp_board
    puts "", @bingo.join('    ').upcase, "^^^^^^^^^^^^^^^^^^^^^^"
    @bingo_board.each do |row|
      disp_row = row.map { |cell| cell.to_s.size <= 1 ? " " + cell.to_s : cell.to_s} #add a space to 1-digit numbers so they all line up evenly
      puts disp_row.join('   '), ""
    end
  end

end







#DRIVER CODE (I.E. METHOD CALLS) GO BELOW THIS LINE
board = [[47, 44, 71, 8, 88],
        [22, 69, 75, 65, 73],
        [83, 85, 97, 89, 57],
        [25, 31, 96, 68, 51],
        [75, 70, 54, 80, 83]]

new_game = BingoBoard.new(board)
new_game.check_call(*new_game.generate_call)
new_game.disp_board


#Reflection

# -How difficult was pseudocoding this challenge? What do you think of your pseudocoding style?
# Pseudocoding was easy, but for some reason it sort of paralyzed my brain when it came to coding. Having already figured out the logic, I was now just converting it into a different format, and somehow that activated the memorization/recitation part of my brain and shut off the thinking part. And suddenly I couldn't remember the steps nor the logic without constantly looking back up at the pseudocode. I wonder about my pseudocoding style and if it's too close to actual code.

# -What are the benefits of using a class for this challenge?
# We could share instance variables across methods, and also have them remember their state between method calls.

# -How can you access coordinates in a nested array?
# outer_array[inner_array1_coord][inner_array_element_coord]. You list the dimensions sequentially because essentially outer_array[inner_array1_coord] is returning the array inner_array1. So just imagine erasing that first expression and replacing it with inner_array1, and you can see how it makes sense to access inner_array1's elements by putting its coordinates afterward.

# -What methods did you use to access and modify the array?
# I used largely map, with a little bit of re-assignment (=) based on conditionals during each loops.

# -Give an example of a new method you learned while reviewing the Ruby docs. Based on what you see in the docs, what purpose does it serve, and how is it called?

# I looked at a lot of methods. A couple of them were flat_map and each_slice. When I was looking for alternative ways of doing the print method, I wondered about flattening the arrays and them enumerating through them in slices the length of a line. Each_slice is called like so:
# board.each_slice(n){|array of n elements of board| code }.
# Or,
# board.each_slice(n).another_enumerator...
# because if you don't pass each_slice a code block, it returns an enumerator, allowing you to chain more methods to it. Then it's as if each_slice is "streaming" the contents of the object to the next method, n elements at a time, which is pretty neat.
# Unfortunately, it just seemed like in the case of this challenge, all this would accomplish would be to add steps needlessly converting stuff back and forth.

# -How did you determine what should be an instance variable versus a local variable?
# The only instance variables I used were @bingo_board and @bingo, which held the letters of "bingo" in an array for the dual purpose of picking a random letter from among them, and of deriving coordinates from among them. The latter was an instance variable because it stayed constant, and several different methods used it. The other variables were only needed as scratch figures in the course of calculating the results of the methods, so they could be just local variables.

# -What do you feel is most improved in your refactored solution?
# I spaced out the bingo board when it's printed out, for greater legibility, and added a heading... Other than that I just cleaned up the code a bit. I feel like there's some more meaningful refactoring that I'm not seeing. Frustrating.