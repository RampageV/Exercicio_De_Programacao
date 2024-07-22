a = int(input('Nota do 1° bimestre: '))
if a > 10:
    a = int(input('Precisa ser um numero menor que 10: '))
b = int(input('Nota do 2° bimestre: '))
if b > 10:
    b = int(input('Precisa ser um numero menor que 10: '))
c = int(input('Nota do 3° bimestre: '))
if c > 10:
    c = int(input('Precisa ser um numero menor que 10: '))
d = int(input('Nota do 4° bimestre: '))
if d > 10:
    d = int(input('Precisa ser um numero menor que 10: '))

media = (a + b + c + d) / 4
print('Media: {} '.format(media))