# First Class
class Restaurant(object):
    """simple model for a restaurant"""
    def __init__(self, res_name, cuisine):
        self.res_name = res_name
        self.cuisine = cuisine 
        
    
    def describe_restaurant(self):
        return f"Name: {self.res_name} \nCuisine: {self.cuisine}"
    
    def open_restaurant(self):
        return f"{self.res_name} is Open!"
    
# Second Class
class User(object):
    """Simple user model"""
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
    
        
    def describe_user(self):
        return f"First-Name: {self.first_name} \nLast-Name: {self.last_name}"
    
    def greet_user(self):
        return f"{self.last_name} {self.first_name} Weclome to Our Beautfull Hotel have a wonderfull Time!"
    
    
        

def main():
    """creating the instance for the class restaurant"""
    restaurant = Restaurant("Ras Hotel", "Doro Wet")
    restaurant_1 = Restaurant("Hiliton", "Ya Gurage Ketfo")
    restaurant_2 = Restaurant("Hayat regency", "Ya Oromo genfo with Milk")
    
    """accessing the instances of the class Restaurants"""
    print("Restaurants Available: ")
    print(f"Name: {restaurant.res_name} \nCuisine: {restaurant.cuisine}")
    print(f"Name: {restaurant_1.res_name} \nCuisine: {restaurant_1.cuisine}")
    print(f"Name: {restaurant_2.res_name} \nCuisine: {restaurant_2.cuisine}")
    
    
    """calling the methods from the class"""
    print(restaurant.open_restaurant())
    print(restaurant_1.open_restaurant())
    print(restaurant_2.open_restaurant())
    
    
    
    """creating the instance for the class User"""
    user = User("Helina", "Yonatan")
    
    """accessing the instances of the class User"""
    
    print(f"First-Name: {user.first_name} \nLast-Name: {user.last_name}")
    
    """calling the methods from the class"""
    print(user.greet_user())


    

if __name__ == "__main__":
    main()