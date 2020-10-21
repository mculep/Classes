
########################

#1
# Create a program that has a function that will multiply 
# two numbers together and print out the results.

# Make the program properly handle an exception if 
# something besides a number is passed as an argument.
# Have it print out 3 different sets of numbers

def num(num1, num2):
    print(num1 * num2)

num(1 ,3)
num(4, 15)
num(30,30)


########################

# #2
# Create a program that has a function that will accept 3 arguments as title, genre, year and then print out the values in list format.

    # 1. Title : Star Wars - A new Hope
    # 2. Genre : Sci-Fi
    # 3. Year  : 1977



def movie(Title, Genre, Year):
    print(f"1. Title: {Title}")
    print(f"2. Genre: {Genre}")
    print(f"3. Year: {Year}")

movie("Star Wars - A new hope", "Sci-Fi", "1977")    



#############################

# #3
# Create a program that does the same thing as above, but the 
# function only accepts a single argument to get the same results.
# (hint) - You will need to use a datatype other than a string 
# in the argument.


def movie(movie_item):
    Title = movie_item[0]
    Genre = movie_item[1]
    Year = movie_item[2]

    print(f"1. Title: {Title}")
    print(f"2. Genre: {Genre}")
    print(f"3. Year: {Year}")

movie("Star Wars - A new hope", "Sci-Fi", "1977")    

