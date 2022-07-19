import requests 
from tkinter import * #Importando todos os métodos do TK

def pegar_cotacao():
      requisicao = requests.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL') #Site que informa os valores atualizado.
      Requisicao_json = requisicao.json() #Usando o método json para vira uma bib

      Cotação_USD = Requisicao_json['USDBRL']['bid'] # 'USDBRL' é a moeda que eu desejo e o BID significa que é costante.
      Cotação_EUR = Requisicao_json['EURBRL']['bid']
      Cotação_BTC = Requisicao_json['BTCBRL']['bid']

      text= f'''
            Dolar: {Cotação_USD}
            Euro: {Cotação_EUR}
            BTC: {Cotação_BTC}
            '''
      print(text)   

pegar_cotacao()

janela = Tk() # TK() vai criar a janela.
janela.title('Cotação da Moeda') # Titulo da janela.



janela.mainloop() # MainLoop serve para mante a janela aberta


