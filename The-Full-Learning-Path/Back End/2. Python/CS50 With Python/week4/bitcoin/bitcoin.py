import requests
import json
from sys import exit, argv

# specify as a command-line argument the number of Bitcoins,
# that they would like to buy. If that argument cannot be
# converted to a float

while True:
    try:
        if len(argv) != 2:
            print("Missing comand-line argument")
            exit(1)
        elif argv[1].isalpha():
            print("Command-line argument is not a number")
            exit(1)
    except requests.RequestException:
        pass

    x = argv[1]

    r = requests.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json")

    o = r.json()

    val = o['bpi']['USD']["rate_float"]

    amount = val * float(x)

    print(f"${amount:,.4f}")
    exit()
