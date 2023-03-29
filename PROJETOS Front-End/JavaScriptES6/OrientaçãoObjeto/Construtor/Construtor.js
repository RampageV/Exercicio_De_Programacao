function pessoa(name){
    this.name = name
    }
    const nomes = new pessoa('Erick');
    
    console.log(nomes) // Saida: Erick
    
    console.log(nomes instanceof pessoa) // true