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