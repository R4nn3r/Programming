

earned_income = float(input("Enter Earned Income: "))

marital_status = input("Martial Status: Single(s)| Married(m) ").lower()

tax_owed = 0

if marital_status == "s":
    """ Check tax bracket"""
    if earned_income >= 0 and earned_income <= 9950.00:
        # calculate the tax for 10%
        tax_owed = earned_income / 10
        print(f"Tax Owed: {tax_owed}$")

    elif earned_income >= 9951 and earned_income <= 40525.00:
        # calculate the tax for 12%
        tax_owed = earned_income / 12
        print(f"Tax Owed: {tax_owed}$")
elif marital_status == "m":
    """ Check tax bracket"""
    if earned_income >= 0 and earned_income <= 19900.00:
        # calculate the tax 10%
        tax_owed = earned_income / 10
        print(f"Tax Owed: {tax_owed}$")
    elif earned_income >= 19901.00 and earned_income <= 81050.00:
        # calculate the tax 12%
        tax_owed = earned_income / 12
        print(f"Tax Owed: {tax_owed}$")

    
