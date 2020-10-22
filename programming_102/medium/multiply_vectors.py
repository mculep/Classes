

#######################################



# 1. Multiply Vectors
#Given two lists of numbers of the same length, create a new list by multiplying the pairs of numbers in corresponding positions in the two lists. Example:
#[2, 4, 5] x [2, 3, 6] = [4, 12, 30]


num1 = [2,4,5]
num2 = [2,3,6]
equals = []

for i in range(len(num1)):
    equals.append(num1[i] * num2[i])
print(f"{num1} X {num2} = {equals}")







