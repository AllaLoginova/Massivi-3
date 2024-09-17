num = round(2.5) + round(3.5) # окруление до ближайшего четного числа, если дробная часть 0.5

print(num)

num = 31415

print(round(num, -2)) # заменяет цифры справа на нули

# print(~1.0)

i = 1
j = 17

res = 0

while i != j:
    res += sum(range(i, j+1))
    i += 1
    j -= 1

print(res + 9)

print('My name is %s' % 'James')