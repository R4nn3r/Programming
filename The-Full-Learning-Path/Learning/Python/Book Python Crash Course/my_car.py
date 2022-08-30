from Car_class import Car, ElectricCar

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

        
""" calling the methods from the class """
""" Directly """
    # my_new_car.odometer_reading = 23
    # my_new_car.read_odometer()
            
"""Using the method update_odometer"""
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
