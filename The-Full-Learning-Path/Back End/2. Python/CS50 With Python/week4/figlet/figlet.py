from pyfiglet import Figlet
from sys import argv, exit
import random


figlet = Figlet()
response = figlet.getFonts()

# Expects zero or two command-line arguments:

if len(argv) >= 2:
    if (argv[1] == '-f' or argv[1] == '--font') and argv[2] in response:
        pass
    else:
        print("Invalid usage")
        exit(1)


# Prompts the user for a str of text.
in_ = input("Input: ")


# Zero if the user would like to output text in a random font.
random_font = random.choice(response)
if len(argv) == 1:
    figlet.setFont(font=random_font)

    # Outputs that text in the desired font.
    print(figlet.renderText(in_))
# Two if the user would like to output text in a specific font
elif len(argv) > 2:
    figlet.setFont(font=argv[2])

    # Outputs that text in the desired font.
    print(figlet.renderText(in_))
