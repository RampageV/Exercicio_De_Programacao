function Person(NameInicial) {
    let name = NameInicial;

    this.getName = function () {
        return name;
    }

    this.setName = function (NewName) {
        name = NewName;
    }
}

const p = new Person('Carlos');

console.log(p)

p.getName // Carlos

p.name // undefined

p.setName("Erick")

p.getName; //Erick