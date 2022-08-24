def main():
    plate = input("Plate: ")
    if is_valid(plate):
        print("Valid")
    else:
        print("Invalid")


def is_valid(s):

    s_len = len(s)
    
    # must contain a max of 6 and min 2 characters(letters or numbers)
    if 6 <= len(s) >= 2:    
        aa = is_nospecial(s)    
        bb = start_letters(s)      
        cc = first_num(s)         
        dd = last_in_digit(s)        
        
    
        # final decision to feed the main function 
        if aa == True and bb == True and cc == True and dd == True:
            return True
        
    else:
        return False

    
    # no special characters Eg. Hello, -> cant have ","
def is_nospecial(x):
    special_char = "'[@_!.,#$%^&*()<>?/\|}{~:]'"
    
    if any(i in special_char for i in x):
	    return False
    else:
        return True
    
        # Must start at least with 2 letter Eg. AA4554, ASD457, BB1111
def start_letters(x):
    a = x[0]
    b = x[1]
    
    if a.isalpha() == True and b.isalpha() == True:
        return True
    else:
        return False 
    
        # The first number used cant be a 0 Eg. CS050 -> cant be "0"

def first_num(x):

    safe = ''

    x = string_list(x)
    
    
    for i in x:
        if i.isdigit():
            safe += i
            break
     
    if safe.isdigit():  
        if safe == '0':
            return False
        else:
            return True
    else:
        return True
            

def string_list(x):
    list = []
    list[:0] = x
    return list

        # numbers cant be in the middle of letters must be at the end Eg. AAA124
def last_in_digit(x):
    y = len(x)
    y -= 1
    check = x[y]
    
    for i in x:
        if check.isdigit():
            return True
        elif x.isalpha():
            return True
        else:
            return False

main()