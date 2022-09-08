# Convert Human age to Dog, Cat, Horse

# Human

human_age = int(input("Enter Human Age: "))
print("------------------------------------")


# Dog Section
human_to_dog = human_age

dog_year = human_to_dog * 7
dog_month = dog_year - int(dog_year)
dog_month_out = int(dog_month * 360 / 30)
dog_days = int(dog_month_out / 30)


print(f"Dog Years:- {dog_year} years - {dog_month_out} months - {dog_days} days") 

print(type(human_age))
print(type(dog_year))
print(type(dog_month_out))
print(type(dog_days))
