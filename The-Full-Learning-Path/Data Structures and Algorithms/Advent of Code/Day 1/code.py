with open('data.txt', 'r') as f:
    lines = f.readlines()
    calories = [entry.strip() for entry in lines]
elf_sums = []
current_sum = 0
for entry in calories:
    if entry != '':
        current_sum += int(entry)
    elif entry == '':
        elf_sums.append(current_sum)
        current_sum = 0
elf_sums.append(current_sum)


print(max(elf_sums))

elf_sums.sort(reverse=True)
top_three = elf_sums[0]+elf_sums[1]+elf_sums[2]

print(top_three)