def main():
    list = ['x','b','c']
    list[0] = 'a'

    list.extend('z')
    list.append('z')
    list.insert(0, "k")
    list.sort()
    
    print(list[0:])
    
if __name__ == '__main__':
    main()