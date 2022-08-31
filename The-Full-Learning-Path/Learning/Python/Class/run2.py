word = "dog"
end = len(word)
rev_word = word[::-1]

for i in range(end):
     if word[i:] == rev_word[:end-i]and rev_word[end-i:]:
         print(word[i:])