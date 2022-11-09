def linear_search(list, target):
    """ returns the index position of the target if found , else returns none """

    for i in range(len(list)):
        if list[i] == target:
            return i
    return None

def verify(index):
    if index is not None:
        print(f"found at {index}")
    else:
        print("target not found")

numbers = [1, 2, 3, 4, 5, 6, 7, 8]
result = linear_search(numbers, 6)

verify(result)