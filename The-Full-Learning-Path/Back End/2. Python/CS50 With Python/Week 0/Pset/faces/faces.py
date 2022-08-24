 # import emoji to get the emoji faces 
import emoji

w = input("")

    # To make sure there are no spaces in the front and the back of the input we use strip()
word = w.strip()

    # checking the input agains out condition we will out put the right message to the user and
if (word == "Hello :)"):
    print("Hello", "\N{slightly smiling face}")
elif (word == "Goodbye :("):
    print("Goodbye", "\N{slightly frowning face}")
elif(word == "Hello :) Goodbye :("):
    print("Hello","\N{slightly smiling face}", "Goodbye","\N{slightly frowning face}")