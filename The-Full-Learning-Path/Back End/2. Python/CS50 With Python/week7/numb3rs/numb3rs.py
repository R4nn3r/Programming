import re
import sys


def main():
    print(validate(input("IPv4 Address: ")))


def validate(ip):
    list = ip.split(".")

    if re.search(r"^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$", ip):
        while True:
            try:
                for i in range(4):
                    if int(list[i]) > 255:
                        return False
                return True
            except ValueError:
                return False
            break
    else:
        return False


if __name__ == "__main__":
    main()