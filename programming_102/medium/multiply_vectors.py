
#1

things = ["lamp", "imac", "keyboard", "iphone"]


for i in range(len(things)):
    print(i, things[i])


#######################################

#2


# 1. Multiply Vectors
#Given two lists of numbers of the same length, create a new list by multiplying the pairs of numbers in corresponding positions in the two lists. Example:



num1 = [2,4,5]
num2 = [2,3,6]
equals = []

for i in range(len(num1)):
    equals.append(num1[i] * num2[i])
print(f"{num1} X {num2} = {equals}")







