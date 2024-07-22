lista = ['cachorro','Gato']

contador_letra = lambda lista:[ len(x) for x in lista]
print(contador_letra(lista))

soma = lambda a,b: a + b
mult = lambda a,b: a * b

print(soma(5,5))
print(mult(5,5))

Calculadora = {
    'Soma':lambda a,b: a + b,
    'Mult':lambda a,b: a * b,
    'Div':lambda a,b: a / b
}

soma = Calculadora['Soma']
mult = Calculadora['Mult']
div = Calculadora['Div']

print('Seu numero de soma é {}'.format(soma(5,5)))
print('Seu numero de mult é {}'.format(mult(5,5)))
print('Seu numero de div é {}'.format(div(25,5)))
