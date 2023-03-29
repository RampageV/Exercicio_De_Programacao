/* É um pattern muito popular em aplicações javascript.A instância(subscriber) mantém uma coleção de objetos(observers) e notifica todos eles 
quando ocorrem mudanças no estado. */


class Observable {

    constructor() { // Uma lista de observação
        this.observables = []
    }

    subscribe(fn) { // Adicionar novos itens na lista
        this.observables.push(fn);
    }

    notify(data) {
        this.observables.forEach(fn => fn(data))
    }

    unsubscribe(fn) {
        this.observables = this.observables.filter(obs => obs !== fn)
    }
}

const o = new Observable();

const logdata1 = data => console.log(`subscribe1: ${data}`)
const logdata2 = data => console.log(`subscribe2: ${data}`)
const logdata3 = data => console.log(`subscribe3: ${data}`)

o.subscribe(logdata1)
o.subscribe(logdata2)
o.subscribe(logdata3)

o.notify("Ok")

o.unsubscribe(logdata2)

o.notify("Apagado")
