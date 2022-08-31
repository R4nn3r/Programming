count = 10
pos_numbers = []
neg_numbers = []
zero =[]


while count != 0:
    num = int(input("Enter Numbers: "))
    if  num > 0:
        pos_numbers.append(num)
    elif num < 0:
        neg_numbers.append(num)
    else:
        zero.append(num)
    
    count -= 1
    
choice = input("Negative(n) or positive(p) count: ").lower() 
if choice == "n":
    print("Negative: ",len(neg_numbers))
elif choice == "p":
    print("Positive: ", len(pos_numbers))
    
print(f"With {len(zero)} Zero's.")