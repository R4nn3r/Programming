def main():
    case_ = input("cameCase: ")

    # to check how many uppercase letters exist in the input to
    # decide the function to use
    upper_count = ""


    for i in case_:
        if i.isupper():
            upper_count += i

    upper_len = len(upper_count)


    if upper_len == 2:
        double(case_)
    elif upper_len == 1:
        single(case_)
    else:
        none(case_)



    # for single words Eg. name
def none(x):
    x = x.lower()
    print("snake_case:", x)



    # for double words Eg. firstName
def single(x):
    answer = ''

    for i in x:
        if i.isupper():
            safe = i

    index_ = x.index(safe)
    y = index_ - 1
    print(x[y])
    case_splitted = x.split(x[y])
    case_splitted[1:1] = x[y]
    case_splitted[2:1] = "_"
    print(case_splitted)


    for i in case_splitted:
        answer += i
    print("snake_case:",answer.lower(), end="")


    # for triple words Eg. preferredFirstName
def double(x):
    half_ans = ''
    full_ans = ''
    upper_letter_count = ''

    for i in x:
        if i.isupper():
            upper_letter_count += i

    a = upper_letter_count[0]
    b = upper_letter_count[1]

    index_a = x.index(a)
    index_b = x.index(b)

    y = index_a - 1
    z = index_b

        # first half of adding the  '_'
    case_splitted_1 = x.split(x[y])
    case_splitted_1[1:1] = x[y]
    case_splitted_1[2:1] = "_"

    for i in case_splitted_1:
        half_ans += i

        # second half of adding the '_'
    x = half_ans

    case_splitted_2 = x.split(x[z])
    case_splitted_2[1:1] = x[z]
    case_splitted_2[2:1] = "_"


    for i in case_splitted_2:
        full_ans += i

    print("snake_case:",full_ans.lower(), end="")



if __name__ == "__main__":
    main()








