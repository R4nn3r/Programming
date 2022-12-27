""" 
    Student
    Course  
        - max/avg/min grade 
"""
class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

    def get_grade(self):
        return self.grade

class Course():
    def __init__(self, name, max_students = 3):
        self.name = name
        self.max_students = max_students
        self.students = []

    def add_student(self, student):
        self.students.append(student)

    def list_students(self):
        for i in range(len(self.students)):
            print(i, ": ",self.students[i].name)

    def get_avr(self):
        sum = 0
        for i in range(len(self.students)):
            sum += self.students[i].grade
        return sum / len(self.students)
    def get_max(self):
        max = 0
        for i in range(len(self.students)):
            if max > self.students[i].grade: 
                max = max 
            else:
                max = self.students[i].grade
        return max
    def get_min(self):
        min = self.students[0].grade
        for i in range(len(self.students)):
            if min < self.students[i].grade: 
                min = min 
            else:
                min = self.students[i].grade
        return min

def main():
    s = Student("Clint", 23, 90)
    d = Student("Dell", 23, 85)
    r = Student("Dell", 23, 100)
    t = Student("Dell", 23, 45)
    c = Course("OOP")

    c.add_student(s)
    c.add_student(s)
    c.add_student(t)
    c.add_student(d)
    c.add_student(r)

    c.list_students()
    print(c.get_avr())
    print(c.get_max())
    print(c.get_min())

if __name__ == '__main__':
    main()