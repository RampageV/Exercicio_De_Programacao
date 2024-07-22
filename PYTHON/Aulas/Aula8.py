#-------Conjuntos/subconjuntos-------#

conjunto = {1,2,3,5,4,5}
conjunto2 = {5,6,8,7,9,10}

conjunto_uniao = conjunto.union(conjunto2) # Union junta dois conjuntos
print(conjunto_uniao)
conjunto_interseção = conjunto.intersection(conjunto2) #Intersection verifica quantos elemento do array se repetiu nos dois.
print(conjunto_interseção)

conjunto_diferença1 = conjunto.difference(conjunto2) #Mostra os elementos diferente entre conjunto e conjunto2
conjunto_diferença2 = conjunto2.difference(conjunto) #Mostra os elementos diferente entre conjunto2 e conjunto
print(conjunto_diferença1)
print(conjunto_diferença2)

conjunto_simetrico = conjunto.symmetric_difference(conjunto2) #O que se repete entre os dois não é mostrado e o que não se repete é juntado e mostrado
print(conjunto_simetrico)


conjunto_a = {1,2,3}
conjunto_b = {1,2,3,4,5}

conjunto_subset = conjunto_a.issubset(conjunto_b) #Verifica se o conjunto A está dentro do conjunto B, então ele retorna TRUE, se caso for o contrario, vai retorna FALSE
print(conjunto_subset)
conjunto_superset = conjunto_a.issuperset(conjunto_b) # SuperSet é o contrário de SubSet, ele informa se o array está dentro de outro array e se ainda possue mais elementos
print(conjunto_superset)

lista = ['cachorro','gato','gato','gato','leao']
print(lista)

ConversaoDeListaParaConjunto = set(lista) # Convertendo para cojunto, você tira a duplicação de elemento em uma lista.
print(ConversaoDeListaParaConjunto)

ConvertendoConjuntoParaLista = list(ConversaoDeListaParaConjunto) # Converteu de conjunto para lista novamente.
print(ConvertendoConjuntoParaLista)




# conjunto = {1,2,3,4,5,2}
# conjunto.add(7) #Adiciona um elemento
# conjunto.discard(2) #Remove todo elemento da lista
# print(conjunto)