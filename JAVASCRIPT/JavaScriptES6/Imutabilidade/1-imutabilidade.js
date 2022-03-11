const user = {
  name:'Guilherme',
  LastName: 'Pessoa'  
}

function getUserWithFullName(user){
    return{
        ...user,
        fullName: `${user.name} ${user.LastName}`
    }
}

const UserWithFullName = getUserWithFullName(user)

console.log(UserWithFullName)