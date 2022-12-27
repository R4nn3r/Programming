""" Learning Object Oriented Programming Practice """
class Card:
    def __init__(self, customer, bank, acc, limit):
        """ Instance variables [data members] """
        self._customer = customer
        self._bank = bank
        self._acc = acc
        self._limit = limit
        self._balance = 0


    """ Methods [member functions] """
    def get_customer(self):
        return self._limit

    def set_limit(self, limit):
        self._limit = limit


def main():
    """ Instance of the class  """
    wallet = []
    wallet.append(Card("John Doe", "1st Bank" , "5391 0375 9387 5309" , 1000))
    wallet.append(Card("Liam Claus", "1st Bank" , "5391 0375 9387 5309" , 1000))
 


    print('Limit: ', wallet[0].get_customer())
    print('Limit: ', wallet[1].get_customer())

    wallet[1].set_limit(4000)
    
    print('New Limit: ', wallet[1].get_customer())
   

if __name__ == '__main__':
    main()