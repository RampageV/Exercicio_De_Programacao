
a = 50
b = 10
c = int(input('Qual numero ? ')) #Input já convertido em int
d = int(input('Qual segundo numero ? '))#Input já convertido em int

somaCD = c + d
print('Soma dos valores' + str(somaCD)) # Soma dos Input

soma = a + b
multiplicacao = a * b
divisao = a/b

print(soma)
print(type(soma)) #Type serve para saber o tipo da variavel
print(str(soma)) # Str serve para converte em string
print('')
print('A soma dos valores deu ' + str(soma)) # Convertido em String
print('')
print('Soma: {} Multiplicacao: {}'.format(multiplicacao,soma)) # Formato
print('')
print('Soma: {} \n Multiplicacao: {} \n Duvisao: {}'.format(multiplicacao,soma,divisao)) # Formato com \n