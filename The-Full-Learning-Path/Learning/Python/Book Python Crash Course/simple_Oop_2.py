from logging import exception
import sys
# First Class
class Car:
    def __init__(self, make, model, year):
        """Initialize attributes to describe a car."""
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 333   
        self.gas_capacity = 100
        self.current_gas = 45
        
    def get_descriptive_name(self):
        """Return a neatly formatted descriptive name."""
        long_name = f"{self.year} {self.make} {self.model} super class method"
        return long_name.title()
        
    def read_odometer(self):
        """Print a statement showing the car's mileage."""
        print(f"The {self.make} car has {self.odometer_reading} miles on it.")
        
    def update_odometer(self, mileage):
        if self.odometer_reading <= mileage:
            self.odometer_reading = mileage
        else:
            print("Rolling the Odometer is punishable by Law!")
            
    def increment_odometer(self, miles):
        if miles > 0:              
            self.odometer_reading += miles
        else:
            print("Rolling the Odometer is punishable by Law!")
            
    def fill_gas_tank(self):
        """Most cars do have gas tanks."""
        print(f"Amount: {self.current_gas}          Capacity: {self.gas_capacity}")
        try_ = 0
        while True:
            
            try:
                amount = int(input("Enter How much to fill: "))
                if (amount + self.current_gas) > self.gas_capacity:
                    try_ += 1
                    if try_ == 3:
                        print(f"Are you dumb, stupid or both?? must add to {self.gas_capacity}... Last Chance!")
                    elif try_ == 4:
                        sys.exit("Great you have out down your self you Donut")
                
                else:
                    self.current_gas = amount + self.current_gas
                    sys.exit(f"Gas Filled... Amount: {self.current_gas}")
            except ValueError:
                sys.exit("Really you used words?? Fuckin hell Some people suprise me too Much next time use the numbers good boy.")
                    
""" Inheritance creating a class the takes from the above car class"""
class ElectricCar(Car):
    def __init__(self, make, model, year, engine_type):
        super().__init__(make, model, year)
        self.engine_type = engine_type
        self.battery_size = 275
    
    
    def tesla_go(self):
        print(f"my {self.make} {self.model} has a engine which is a {self.engine_type}")    
    
    def describe_battery(self):
        """Print a statement describing the battery size."""
        print(f"This car has a {self.battery_size}-kWh battery.")
    
    def get_descriptive_name(self):
        """Return a neatly formatted descriptive name."""
        long_name = f"{self.year} {self.make} {self.model} From the child Class."
        return long_name.title()
    
    def fill_gas_tank(self):
        """Electric cars don't have gas tanks."""
        print("This car doesn't need a gas tank fill! you can guess why since its electric dumboo!")

def main():
    """creating the instance for the class restaurant"""
    my_new_car = Car('audi', 'a4', 2019)
    my_new_car_ = ElectricCar('tesla', 'model s', 2019, "3-phase AC")
    
    
    """accessing the instances of the class Restaurants"""
    print(my_new_car.get_descriptive_name())
    print(my_new_car_.get_descriptive_name())
    
    
    print("\n\n")
    
    my_new_car_.fill_gas_tank()
    
    
    print("\n\n")

    my_new_car.fill_gas_tank()

    
    # """calling the methods from the class"""
    # """Directly"""
    # my_new_car.odometer_reading = 23
    # my_new_car.read_odometer()
    
    # """Using the method update_odometer"""
    # my_new_car.update_odometer(int(input("What's the Current Mileage on the odometer: ")))
    # my_new_car.read_odometer()

    """Using the incrementing method"""
    # my_new_car.increment_odometer(int(input("What's the Increment in Mileage on the odometer: ")))
    # my_new_car.read_odometer()
    # my_new_car_.read_odometer()
    
    
    # my_new_car_.tesla_go()
    # my_new_car_.describe_battery()
    
    

if __name__ == "__main__":
    main()