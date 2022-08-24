#get the user input for the question for the answer to the Great Question of Life, the Universe and Everything,
# make sure to strip space form the front and end of the string plus make sure the input is all in
# lower or upper case so it can be easier to figure out the conditon

test = input("What is the Answer to the Great Question of Life, the Universe, and Everything? ").lower().strip()


    # The question that must output Yes and No

if (test == "42"):
    print("Yes")
elif (test == "forty-two"):
    print("Yes")
elif (test == "forty two"):
    print("Yes")
else:
    print("No")

