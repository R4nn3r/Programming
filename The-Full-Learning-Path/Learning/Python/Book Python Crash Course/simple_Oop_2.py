# First Class
class Car:
    def __init__(self, make, model, year):
        """Initialize attributes to describe a car."""
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 333   
        
    def get_descriptive_name(self):
        """Return a neatly formatted descriptive name."""
        long_name = f"{self.year} {self.make} {self.model}"
        return long_name.title()
        
    def read_odometer(self):
        """Print a statement showing the car's mileage."""
        print(f"This car has {self.odometer_reading} miles on it.")
        
    def update_odometer(self, mileage):
        if self.odometer_reading <= mileage:
            self.odometer_reading = mileage
        else:
            print("Rolling the Odometer is punshiable by Law!")
            
    def increment_odometer(self, miles):
        if miles > 0:              
            self.odometer_reading += miles
        else:
            print("Rolling the Odometer is punshiable by Law!")

def main():
    """creating the instance for the class restaurant"""
    my_new_car = Car('audi', 'a4', 2019)
    
    """accessing the instances of the class Restaurants"""
    print(my_new_car.get_descriptive_name())

    
    # """calling the methods from the class"""
    # """Directly"""
    # my_new_car.odometer_reading = 23
    # my_new_car.read_odometer()
    
    # """Using the method update_odometer"""
    # my_new_car.update_odometer(int(input("What's the Current Mileage on the odometer: ")))
    # my_new_car.read_odometer()

    """Using the incremanting method"""
    my_new_car.increment_odometer(int(input("What's the Increment in Mileage on the odometer: ")))
    my_new_car.read_odometer()

if __name__ == "__main__":
    main()