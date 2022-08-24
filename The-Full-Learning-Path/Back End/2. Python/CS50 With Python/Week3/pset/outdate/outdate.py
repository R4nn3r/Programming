def main():
    year, month, day = get_date('Date: ')
    
    x = int(year)
    y = int(month)
    z = int(day)

    # output that same date in YYYY-MM-DD format.

    if y <= 9 and z <= 9:
        print(f'{x}-0{y}-0{z}')
    elif y >= 10 and z >= 10:
        print(f'{x}-{y}-{z}')
    elif y <= 9 and z >= 10:
        print(f'{x}-0{y}-{z}')
    elif y >= 10 and z <= 9:
        print(f'{x}-{y}-0{z}')


def get_date(prompt):
    date_list = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
    p = '/'

    # input is not a valid date in either format, prompt the user again
    while True:
        try:
            date_in = input(prompt).title()
            if p in date_in:
                month, day, year = date_in.split('/')

                if 1 <= int(month) <= 12 and 1 <= int(day) <= 31:
                    return first_form(date_in)
                else:
                    raise ValueError


            else:
                old_month, old_day, year = date_in.split(" ")

                day = old_day.split(',')
                day = day[0]
                day = int(day)

                if old_month in date_list:
                    month  = date_list.index(old_month)
                    month += 1

                if 1 <= int(month) <= 12 and 1 <= int(day) <= 31:
                    return sec_form(date_in, month)
                else:
                    raise ValueError
        except ValueError:
            pass


def first_form(date_in):
    ans_list = []

    month, day, year = date_in.split('/')

    ans_list.append(year)
    ans_list.append(month)
    ans_list.append(day)

    return ans_list

def sec_form(date_in, month_):
    ans_list = []
    month, old_day, year = date_in.split(" ")
    month = month_ # month after getting the index from the list and adding 1 to it

    _day_ = "".join(str(i) for i in old_day)

    old_day = old_day.split(',')
    c = old_day[0]
    day_num = int(c)

    if day_num >= 10:
        new_day = _day_.replace(_day_, _day_[0:2])
    else:
        new_day = _day_.replace(_day_, _day_[0])

    ans_list.append(year)
    ans_list.append(month)
    ans_list.append(new_day)

    return ans_list

main()


