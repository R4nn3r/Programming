import time 
def fib(n):
    """ a recursive function that find the n amount of fibonacci numbers """
    if n <= 0:
        return 0
    elif n == 1 or n == 2:
        return 1
    else:
        return fib(n-1) + fib(n-2)


def main():
    start_time = time.time()
    n = int(input("n: "))

    for i in range(n):
        print(fib(i), end=" ")
    
    print()
    end_time = time.time()
    print(f"Runtime: {end_time - start_time}s")

if __name__ == '__main__':
    main()