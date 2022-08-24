import csv
from sys import exit, argv
from tabulate import tabulate

def main():
    # Evertying works return the count

    table, headers = check_command_line_input(argv)

    print(tabulate(table,headers,tablefmt='grid'))



def check_command_line_input(argv):
        # check the command line argu, and other exception's
    try:
        if len(argv) != 2:
            exit("Too few command-line arguments")
        elif len(argv) > 2:
            exit("Too many commmand-line arguments")
        elif '.csv' not in argv[1]:
            exit("Not a Csv file")
    except FileNotFoundError:
        exit("File does not exist")

    return get_menu(argv)


def get_menu(argv):
        # get the csv file and display the table
    table = []
    if 'sicilian.csv' == argv[1]:
        with open(argv[1]) as file:
            reader = csv.DictReader(file)
            for row in reader:
                table.append({'Sicilian Pizza': row['Sicilian Pizza'], 'Small': row['Small'], 'Large': row['Large']})
        headers = {}

    elif 'regular.csv' == argv[1]:
        headers = {}
        with open(argv[1]) as file:
            reader = csv.DictReader(file)
            for row in reader:
                table.append({'Regular Pizza': row['Regular Pizza'], 'Small': row['Small'], 'Large': row['Large']})


    return table, headers



if __name__ == "__main__":
    main()