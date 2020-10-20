# Exercise 1.

# Using a while loop create a program that prints the values of your favorite movie stars.
# have a number in front of the printed name.

movie_stars = ["Eddie Murphy", "Ryan Reynolds", "Julia Robers"]
i = 0

while i < len(movie_stars):
    print(f"{i+1}. {movie_stars[i]}")
    i += 1


#################################

# Exercise 2.

# Using a for loop, re-do the above exercise.
# (hint) you still need to create a variable that is incrimented.

movie_stars = ["Eddie Murphy", "Ryan Reynolds", "Julia Robers"]
i = 0

for person in movie_stars:
    print(f"{i+1}. {person}")
    i += 1


#################################

# Exercise 3.

# Create a program that will add the values of a list of numbers, and then print out the results.
# (hint) You will need to create a variable to hold the current value.
# Repeat with several different lists of numbers of different lengths.

num = [5, 5, 5]
num2 = 0

for i in num:
    num2 += i
print(num2)


num3 = [1, 100, 60, 30]
num4 = 0

for j in num3:
    num4 += j
print(num4)