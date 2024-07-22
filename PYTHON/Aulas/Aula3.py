a = int(input('Primeiro numero: '))
b = int(input('Segundo numero: '))

if a % 2 == 0 or b % 2 == 0: #Pode ser usar o not para negar, exemplo: if a % 2 == 0 or not b % 2 == 0:
    print('Possue numero par')
else:
    print('Não possue numero par')      