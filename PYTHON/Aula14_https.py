import requests

def retorna_cep(cep):
    requisete = requests.get('https://viacep.com.br/ws/{}/json'.format(cep))
    print(requisete.status_code) #Se aparecer 200 é que ele acesso com sucesso, mas se passar de 200 é porque essa página não foi encontrada
    print(requisete.json()) #Vai imprimir o text da web no console.
    print(type(requisete.json())) #Mostra que é uma string se for text, mas se for json, ele mostra que é uma formato de dicionario

    dado_cep = requisete.json() # Com o json, consego acessar os array.
    print(dado_cep['logradouro']) # Aqui me mostra o local do array que é o logradouro e o que tem dentro dele.
    print(dado_cep['bairro'])

def pokemon_retorn(pokemon):
    requisete = requests.get('https://pokeapi.co/api/v2/pokemon/{}/'.format(pokemon))
    dados_pokemon = requisete.json()
    return dados_pokemon

def retorna_response(url): # Serve para ver o html da página
    requisete = requests.get(url)
    return requisete.text

if __name__=='__main__':
        print(retorna_response('https://mobile.muaway.net/#!/faq'))
        #retorna_cep('01001-000')
        #print(pokemon_retorn('pikachu'))


