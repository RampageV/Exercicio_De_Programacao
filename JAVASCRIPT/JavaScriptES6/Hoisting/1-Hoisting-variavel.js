function fn() {

    console.log(text)

    var text = 'casa'
    console.log(text)
}

fn()

console.log("-------------------------------------------------")
/* Com Hoisting */
function fn2() {

    var text;
    console.log(text)

    text = 'casa'

    console.log(text)
}

fn2()