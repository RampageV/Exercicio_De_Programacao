import shutil #Importando biblioteca, serve para move um arquivos

def escrever_arquivo(texto):

    arquivo = open('text.txt','w') # W serve para escrever normal no arquivo.
    arquivo.write(texto) # Write serve para realmente escrever.
    arquivo.close

def escrever_atualizar(nome_arquivo,texto):

    arquivo = open(nome_arquivo,'a') # A, serve para atualizar a escrita
    arquivo.write(texto) # Write serve para realmente escrever.
    arquivo.close    

def ler_arquivo(Arquivo_ler):

    arquivo = open(Arquivo_ler,'r') # R, serve para ler os arquivos
    texto = arquivo.read() #Read ler o arquivo
    print(texto)

def MediaNota(nome_arquivo):

    arquivo = open(nome_arquivo,'r')# R, serve para ler os arquivos
    aluno_nota = arquivo.read()# Read ler o arquivo
    aluno_nota = aluno_nota.split('\n') # Transformando string em uma lista. Onde termina com \n, indica que ele vira um item da lista nesse caso
    lista_media = []

    for x in aluno_nota:
        lista_nota = x.split(',') #Dividir a lista por ,
        aluno = lista_nota[0] # Pegando o primeiro da lista 
        lista_nota.pop(0) # Pop remove a posição que você deseja e devolve o ultimo valor, nesse caso a gente precisa remove o nome para converter o resto da string em int 
        media = lambda notas: sum ([int(i) for i in notas]) / 4 # Fiz um for em notas, peguei essas notas converti em inteiro e depois somei usando SUM e dividir por 4  
        lista_media.append({aluno:media(lista_nota)})
    return lista_media

def copia_arquivo(nome_arquivo): # Copia o arquivo e cola onde quiser
    shutil.copy(nome_arquivo,'E:\VisualStudio\HTML') #Onde colei o arquivo.

def move_arquivo(nome_arquivo): # Você move o arquivo para onde quiser no seu computador.
    shutil.move(nome_arquivo,'C:\Intel') # Escolhi o local para mover.

if __name__ == '__main__':
    move_arquivo('Nota.txt')
    #copia_arquivo('Nota.txt')
    #print(MediaNota('Nota.txt'))
    #escrever_arquivo('Tudo certo para amanhã !! \n')
    #aluno = 'Luis 6,3,2,1\n'
    #escrever_atualizar('Nota.txt',aluno)
    #ler_arquivo('text.txt')