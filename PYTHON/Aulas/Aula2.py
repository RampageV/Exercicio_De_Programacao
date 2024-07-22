a = int(input('Valor1: '))
b = int(input('Valor2: '))
c = int(input('Valor3: '))

if a > b and a > c:
    print('Maior valor: {}'.format(a))
elif b > a and b > c:
    print('Maior valor: {}'.format(b))
else:
    print('Maior valor: {}'.format(c))

print('Final do programa')

