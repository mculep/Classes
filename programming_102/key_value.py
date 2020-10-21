

#######################

#1
# Create a program that starts with an empty dictionary.
# Add 3 different key value pairs to the empty dictionary.



movie = {
      "name":"Star Wars",
      "episode":4,
      "year":"1977"
  }

print(movie)

#######################

#2
# Create a program with a dictionary called 
# person.The person dictionary needs to 
# have the keys, first_name, last_name, age, hair_color.

# Print each one of these key/values pairs without 
# directly using the key's name as a string by using a for loop.

# After each key value pair, print out a sentence using 
# each one of the keys.

# Hello Clint Fleetwood. Since you are 38 years old you are 
# too old to ride this ride, but you do have nice brown hair.



person = {
    "first_name":"Samson",
    "last_name":"Ulep",
    "age":"12",
    "hair_color":"yellow"
}

for dog in person:
    print(f"{dog}, : {person[dog]}")

print(f'Hello, {person["first_name"]} {person["last_name"]}. Since you are {person["age"]} years old, you are too old to ride this ride, but you do have nice {person["hair_color"]} hair.')

#######################

# #3
# Create a program that has a list of dictionaries of 
# people, with each dictionary including name, phone, email.
# For each dictionary print the items in the dictionary.

people = [
    {
        "name":"Clyde",
        "phone": "808.999.9999",
        "email":"c@yahoo.com" 
    },

    {
        "name":"Jackie",
        "phone":"808.777.7777",
        "email":"j@yahoo.com" 
    },

    {
        "name":"Michael",
        "phone":"808.222.2222",
        "email":"m@yahoo.com" 
    }
]


print(people)