
#1
# Create a program that has a class named Vehicle.
# Mae the Vehicle have a 'category' which can be anything like, sport, truck, 
# motorcycle, minivan.
# Make the Vehicle class have 'wheels' as an attribute.
# Make the Vehicle class have 4 as the default value for the class.
# Create 5 different instances of the class with at least one being a motorcycle.

class vehicle:
    def__init__(self, category, wheels = 4):
        self.category = category
        self.wheels = wheels

    

toyota = vehicle("truck")
harley = vehicle("motorcycle")
tesla = vehicle("electric")
mustang = vehicle("sport")

print(toyta.category)



