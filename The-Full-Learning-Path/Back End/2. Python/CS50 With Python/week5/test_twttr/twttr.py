def main():
    word = shorten(input("Input: "))
    print(f"Output: {word}")

def shorten(word):
    for i in word:
        if i == 'A' or i == 'E' or i == 'I' or i == 'O' or i == 'U':
            word = word.replace(i, "")
        elif i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u':
            word = word.replace(i, "")
        else:
            word = word
    return word


if __name__ == "__main__":
    main()