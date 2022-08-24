# output the user’s grocery list in all uppercase, sorted alphabetically by item,
# prefixing each line with the number of times
def main():
    unique_g_list = []
    g_list = get_list()
    g_list.sort()
    dict = {}

    for i in g_list:
        if i not in unique_g_list:
            unique_g_list.append(i)

        count = g_list.count(i)
        dict[i] = count

    for d in dict:
        print(dict[d], d,sep=' ')



def get_list():
    # prompts the user for items, one per line, until the user inputs control-d
    list = []
    while True:
        try:
            g_list = input().upper()
            list.append(g_list)
        except EOFError:
            return list
            break
main()