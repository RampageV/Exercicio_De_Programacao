
#---------------------------METODO,FUNÇÃO E CLASSE--------------------#

class Calculadora:

    # def __init__(self): # Init não ser vazio

    #     pass #Pass não faz nada, só deixa vazio

    def soma(self,valor1,valor2):
        return valor1 + valor2

    def subtracao(self,valor1,valor2):
        return valor1 - valor2

    def Multiplicacao(self,valor1,valor2):
        return valor1 * valor2

    def Divisao(self,valor1,valor2):
        return valor1 / valor2


cal = Calculadora()

print(cal.soma(50,60))  
print(cal.subtracao(60,20))
print(cal.Divisao(50,60))
print(cal.Divisao(50,60))


        