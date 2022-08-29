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

    #  inherits from the restaurant class
class IceCreamStand(Restaurant):
    def __init__(self, res_name, cuisine):
        super().__init__(res_name, cuisine)
        self.flavors = ["baso", "bakolo", "jelebo", "mango"]
        
    def list_of_flavors(self):
        for flavors in self.flavors:
            print(f"{flavors} ",end="")
        print()  
        
        
          
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
    
class Privileges():
    def __init__(self):
        self.privileges = ["can add post", "can delete post", "can ban user"]
    
    
        
    def show_privileges(self):
        print("Administrator") 
        for _ in self.privileges:
            print(f"{_} ", end="| ")
        print()
        
    
    
    #  inherits from the user class 
class Admin(User):
    def __init__(self, first_name, last_name):
        super().__init__(first_name, last_name)
        self.privileges = Privileges()
    
    


        

def main():
    """creating the instance for the class restaurant"""
    restaurant = Restaurant("Ras Hotel", "Doro Wet")
    restaurant_1 = Restaurant("Hiliton", "Ya Gurage Ketfo")
    restaurant_2 = Restaurant("Hayat regency", "Ya Oromo genfo with Milk")
    restaurant_3 = IceCreamStand("Meles medeber", "Ice Cream's")
    
    # """accessing the instances of the class Restaurants"""
    # print("Restaurants Available: ")
    # print(f"Name: {restaurant.res_name} \nCuisine: {restaurant.cuisine}")
    # print(f"Name: {restaurant_1.res_name} \nCuisine: {restaurant_1.cuisine}")
    # print(f"Name: {restaurant_2.res_name} \nCuisine: {restaurant_2.cuisine}")
    
    
    """calling the methods from the class"""
    # print(restaurant.open_restaurant())
    # print(restaurant_1.open_restaurant())
    # print(restaurant_2.open_restaurant())
    
    print(restaurant_3.open_restaurant())
    restaurant_3.list_of_flavors()
    
    
    
    
    
    # """creating the instance for the class User"""
    user = User("abebe", "lema")
    user_ = Admin("Helina", "Yonatan")

    
    # """accessing the instances of the class User"""
    
    print(f"First-Name: {user.first_name} \nLast-Name: {user.last_name}")
    
    # """calling the methods from the class"""
    print(user.greet_user())
    user_.privileges.show_privileges()

    

if __name__ == "__main__":
    main()