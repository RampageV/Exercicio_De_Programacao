import requests 
from tkinter import * #Importando todos os métodos do TK

def pegar_cotacao():
      requisicao = requests.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL') #Site que informa os valores atualizado.
      Requisicao_json = requisicao.json() #Usando o método json para vira uma bib

      Cotação_USD = float(Requisicao_json['USDBRL']['bid']) # 'USDBRL' é a moeda que eu desejo e o BID significa que é costante.
      Cotação_EUR = float(Requisicao_json['EURBRL']['bid'])
      Cotação_BTC = float(Requisicao_json['BTCBRL']['bid'])

      Texto_cotaçãoAtualizado["background"] = "white"
      Texto_cotaçãoAtualizado["text"] =f''' 
  Dolar: {Cotação_USD:.2f} 
Euro: {Cotação_EUR:.2f}
      BTC: {Cotação_BTC:.2f}  
'''# colocando o que eu quero dentro da label, editando o parametro text.

   
janela = Tk() # TK vai criar a janela.
janela.title('Cotação da Moeda') # Titulo da janela.
janela.geometry('300x200') #Tamanho da tela.
janela.resizable(0,0) # Janela não maxima mais.
janela.configure(background="black")

Texto_principal = Label(janela, text='Clique para atualizar valor da moeda',foreground='black',background='white') #Label seria o que você coloca
Texto_principal.grid(column=0,row=0,padx=50,pady=10) #Grid cria uma coluna e linha para colocar os componentes

Botão_Atualizar = Button(janela,text='Atualizar',command=pegar_cotacao) # No método button existe um método chamdo command que você precisa passa o método. obs: Não colocar os (), se colocar, ele vai exercuta sem precisar clica
Botão_Atualizar.grid(column=0,row=1,padx=50,pady=10)

Texto_cotaçãoAtualizado = Label(janela,text="",font='ARIAL 12',foreground='black',background="black")
Texto_cotaçãoAtualizado.grid(column=0,row=2)


janela.mainloop() # MainLoop serve para mante a janela aberta, colocar todo codigo em cima dele.


