# prompts the user for an arithmetic expressio
# x as an integer , z as an integer and y as an integer

num = input("Expression: ")

num = num.split(" ")

x = int(num[0])  # integer
y = num[1]  # mathematical expression
z = int(num[2])  # integer 2


# calculates and outputs the result as a floating-point value formatted to one decimal place print(f"{answer:.2f}")

if ( y == "+"):
    ans = float(x + z)
    print(f"{ans:.1f}")
elif (y == "-"):
    ans = float(x - z)
    print(f"{ans:.1f}")
elif (y == "*"):
    ans = float(x * z)
    print(f"{ans:.1f}")
elif (y == "/"):
    ans = float(x / z)
    print(f"{ans:.1f}")
