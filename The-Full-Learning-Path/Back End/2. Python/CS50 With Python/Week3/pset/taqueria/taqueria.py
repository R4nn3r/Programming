def main():
    get_order("Item: ")


def get_order(prompt):
    order_list = {
        "Baja Taco": 4.00,
        "Burrito": 7.50,
        "Bowl": 8.50,
        "Nachos": 11.00,
        "Quesadilla": 8.50,
        "Super Burrito": 8.50,
        "Super Quesadilla": 9.50,
        "Taco": 3.00,
        "Tortilla Salad": 8.00
        }
    total_p = 0
        #user to place an order, prompting them for items, one per line
    while True:
        try:
            o_in = input(prompt).title()
            if o_in in order_list:
                total_p += order_list[o_in]
                print(f'Total: ${total_p:.2f}')
        except EOFError:
           break
    return total_p

main()