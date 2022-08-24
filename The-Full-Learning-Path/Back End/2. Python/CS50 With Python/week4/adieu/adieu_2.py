import inflect

p = inflect.engine()


def main():
    Name = get_name("Name: ")

    n = len(Name)

    if n == 1:
        print("Adieu, adieu, to", Name[0])
    elif n == 2:
        print("Adieu, adieu, to", Name[0], "and", Name[1])
    elif n > 2:
        print()
        print("Adieu, adieu, to ", end="")
        for i in range(n - 1):
            print(Name[i], end=", ")

        print("and", Name[n - 1])

    #prompts the user for names, one per line, until the user inputs control-d


def get_name(prompt):
    list = []
    while True:
        try:
            name = input(prompt)
            list.append(name)
        except EOFError:
            break
    return list


main()
