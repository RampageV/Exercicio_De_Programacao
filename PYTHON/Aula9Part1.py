#---------------------------METODO,FUNÇÃO E CLASSE--------------------#

class Calculadora:

    def __init__(self,num1,num2):
        self.valor1 = num1
        self.valor2 = num2

    def soma(self):
        
        return self.valor1 + self.valor2

    def subtracao(self):
        return self.valor1 - self.valor2

    def Multiplicacao(self):
        return self.valor1 * self.valor2

    def Divisao(self):
        return self.valor1 / self.valor2  

if __name__=='__main__':  # Serve para teste, se for estanciado em outra classe, essa parte de baixo não vai ser exercutado.
    
    cal = Calculadora(50,60)
    print(cal.soma())  
    print(cal.subtracao())
    print(cal.Divisao())
    print(cal.Divisao())




        