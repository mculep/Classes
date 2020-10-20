####################################
#1 

# Create a program that has a list of at least 3 of your favorited foods in order and assign that list to a variable named "favorite_foods".

# print out the value of your favorite food by accessing by it's index.
# print out the last item on the list as well.

####################################

food = ["Poke", "Acai", "Burger"]
print(food[:])
print(food[2])

####################################
#2
# Create a program that contains a list of 4 different "things" around you.

# Print out the each item on a new line with the number of it's index in front of the item.
# 0. Coffee Cup
# 1. Speaker
# 2. Monitor
# 3. Keyboard
####################################

things = ["lamp", "imac", "keyboard", "iphone"]


for i in range(len(things)):
    print(i, things[i])


####################################
#3
# Using the code from exercise 2, prompt the user for which item the user thinks is the most interesting. Tell the user to use numbers to pick. (IE 0-3).

# When the user has entered the value print out the selection that the user chose with some sort of pithy message associated with the choice.
# "You chose Coffee Cup, You must like coffee!"
####################################


things = ["lamp", "imac", "plant", "iphone"]

for i in range(len(things)):
    print(f"{i}. {things[i]}")

pick = int(input("Pick the number from the list, that you think is the most interesting.\n"))

if pick == 0:
    print("You chose lamp, you is lit!")

elif pick == 1:
    print("You chose imac, mac is better than pc!")

elif pick == 2:
    print("You chose plant, can you water it?")

elif pick == 3:
    print("You chose iphone, call me!")    
else:
    print("Pick only number 0-3, please!")