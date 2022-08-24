import re
import sys


def main():
    print(parse(input("HTML: ")))


def parse(s):
    if line := re.match(r"^.*src=(.*).*",s):
        ful_line = line.group(1).split('"')

        full_link = ful_line[1]

        if link := re.search(r"^https?://(?:www\.)?youtube\.com/embed/(\w+)", full_link):
            return f"https://youtu.be/{link.group(1)}"
        else:
            return None
if __name__ == "__main__":
    main()