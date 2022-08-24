def main():
    val = input("Fraction: ")
    ans = convert(val)

    print(gauge(ans))

def convert(fraction):
    try:
        val = fraction.split("/")
        x = int(val[0])
        y = int(val[1])

        t = x / y

        if y == 0:
            return ZeroDivisionError

        t = int(t * 100)

        return t
    except TypeError:
        return ValueError



def gauge(percentage):
    percentage = int(percentage)

    if percentage <= 1:
        return "E"
    elif percentage >= 99:
        return "F"
    else:
        return f"{percentage}%"


if __name__ == "__main__":
    main()