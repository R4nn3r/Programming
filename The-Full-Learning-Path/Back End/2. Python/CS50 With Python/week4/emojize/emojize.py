from emoji import emojize

# prompts the user for a str in English and then outputs the “emojized” version of that str

emo = input("Input: ")

c = ","

if c in emo:
    hello, emo = emo.split(",")
    emo = emo.strip()
    print("Output: hello,",emojize(emo, language='alias'))
else:
    print("Output:",emojize(emo, language='alias'))
