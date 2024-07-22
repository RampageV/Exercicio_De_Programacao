try:
    divisao = 10 / 1
    #numero = lista[3]

except ZeroDivisionError: #Erro específico que o numero não divide por zero.
    print('Nao e possivel relaciona esse calculo')

except NameError:
    print('Erro no nome')

except Exception as ex: # Exception ele pega todos os erros que encontra
    print('Houver um erro: {}'.format(ex))
else:
    print('Nao ocorreu nenhum erro !!')
finally:
    print('Sempre exercuta !!')