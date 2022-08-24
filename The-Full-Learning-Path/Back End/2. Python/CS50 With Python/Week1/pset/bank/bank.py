# Prompt the user for a greeting make sure to ignore any leading or following whitespaces and make it all lowercase for convinience
greet = input("Greeting: ").lower().strip()

 # To check if the first word is a hello separated by a comma
greet_check = greet.split(",")
greet_check = greet_check[0]

# To check if the first word is a hello but separated by a space
greet_check_2 = greet.split(" ")
greet_check_2 = greet_check_2[0]


 # To check if the first letter is an h
first_letter_check = greet[0]

# If greeting starts with "hello" output $0
# You can slice() the string to find out if the start of the input is hello or not

if ((greet == "hello") or (greet_check == "hello") or (greet_check_2 == "hello")):
    print("$0")
    # if greeting starts with "h" output $20
elif (first_letter_check == "h"):
    print("$20")
else:
    # if greating starts with anything else output $100
    print("$100")




