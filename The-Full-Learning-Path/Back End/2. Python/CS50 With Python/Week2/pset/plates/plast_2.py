def main():
    plate = input("Plate: ")

    
    if is_valid(plate):
        print("Valid")
    else:
        print("Invalid")


def is_valid(s):
    n = len(s)
    n -= 1
        # no special, start with 2 letters, 
    if (2 <= len(s) <= 6) and s[0:2].isalpha() and s.isalnum():
        for char in s:
            if char.isdigit():
                index = s.index(char)
                if s[index].isdigit() and char != '0':
                    
                    for k in s[index+1:]:
                        if k.isalpha():
                            return False 
                    return False
        return True
    return False


main()