from Aula9Televisao import Televisao
from Aula9Part1 import Calculadora
from Aula10_Contador import contador_palavra

cal = Calculadora(5,5)
print(cal.soma())

tele = Televisao()
print(tele.ligada)
tele.power()
print(tele.ligada)

lista = ['Gato']
print(contador_palavra(lista)) #Não preciso de estanciar porque não tem classe