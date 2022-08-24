from sys import exit, argv

try:    
    if len(argv) != 2:
        print("Too few command-line arguments")
        exit(1)
    elif len(argv) > 2:
        print("Too many commmand-line arguments")
        exit(1)
    elif argv[1].split('.')[-1] != 'py':
        print("Not a Python file")
        exit(1)
except FileNotFoundError:
    print("File does not exist")
    exit(1)
    
count = 0
    
file = open(argv[1], 'r')
f = file.readlines()

for i in f:
    if i.startswith("'''") or i.startswith("#") or i.startswith("\n"):
        pass
    else:
        count += 1
        
print(count)