# get two command-line arguments from the user, The name's of csv files to read in order of name and house
# convert the name and Write a new csv file in the order of first, last and house

import csv
from sys import exit, argv

def main():
    result = check_command_line(argv)

def check_command_line(argv):
    try:
        if len(argv) < 3:
            exit("Too few command-line arguments")
        elif len(argv) > 3:
            exit("Too many command-line arguments")
        elif '.csv' not in argv[1] and '.csv' not in argv[2]:
            exit("Not a Csv file")
        return convert_csv(argv[1], argv[2])
    except FileNotFoundError:
        exit(f"Could not read {argv[1]}")


def convert_csv(read, write):
    box = []
    with open(read) as file:
        reader = csv.DictReader(file)
        for row in reader:
            first, last = row["name"].split(',')
            box.append({"first": first,"last": last , "house": row["house"]})
            
        for row in box: 
            with open(write, 'a') as file:
                writer = csv.DictWriter(file, fieldnames=['first', 'last', 'house']) 
                writer.writerow({"first": row["first"],"last": row["last"] ,"house": row["house"]})        
                
    
    

if __name__ == "__main__":
    main()