class Student(object):
    def __init__(self, name, house):
        self.name = name
        self.house = house 

    def __str__(self):
        return f"{self.name} from {self.house}"

    @classmethod
    def get(cls):
        name = input("Name: ")
        house = input("House: ")
        return cls(name, house) 

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        if not name:
            raise ValueError("Missing Name!")
        self._name = name

    @property
    def house(self):
        return self._house

    @house.setter
    def house(self, house):
        if house not in ["london","ethiopia","paris","france"]:
            raise ValueError("Invalid house!")
        self._house = house 

    

def main():
    print(Student.get())



if __name__ == "__main__":
    main()