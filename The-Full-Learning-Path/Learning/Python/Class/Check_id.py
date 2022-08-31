"""
    - double the values of every other digit
    - add the values of the individual digits together 
            - if the value has two digits add them together
    - the identification number is valid if the sum is divisible by 10


"""
import time

start = time.time()

id_num = "6575542"

valid_check_num = 0
add_double_digits = 0
not_double_digits = 0
check_double_digits = 0

for i in range(len(id_num)):
    if i % 2 != 0:        
        check_double_digits = int(id_num[i]) * 2    # 14
        if check_double_digits >= 10:
            check_double_digits = str(check_double_digits)  # "14"   
            for j in range(len(check_double_digits)):
                add_double_digits += int(check_double_digits[j])
        elif check_double_digits <= 9:
            not_double_digits += int(check_double_digits)
    elif i % 2 == 0:
        not_double_digits += int(id_num[i])
    
    valid_check_num = add_double_digits +  not_double_digits
        

print()                
print("CheckSum: ",valid_check_num)
x = int(len(id_num)) - 1
print(f"Check digit: {id_num[x:]}")
if valid_check_num % 10 == 0:
    print("States: Valid Identification Number.")
else:
    print("States: Invalid Identification Number")


print()
end = time.time()

print(f"Runtime = {end - start}sec")