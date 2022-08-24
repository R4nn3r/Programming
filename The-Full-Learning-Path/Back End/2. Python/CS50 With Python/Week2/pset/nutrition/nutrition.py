    # prompt users to input a fruit (case-insensitively)
x = input("Item: ").lower()


    # input the values for the furits in the function using dicts

    # output the number of calories in one portion of that fruit

dict = {'apple': 130, 'avocado': 50,'sweet cherries': 100,'strawberries': 50,'kiwifruit': 90,'pear': 100,'orange': 80}

if x in dict:
    result = dict[x]
    print("Calories: ", result)
else:
    print(end="")


