#prompts the user for a str of text

text = input("Input: ")


#outputs that same text but with all vowels (A, E, I, O, and U) omitted

for i in text:
    if i == 'A' or i == 'E' or i == 'I' or i == 'O' or i == 'U':
        text = text.replace(i, "")
    elif i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u':
        text = text.replace(i, "")
    else:
        text = text
        
print("Output: ", text)