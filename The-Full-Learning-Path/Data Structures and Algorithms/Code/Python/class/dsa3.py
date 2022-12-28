class person:
    def __init__(self, name, age, sex):
        self._name = name
        self._age = age
        self._sex = sex

class teacher(person):
    def __init__(self, name, age, sex, Id, dep):
        super().__init__(name, age, sex)
        self._Id = Id
        self._dep = dep


class stu(teacher):
    def __init__(self, name, age, sex, Id, dep, gpa):
        super().__init__(name, age, sex, Id, dep)
        self._gpa = gpa

    def get_name(self):
        return self._Id


per1 = person("Glow Bob", 50, "M")

tech1 = teacher("Floyd.M",38, "M", "101/Tech", "Computer Engineering")

stu1 = stu("Yonatan Afewerk", 22, "M", "917/SWE", "Software engineering", 4.00)



# print(per1._name)
# print(tech1._name)
# print(stu1._name)
print(stu1.get_name())