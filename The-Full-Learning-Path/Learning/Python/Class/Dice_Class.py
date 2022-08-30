import random

class Die(object):
    def __init__(self, sides = 6):
        self.sides = sides
        
    def roll_dice(self):
        dice = []
        for _ in range(1, self.sides+1):
            dice.append(_)
        
        luck = random.choice(dice)
        return luck
    

