def main():
    case_ = input("cameCase: ")
        # to make sure the first latter is lowercase without adding a "_" before it
        # and then concatenate the first word and insert slice the rest [1:]
    case_ = case_[0].lower() + case_[1:]
    
   
    for i in case_:
            # using the isupper() function find the uppercase letter and 
            # replace it with "_, and the letter in a lowercase"
        if i.isupper():
            case_ = case_.replace(i, f"_{i.lower()}")
    
    print("snake_case:", case_)
    



if __name__ == "__main__":
    main()



