import PySimpleGUI as sg

def Tela_cep():   

            
    sg.theme('Dark2') # theme é background da tela

   # Colocar o cep
    cep = [
            [sg.Text('Informe o cep:',font='Arial 12',pad=(0,0))], #Pad empura mais para direita ou esquerda o que você deseja
            [sg.Input(size=(20,0),font='Arial 12',key='cep',pad=(0,0))] #Size vai ser o tamanho que nesse caso do input vai ser o tamanho da linha do input.           
        ]

   # Colocando que vão ficar do lado do input 
    coluna1 = [
        [sg.Text('LOGRADOURO:',font='Arial 12')],
        [sg.Text('BAIRRO:',font='Arial 12')],
        [sg.Text('LOCALIDADE:',font='Arial 12')],
        [sg.Text('UF:',font='Arial 12')],
        [sg.Text('IBGE:',font='Arial 12')],
        [sg.Text('DDD:',font='Arial 12')]
    ] 

    #Colocando e personalizando os input que vão ficar do lado do text
    coluna2 = [
        [sg.Input(font='arial 12 bold', key='logradouro',size=(35,1))],
        [sg.Input(font='arial 12 bold', key='bairro', size=(30,1))],
        [sg.Input(font='arial 12 bold', key='localidade',size=(30,1))],
        [sg.Input(font='arial 12 bold', key='uf', size=(4,1))],
        [sg.Input(font='arial 12 bold', key='ibge', size=(15,1))],
        [sg.Input(font='arial 12 bold', key='ddd', size=(4,1))],
    ]

    #Botões de consultar e sair
    botoes = [
        [sg.Button('Consultar',font='arial 12 bold', size=(8,0), pad=((0,15),0))],
        [sg.CButton('Sair', font='arial 12',size=(9,0))]
    ]


    #layout com a junção de todos os outros colocando em column
    layout = [
        [sg.Text('Consultagem de CEP', font='arial 18 bold')],
        [sg.Column(cep, justification='center')],
        [sg.Column(coluna1),sg.Column(coluna2)],
        [sg.Column(botoes, justification='center')]       
    ]


    window = sg.Window('CEP',element_padding=(0,10), size=(600,600), layout=layout, finalize=True) #Com o element_padding, você colocar os espaço tanto na vertical ou horizontal
  

    
