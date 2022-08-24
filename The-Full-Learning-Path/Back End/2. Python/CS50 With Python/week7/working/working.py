import re
import sys


def main():
    print(convert(input("Hours: ")))

    #   9:00 AM to 5:00 PM
    #   9 AM to 5 PM

def convert(s):
    list = []
    if line := re.search(r"^(([0-9][0-2]*):*([0-5][0-9])?) ([A|P]M) to (([0-9][0-2]*):*([0-5][0-9])?) ([A|P]M)$",s):
        parts = line.groups()

        from_h, from_m = convert_12_24(parts[1],parts[2],parts[3])
        to_h, to_m = convert_12_24(parts[5],parts[6],parts[7])

        if from_m >= 60 or to_m >= 60:
            raise ValueError
        else:
            if from_m == to_m and to_m == 0:
                return f"{from_h:02}:00 to {to_h:02}:00"
            else:
                return f"{from_h:02}:{from_m:02} to {to_h:02}:{to_m:02}"

    else:
        raise ValueError


def convert_12_24(hours, minutes, am_pm):
    hours = int(hours)
    if minutes is not None:
        minutes = int(minutes)

        if am_pm == "PM":
            if hours == 12:
                hours = 12
            else:
                hours += 12
        else:
            if hours == 12:
                hours = 0
            else:
                hours = hours
        return hours,minutes
    else:
        minutes = 0
        if am_pm == "PM":
            if hours == 12:
                hours = 12
            else:
                hours += 12
        else:
            if hours == 12:
                hours = 0
            else:
                hours = hours
        return hours,minutes


if __name__ == "__main__":
    main()