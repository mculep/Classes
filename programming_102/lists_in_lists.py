#1
# Write a program that has a list of shopping lists that where each list is for a different food group.
# Print each full list on a seperate line.

oahu = [
["waikiki", "bowls", "kailua"],
["pearlridge", "windward",],
["oahu", "maui", "kauai"]
]
print(oahu[0])
print(oahu[1])
print(oahu[2])



#2

# Using the code from the previous exercise, have each grouping have a title 
# with the number in the title and each item of the list have a number in front of the item.
# (bonus) Have each of the titles of the main grouping be in a seperate list that gives 
# the name to the heading.

#####################
shopping_names = ["Veggies", "Cold Items", "Junk Food"]
shopping_lists = [
    ['Corn', 'Potatoes', 'Tomatoes'],
    ['milk', 'eggs', 'cheese', 'yogurt'],
    ['frozen pizza', 'popsicle']]
i = 0
for name in shopping_names:
    j = 0
    print("%i. %s" % (i+1, name))
    for food in shopping_lists[i]:
        print("   %i. %s" % (j+1, food))
        j += 1
    i += 1

##############################


index = 0
k = 0
places = ["Beaches", "Malls", "Islands"]

for i in places:
    print("%i. %s" % (index+1, i))
    index += 1




