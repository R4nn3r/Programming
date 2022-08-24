class Dog(object): 
    """A simple attempt to model a dog"""
    
    def __init__(self,name ,age):
        self.name = name
        self.age = age 
        
        
    def sit(self):
        print(f"{self.name} is now Sitting!")
    
    def roll(self):
        print(f"{self.name} is now Rolling!!")


def main():
    """Making and instance from a class"""
    my_dog = Dog("lion", 2)
    
    
    """Accessing attributes"""
    print(f"Name: {my_dog.name}")
    print(f"Age: {my_dog.age} Year's old.")
    
    
    """ Calling methods """
    my_dog.sit()
    my_dog.roll()
    
    
    # check
    
if __name__ == "__main__":
    main()
