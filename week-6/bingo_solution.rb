# A Nested Array to Model a Bingo Board SOLO CHALLENGE

# I spent [#] hours on this challenge.


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

class BingoBoard

  attr_accessor :bingo_board, :bingo

  def initialize(board)
    @bingo_board = board
    @bingo = ['b', 'i', 'n', 'g', 'o']
  end

  def generate_call
    [@bingo.sample, rand(100)]
  end

  def check_call(letter, number)
    column = @bingo.index(letter)
    @bingo_board.each_with_index do |row|
      row[column].to_s == number.to_s ? row[column] = 'X' : row[column]
    end

  end

def disp_column(letter)
  column = @bingo.index(letter)
  @bingo_board.each do |row|
    puts row[column]
  end
end

def disp_board
  @bingo_board.each do |row|
    row.map! do |cell|
      if cell.to_s.size <= 1
        " " + cell.to_s
      else cell.to_s
      end
    end
    puts row.join(' ')
  end
end

end
# Refactored Solution



#DRIVER CODE (I.E. METHOD CALLS) GO BELOW THIS LINE
board = [[47, 44, 71, 8, 88],
        [22, 69, 75, 65, 73],
        [83, 85, 97, 89, 57],
        [25, 31, 96, 68, 51],
        [75, 70, 54, 80, 83]]

new_game = BingoBoard.new(board)

ball = new_game.generate_call
new_game.check_call(*ball)
new_game.disp_board
# new_game.disp_board
# new_game.disp_board

#Reflection

