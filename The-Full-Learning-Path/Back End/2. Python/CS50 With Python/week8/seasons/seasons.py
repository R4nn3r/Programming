from datetime import date
from sys import exit
import re

    
def main():
    birth_, today = get_date()
    
    x,y,z = birth_.split("-")
    a,b,c = today.split("-")

  
    years = int(a) - int(x)
    weeks = int(b) - int(y)
    days = int(c) - int(z)

    print(years, weeks, days)
    
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