# Virus Predictor

# I worked on this challenge [by myself, with: ].
# We spent [1.25] hours on this challenge.

# EXPLANATION OF require_relative
# Makes contents of named file accessible (but does not reload them if they have been already loaded)
#

require_relative 'state_data'


class VirusPredictor

  # Initializes instance variables to input arguments
  def initialize(state_of_origin, population_density, population)
    @state = state_of_origin
    @population = population
    @population_density = population_density
  end


  # Public method that calls private methods predicted_deaths and speed_of_spread
  def virus_effects
    predicted_deaths
    speed_of_spread
  end

  private


  # Takes state, population density, and population, prints out number of deaths during outbreak.
  def predicted_deaths

        number_of_deaths =  if @population_density >= 200
                              (@population * 0.4)
                            elsif @population_density >= 150
                              (@population * 0.3)
                            elsif @population_density >= 100
                              (@population * 0.2)
                            elsif @population_density >= 50
                              (@population * 0.1)
                            else
                              (@population * 0.05)
                            end

        number_of_deaths = number_of_deaths.floor

    print "#{@state} will lose #{number_of_deaths} people in this outbreak"

  end

  # Takes population density and state, prints out number of months to spread. Higher density = fewer months
  def speed_of_spread #in months
    # We are still perfecting our formula here. The speed is also affected
    # by additional factors we haven't added into this functionality.
    # speed = 0.0

    if @population_density >= 200
      speed = 0.5
    elsif @population_density >= 150
      speed = 1
    elsif @population_density >= 100
      speed = 1.5
    elsif @population_density >= 50
      speed = 2
    else
      speed = 2.5
    end

    puts " and will spread across the state in #{speed} months.\n\n"

  end

end

#=======================================================================

# DRIVER CODE
 # initialize VirusPredictor for each state


# 1. Take an existing piece of driver code
# 2. Turn it into a template, by replacing the parts that change with a variable.
# 3. Use this template inisde a loop.
# 4. Refactor your template after its working, not before.


# For EACH item in STATE_DATA
#

# hash.each do |key, value|



STATE_DATA.each do |state_name, state_information|
  current_state = VirusPredictor.new(state_name, state_information[:population_density], state_information[:population])
  current_state.virus_effects
end



# alabama = VirusPredictor.new("Alabama", STATE_DATA["Alabama"][:population_density], STATE_DATA["Alabama"][:population])
# alabama.virus_effects

# jersey = VirusPredictor.new("New Jersey", STATE_DATA["New Jersey"][:population_density], STATE_DATA["New Jersey"][:population])
# jersey.virus_effects

# california = VirusPredictor.new("California", STATE_DATA["California"][:population_density], STATE_DATA["California"][:population])
# california.virus_effects

# alaska = VirusPredictor.new("Alaska", STATE_DATA["Alaska"][:population_density], STATE_DATA["Alaska"][:population])
# alaska.virus_effects



#=======================================================================
# Reflection Section

# -What are the differences between the two different hash syntaxes shown in the state_data file?
# The first uses the "rocket" assignment operator, and the second is a sugared version you can use instead of the rocket, as long as your key is a symbol. In that case, you move the colon from the front to the end of the symbol name. So what's actually :key => value comes to read like this: key: value.

# -What does require_relative do? How is it different from require?
# require_relative imports the contents of the linked file to your coding environment, just as if they were part of the same file. require_relative differs from require in that it specifies a file path relative to the file containing it.

# -What are some ways to iterate through a hash?
# Hashes don't have indices, so obviously looping through a range of numbered indices won't work. But you can still use each, map, inject, and other enumerable methods. You can also write a for loop like this: for i in hash_name {p i}, and it works the same way as hash_name.each {|i| p i}.

# -When refactoring virus_effects, what stood out to you about the variables, if anything?
# When calling the private methods, it was passing instance variables to them, which was totally unnecessary since those private methods had access to those instance variables too. Furthermore, the private methods were just using the instance variables anyway and totally ignoring the parameters it had received. Not only was the whole thing needless, it was a waste of resources to create a new set of local variables for the same data.

# -What concept did you most solidify in this challenge?
# I think I picked up somewhat better practices in terms of refactoring code. When I was the driver and we were introducing something new to the code, our guide caught me refactoring a couple of existing statements when we shouldn't have been monkeying with what worked yet. Definitely things will go a lot better if I learn to keep these steps as isolated from one another as possible, and not refactor until I already have a functioning solution.