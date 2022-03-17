class Animal {
    constructor(qtsPatas) {
        this.qtsPatas = 4;
    }
}

class Cachorro extends Animal{
    constructor(morde) {
        super()
        this.morde = 4;
    }
}

const animais = new Cachorro()

console.log(animais)