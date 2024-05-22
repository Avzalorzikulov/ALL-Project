# 1 chin fazifa
a = 2
b = 3
natija = a ** b
print(natija)
# 2 chi fazifa
son = 357
a = son % 10
b = (son // 100) % 10
c = a * 10 + b
print(c)
# 3 chi vazifa 
a = "Salom, Dunyo!"
b = a.lower()
print(b)
# 4 chi fazifa
matn = "a harfi bilan boshlanadigan so'zlarni chiqarish uchun a harfi kerak"
sozlar = matn.split()

for soz in sozlar:
    if soz.lower().startswith('a'):
        print(soz)


