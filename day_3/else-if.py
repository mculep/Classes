
# Notes
#------------------------------------------------
#age = input("How old are you?\n")
#if int(age) >= 21:

#age = int(input("How old are you?\n"))

#if age == 21:
 #   print("You are a great age to party.")
#elif age >= 21:
 #   print("You are old enough")
#else:
 #   print("You are not old enough")
#------------------------------------------------
#Exercise

#Create a program that prompts the user for a number and compare that number with random number of your choice.
#If the number is too high tell the user.
#If the number is too low tell the user.
#If the number is correct tell the user.

num = input("Pick a number: ")

if int(num) == 40:
    print("The number you picked is correct!") 
elif int(num) >= 40:
    print("The number you picked is high.") 
else:
    print("The number you picked is too low.")
