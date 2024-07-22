class Error(Exception): # Class criada e que chama o exception
    pass

class InputError(Error): #Class criada para personalizar a mensagem de error
    def __init__(self,messagem):
        self.messagem = messagem
        

while True: #Enquanto a condiçao for verdadeira, ele vai ficar repetindo.
    try:
        x = int(input('Entre com uma nota de 0 a 10 !!'))
        print(x)
        if x > 10:
            raise InputError('Nota precisa ser menor que 10') #raiser força um error
        elif x < 0:
            raise InputError('Nota precisa ser maior que 0')    
        break # O break para a repetição, se caso tudo o que tiver em cima estiver certo.
    
    except ValueError: 
        print('Apenas números')
    
    except InputError as ex: # Aqui é tratando o error. O "ex", recebe a mensagem que está nos if
        print(ex)    
    
