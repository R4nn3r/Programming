from cairo import FONT_WEIGHT_BOLD


class Vault(object):
    def __init__(self, gold=0, silver=0, bronze=0):
        self.gold = gold
        self.silver = silver
        self.bronze = bronze

    def __str__(self):
        return f"Gold: {self.gold} Silver: {self.silver} Bronze: {self.bronze}"

    def __add__(self, other):
        gold = self.gold + other.gold
        silver = self.silver + other.silver
        bronze = self.bronze + other.bronze
        return Vault(gold,silver,bronze)



yonatan = Vault(1000,500,250)
print(yonatan)   

helina = Vault(2000,800,550)
print(helina)

total = yonatan + helina 
print(total)