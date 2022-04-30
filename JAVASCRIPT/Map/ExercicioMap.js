function getmap(map) {// Criação da função
    let admins = []; // Array criado
    for ([key, value] of map) { /* Key é os nomes e value é se é admin ou usuario e o "for of" vai pegar os valores 
    direto do usuario, somente os valores*/
        if (value === 'Admin') { // Criado o if para comparar se o value é igual a admin
            admins.push(key); /* Chamando array e dando push, o push é um método para adicionar algo no array*/
        }
    }
    return admins
}

const usuario = new Map();

usuario.set('Luiz', 'Admin');// Método set adiciona.
usuario.set('Carlos', 'Admin');
usuario.set('Felipe', 'Admin');
usuario.set('Fernanda', 'Usuario');

console.log(getmap(usuario))


