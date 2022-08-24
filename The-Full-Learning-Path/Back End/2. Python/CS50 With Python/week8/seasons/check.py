from datetime import date
from sys import exit
import re


class Date:
    def __init__(self, date):
        self.date = date

    def __str__(self):
        return self.date

    
    # classmethod to sub the date's
    @classmethod 
    def __sub__(self, other):
        age = other.date - self.date
        return Date(age)

    
def main():
    birth_, today = get_date()
    date = Date(birth_)
    date1 = Date(today)
    print("Date of Birth:-",date, "Today's Date:-" ,date1)


    # age = date1 - date
    # print("Age: ",birth_day)

    
def get_date():
    #YYYY-MM-DD
    val = input("Date of Birth: ")
    if date_ := re.search(r"^([0-9]*)-([0-1][0-2])-([0-3][0-9])$",val):
        b_date = date.fromisoformat(val)
        t_date = date.today()

        return f"{b_date}", f"{t_date}"
    else:
        exit("Invalid date")





if __name__ == "__main__":
    main()