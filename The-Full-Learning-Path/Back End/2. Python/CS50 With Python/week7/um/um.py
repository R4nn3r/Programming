import re
import sys


def main():
    print(count("Um, thanks, album... umbrella "))


def count(s):
    counter = 0

    line = re.findall(r"\b\W*um\W*",s, re.IGNORECASE)

    for i in line:
        counter += 1
    return counter

if __name__ == "__main__":
    main()