=begin --~~**Reflection**~~--

-What was the most interesting and most difficult part of this challenge?
Somehow the trickiest thing for me was populating the groups with student names from the list once I had come up with the number of groups and their sizes. I thought it would be straightforward but I was just getting bugs all over the place and I had to build it up in very small steps until it finally worked.

-Do you feel you are improving in your ability to write pseudocode and break the problem down?
I think so, though my code is still changing significantly from the pseudocode once I get down to coding. Like I don't immediately sense what the code can do until I have my hands on it directly.

-Was your approach for automating this task a good solution? What could have made it even better?
I feel pretty sure that there must be a shorter and more straightforward way to do this. For one thing, I'd expect it to make heavier use of enumeration than it did, which hints to me that there's something I've missed. Ultimately I populated the group lists by popping names from the full studen list iteratively, and I feel like there is a way right on the tip of my tongue to just split the student list into groups in-place, or pop off names in whole groups at once.

-What data structure did you decide to store the accountability groups in and why?
I had an array representing the whole class, filled with arrays representing the individual groups. That seemed to be the most logical way to do it, and provided the easiest way to iterate across.

-What did you learn in the process of refactoring your initial solution? Did you learn any new Ruby methods?
I wasn't able to use any completely new methods, but I got a better grasp of array and enumerable methods that I'd been shaky on.


=end


=begin Pseudocode

input: array of student names
output: array of arrays containing 4 or 5 student names

groupsize = n / 5 => x groups with one remainder group
if n % 5 < 3
  subtract one from each group and add one to remainder group until remainder group is no less than 1 less than average group size

ex: 32 students
32 / 5 => 6 groups of 5, 1 group of 2
||||/  ||||/  ||||/  ||||/   ||||/  ||||/ ||
array representing group sizes: [5, 5, 5, 5, 5, 5, 2]
move 1 from each group to remainder group until average size minus remainder group size <= 1.0
avg. group size: 4.57
[5, 5, 5, 5, 5, 5, 2] - avg. - remaindersize = 2.57
[4, 5, 5, 5, 5, 5, 3] - avg. - remaindersize = 1.57
[4, 4, 5, 5, 5, 5, 4] - avg. - remaindersize = .57 <-stop now

Now populate student arrays acc. to these numbers

for each number in groupsize array
that number of times:
  pop student from studentlist array and add to student group array in grouplist

=end

def make_groups(all_students)

  #calculate how many groups of 5, with one group of leftovers
  num_full_groups = all_students.size / 5
  leftovers = all_students.size % 5
  group_avg = all_students.size.to_f / num_full_groups

  #each entry in group_sizes represents one group - put 5 in each full one
  group_sizes = Array.new
  for i in 0...num_full_groups
    group_sizes[i] = 5
  end

  #if there's a leftover group- while its size is (1 or more) students less than average, move students into it from other groups one by one
  if leftovers != 0
    i = 0
    while ((group_avg - leftovers) >= 1)
      group_sizes[i] -= 1
      leftovers += 1
      if i.next == num_full_groups
        i = 0
      else
        i = i.next
      end
    end
    group_sizes << leftovers #add leftovers group to group_sizes list
  end

  #now we have an array of group sizes, ex: [4,4,5,5,4]
  #populate new groups_names array with arrays of student names of those sizes

  groups_names = Array.new
  groupcount=0
  group_sizes.cycle(1) do |i|
    groups_names[groupcount] = Array.new
    for j in 0...i
      groups_names[groupcount][j] = all_students.shift
    end
    groupcount += 1
  end

  groups_names

end

students = ["Alice", "Bob", "Charlie", "David", "Earl", "Francie", "Georgette", "Harriet", "Iris", "Julia", "Karl", "Leslie", "Mandy", "Norman", "Oswald", "Percy", "Quincy", "Richard", "Sam", "Trudy", "Ursula", "Victoria", "Winnie", "Xander", "Yolanda", "Zelda"]

make_groups(students)