def sum(num):
    if num == 0:
        return num 
    else:
        return sum(num - 1) + num


def fac(num): 
    if num <= 1:
        return num
    else:
        return fac(num - 1) * num

def main():
    # A recursive function that gives the sum of 
    # the first n amount of numbers

    print(sum(4))


    print(fac(1))




if __name__ == '__main__':
    main()