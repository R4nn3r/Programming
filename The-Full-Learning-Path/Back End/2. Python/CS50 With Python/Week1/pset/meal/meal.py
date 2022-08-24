def main():
    # prompts the user for a time user’s input will be
    # formatted in 24-hour time as #:## or ##:##

    time_ = input("What time is it? ")

    # converted time
    time__= convert(time_)


    #outputs whether it’s breakfast time, lunch time, or dinner time and meal’s time range is inclusive
    #If it’s not time for a meal, don’t output anything at all.
    #breakfast between 7:00 and 8:00, lunch between 12:00 and 13:00, and dinner between 18:00 and 19:00

    if ((time__ >= 7.0) and (time__ <= 8.0)):
        print("breakfast time")
    elif ((time__ >= 12.0) and (time__ <= 13.0)):
        print("lunch time")
    elif ((time__ >= 18.0) and (time__ <= 19.0)):
        print("dinner time")


def convert(time):
    #converts time, a str in 24-hour format, to the corresponding number of hours as a float
    #"7:30" (i.e., 7 hours and 30 minutes), convert should return 7.5 (i.e., 7.5 hours)

    time = time.replace(":", ".")
    time = float(time)
    return time


if __name__ == "__main__":
     main()
