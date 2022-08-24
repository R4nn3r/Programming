def main():
    greet_ = input("Greeting: ")
    value_ = value(greet_)
    print(f"${value_}")

def value(greeting):

    greeting = greeting.strip().lower()
     # To check if the first word is a hello separated by a comma
    greet_check = greeting.split(",")
    greet_check = greet_check[0]

    # To check if the first word is a hello but separated by a space
    greet_check_2 = greeting.split(" ")
    greet_check_2 = greet_check_2[0]

     # To check if the first letter is an h
    first_letter_check = greeting[0]

    if ((greeting == "hello") or (greet_check == "hello") or (greet_check_2 == "hello")):
        return 0
    # if greeting starts with "h" output $20
    elif (first_letter_check == "h"):
        return 20
    else:
        # if greating starts with anything else output $100
        return 100


if __name__ == "__main__":
    main()