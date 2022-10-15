def fact(x):
    """ n amount of factorials """
    # base case 
    if x <= 0:
        return 1
    else:
        return fact(x - 1) * x

def fib(x):
    """ n amount of fibonacci series  """
    if x == 1 or x == 2:
        return 1
    elif x == 0:
        return 0
    else:
        return fib(x - 1) + fib(x - 2)

def sum(x):
    """ n amount of numbers sum """
    # base case 
    if x < 1:
        return x
    else:
        # recursive case 
        return sum(x - 1) + x


def main():
    # Fib series 
    n = 6;
    for i in range(n):
        print(fib(i), end=' ')   # 0 1 1 2 3
    print()
    
    # sum
    print(sum(5)) # 15


    # Factorial 
    print(fact(10)) # 36....


   
    ...


if __name__ == '__main__':
    main()