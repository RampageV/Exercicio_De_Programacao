from cgitb import text


def escrever_arquivo(texto):

    arquivo = open('text.txt','w') # W serve para escrever normal no arquivo.
    arquivo.write(texto) # Write serve para realmente escrever.
    arquivo.close

def escrever_atualizar(texto):

    arquivo = open('text.txt','a') # A, serve para atualizar a escrita
    arquivo.write(texto)
    arquivo.close    

def ler_arquivo(Arquivo_ler):
    arquivo = open(Arquivo_ler,'r') # R, serve para ler os arquivos
    texto = arquivo.read() #Read ler o arquivo
    print(texto)



if __name__ == '__main__':
    #escrever_arquivo('Tudo certo para amanhã !! \n')
    #escrever_atualizar('Segunda Linha !! \n')
    ler_arquivo('text.txt')