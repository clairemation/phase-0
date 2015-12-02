puts 'Input first name:'
first_name = gets.chomp
puts 'Input middle name'
middle_name = gets.chomp
puts 'Input last name:'
last_name = gets.chomp

puts 'Salutations, ' + first_name + ' ' + middle_name + ' ' + last_name + '!'

puts 'Now, what\'s your favorite number?'
fav_num = gets.chomp.to_i
better_num = fav_num + 1
puts 'Are you sure ' + better_num.to_s + ' isn\'t better?'