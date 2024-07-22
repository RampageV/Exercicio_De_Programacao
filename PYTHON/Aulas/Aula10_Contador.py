def contador_palavra(lista_palavra):
    contador = []
    for x in lista_palavra:
        quantidade = len(x) # Vai conta os quantidade de letra
        contador.append(quantidade) # Append adiciona no final da lista de array
    return contador

if __name__=='__main__':
    lista = ['Cachorro','Gato','Gato']
    print(contador_palavra(lista))



