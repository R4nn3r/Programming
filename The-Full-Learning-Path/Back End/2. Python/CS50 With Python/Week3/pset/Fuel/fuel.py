def main():
        # Prompt the user for an input in X/Y format x and y must be an int
    t = get_input("Fraction: ")
    
    ans = int(t * 100)

    if ans == 0:
        print("E")
    elif ans >= 99:
        print("F")
    else:
        print(f"{ans}%")    
    
    
def get_input(prompt):
    while True:
        try:
            val = input("Fraction: ")
            val = val.split('/')
            x = int(val[0])
            y = int(val[1])
            
            t = x / y
            return t
        except (ValueError, ZeroDivisionError):
            pass
            
                 
                                
main()    