#1
# Write a program that has a list of names.
# Add two new names to that list.
# Print the results.


names = ["Kelsey", "Kobe", "Caeleigh"]
more_names = ["Sage", "Adam"]
names2 = names + more_names
print(names2)

######################

#2
# Write a program that has 5 names in a list.
# Replace the items at index 2 and 4 with "Foo" and "Bar" respectively.

five_names = ["Kim", "Leon", "Patty", "Nick", "Jeremy"]
five_names[2] = "Foo"
five_names[4] = "Bar"
print(five_names)


######################

#3
# Write a program that has a list of 5 names.
# Loop through the array printing the item at index 0 and then removing that item from the array until there are no items in the array.
# (hint) This will use a while loop.


five_names2 = ["Marcia", "Jiye", "Joy", "Sherri", "Leimomi"]

i = 0

while i <len(five_names2):
    print(five_names2)
    del five_names2[i-1]
    print(five_names2)





######################
