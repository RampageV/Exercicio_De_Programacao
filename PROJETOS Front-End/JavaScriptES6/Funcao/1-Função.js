this.name = 'Erick Pessoa'

const getNameArrow = () => this.name

function getName() {
    return this.name;
}

const user = {
name: 'Usando objeto',
getNameArrow,
getName
}

console.log(user.getNameArrow())
console.log(user.getName())
console.log(user.name)

const mesa = [
    {
    name: 'Beto',
    Tamanho: 15,
    Idade: 20,
    Local: 'Avenida João Machado 885'
  },
  {
      Name: 'Erick',
      Idade:15
  }

]

if(Array.isArray(mesa)){

  console.log("Noob")
}