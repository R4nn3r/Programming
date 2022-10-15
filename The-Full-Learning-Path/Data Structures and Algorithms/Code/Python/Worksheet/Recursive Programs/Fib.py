def fib(test):
    if test == 0:
        return 0
    elif test == 1 or test == 2:
        return 1
    else:
        return fib(test - 1) + fib(test - 2)

n = 5
for i in range(0, n):
    print(fib(i), end=' ')
print()

"""
    Time Complexity: O(2^n)
    Auxiliary Space: O(n)
"""