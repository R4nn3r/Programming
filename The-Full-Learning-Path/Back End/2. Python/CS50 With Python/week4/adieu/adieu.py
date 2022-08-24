import inflect

p = inflect.engine()


def main():
    Name = get_name("Name: ")

    mylist = p.join(Name)
    print("Adieu, adieu, to", mylist)

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
