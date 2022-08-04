from Interface_grafica import * # Importando os métodos da classe
from Consulta_cep import *

#Chamando tela_cep primeiro, quando fecha o programa, a gente entra no while true
Tela_cep()

while True:

    window, event, values = sg.read_all_windows()

    if event == sg.WIN_CLOSED:
        break

    if event == 'Consultar':
        
        try:
            logradouro = consulta_cep(values['cep'])['logradouro']
            bairro = consulta_cep(values['cep'])['bairro']
            localidade = consulta_cep(values['cep'])['localidade']
            uf = consulta_cep(values['cep'])['uf']
            ibge = consulta_cep(values['cep'])['ibge']
            ddd = consulta_cep(values['cep'])['ddd']

            window['logradouro'].update(logradouro)
            window['bairro'].update(bairro)
            window['localidade'].update(localidade)
            window['uf'].update(uf)
            window['ibge'].update(ibge)
            window['ddd'].update(ddd)

        except:
            sg.popup('Verifique se foi colocado os numeros corretamente', title='Erro')    


        
            

        

     
        