def isAnagram(s, t):
    if len(s) != len(t): return False

    bank = []
    for word in s: 
        if word in t:
            bank.append(word)


    if len(bank) == len(s) or len(bank) == len(t): return True
    return False



def main():
    s = "light"
    t = "tight"
    print(isAnagram(s, t))

if __name__ == '__main__':
    main()