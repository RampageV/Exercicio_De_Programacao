def consulta_cep(cep):
    import requests

    url = 'https://viacep.com.br/ws/%s/json/' % cep # O cep que vai ser passado no método, vai para a url onde fica o %s, o %cep ele faz a concatenização, colocando o cep que vai ser passado no método para url.
    
    response = requests.get(url) #request.get e passando a url que a gente deseja, a gente faz uma solicitação no site
    response_json = response.json() #response é como a gente quer ver a solicitação no site, e o json é o formato que a gente deseja ver
    
    return response_json



