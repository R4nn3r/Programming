import random
from sys import exit


def main():

    score = generate_integer(get_level())

    print("score:", score)

    # get level to determine the complexity of the question
def get_level():
    while True:
        try:
            lev = int(input("Level: "))
            if lev > 3 or lev <= 0:
                raise ValueError
            else:
                return lev
        except ValueError:
            pass


def generate_integer(level):

    score = 10

    # level 1
    if level == 1:
        while True:
            try:
                for i in range(10):
                    error_count = 3
                    #generate random x, y values for each itration
                    x = random.randint(0, 9)
                    y = random.randint(0, 9)

                    while True:
                        ans = int(input(f"{x} + {y} = "))
                        rel_ans = x + y

                        if ans == rel_ans:
                            break
                        else:
                            error_count -= 1
                            print("EEE")
                            if error_count == 0:
                                score -= 1
                                print(f"{x} + {y} = {rel_ans}")
                                break
                            continue
                break

            except ValueError:
                pass
    # level 2
    if level == 2:
        while True:
                try:
                    for i in range(10):
                        error_count = 3
                        #generate random x, y values for each itration
                        x = random.randint(10, 99)
                        y = random.randint(10, 99)

                        while True:
                            ans = int(input(f"{x} + {y} = "))
                            rel_ans = x + y

                            if ans == rel_ans:
                                break
                            else:
                                error_count -= 1
                                print("EEE")
                                if error_count == 0:
                                    score -= 1
                                    print(f"{x} + {y} = {rel_ans}")
                                    break
                                continue
                    break
                except ValueError:
                    pass
    # level 3
    if level == 3:
        while True:
            try:
                for i in range(10):
                    error_count = 3
                    #generate random x, y values for each itration
                    x = random.randint(100, 999)
                    y = random.randint(100, 999)

                    while True:
                        ans = int(input(f"{x} + {y} = "))
                        rel_ans = x + y

                        if ans == rel_ans:
                            break
                        else:
                            error_count -= 1
                            print("EEE")
                            if error_count == 0:
                                score -= 1
                                print(f"{x} + {y} = {rel_ans}")
                                break
                            continue
                break

            except ValueError:
                pass
    return score




if __name__ == "__main__":
    main()
