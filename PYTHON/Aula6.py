a = int(input('Nota do 1° bimestre: '))
while a > 10:
    a = int(input('Precisa ser um numero menor que 10: '))

b = int(input('Nota do 2° bimestre: '))
while b > 10:
    b = int(input('Precisa ser um numero menor que 10: '))

c = int(input('Nota do 3° bimestre: '))
while c > 10:
    c = int(input('Precisa ser um numero menor que 10: '))
    
d = int(input('Nota do 4° bimestre: '))
while d > 10:
    d = int(input('Precisa ser um numero menor que 10: '))

media = (a + b + c + d) / 4
print('Media: {} '.format(media))
    
     