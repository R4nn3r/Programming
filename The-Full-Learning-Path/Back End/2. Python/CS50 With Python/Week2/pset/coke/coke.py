    # coke price = 50 cents
    # machine accepts 25, 10, 5 cents

    # Prompt the user to insert a coin one at a time eachtime informing the amount due

amount_due = 50

while True:


    print("Amount Due: ", amount_due)
    co_in = int(input("Insert Coin: "))

    try:
        if co_in == 25 or co_in == 10 or co_in == 5:
            if amount_due > co_in:
                amount_due -= co_in
            elif amount_due == co_in:
                amount_due -= co_in
                print("Change Owed: ", amount_due)
                break
            elif amount_due < co_in:
                amount_due -= co_in
                print("Change Owed: ", format(amount_due).lstrip("-"))
                break
    except ValueError:
        continue

    