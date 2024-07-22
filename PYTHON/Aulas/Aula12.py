from datetime import time, date, datetime, timedelta #Já existe uma classe do proprio python com método date e datetime

def trabalhando_com_datetime():

    data_atual = datetime.now() #Mostra data e horario atual.
    print(data_atual)

    print(data_atual.strftime('%H:%M:%S')) #Pegando apenas o horário.
    print(data_atual.strftime('%d/%m/%y')) #Pegando apenas o mês,dia e ano.

    tupla = ('Segunda','Terca','Quarta','Quinta','Sexta','Sabado','Domingo')
    print(tupla[data_atual.weekday()])# Quando dei o data_atual.weekday era o dia da semana, que é terça e está na posição 1 do array, quando dei print e coloca o 1 vai escolhe no array o dia da semana   

    data_criada = datetime(2022,3,12,13,5,20) #Data com horario criado
    print(data_criada)
    print(data_criada.strftime('%c')) #Data criada com o formato %c

    data_string = '01/01/2022 12:20:22'
    data_convertida = datetime.strptime(data_string, '%d/%m/%Y %H:%M:%S') #Convertendo data e horas que vem de um array ou dentro de uma variavel
    print(data_convertida)
    nova_data = data_convertida - timedelta(days=365,minutes=500) #Diminuindo dias e horarios com timedelta.
    print(nova_data)


def trabalhando_com_date():

    data_atual = date.today() #Data de hoje
    print(data_atual.strftime('%d/%m/%y')) # Strftime vai converter para string no formatado que eu desejar. %d dia, %m mes, %y ano
    print(data_atual.strftime('%A %B %Y'))

def trabalhando_com_time():
    horario = time(hour=10,minute=20,second=30) #Criando um horario.
    print(horario)
    horario_str = horario.strftime('%H,%M,%S') #Formatado desejado.
    print(horario_str)

if __name__=='__main__':
    #trabalhando_com_date()
    #trabalhando_com_time() 
    trabalhando_com_datetime()   
