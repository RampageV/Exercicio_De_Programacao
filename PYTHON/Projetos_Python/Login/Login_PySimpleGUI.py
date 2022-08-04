from pickle import TRUE
import PySimpleGUI as sg

layout = [ # No PySimpleGui é tudo criado com linhas,Array dentro de array.
    [sg.Text('Usuário')], # Campo do login com seu input
    [sg.Input(key='usuario')],

    [sg.Text('Senha')],# Campo do senha com seu input
    [sg.Input(key='Senha')],

    [sg.Button('Login')], #Botão que vai ser usado
    [sg.Text("",key='mensagem')] #Compo onde vai aparecer a mensagem depois do botão ser clicado.
    
]

window = sg.Window('TelaDeLogin',layout=layout)

while TRUE:

    event, values = window.read()

    if event == sg.WIN_CLOSED:
        break

    elif event =='Login':

            login_correto = 'erick'
            senha_correta = '123'
            
            usuario = values['usuario'] 
            senha = values['Senha']

            if usuario == login_correto and senha == senha_correta:
                 window['mensagem'].update('Login feito com sucesso')
            else:
                window['mensagem'].update('Senha ou login invalido')

               

  
