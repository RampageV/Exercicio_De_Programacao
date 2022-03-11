/* Com lET */

let test = 'exemplo função';

(() => {

    console.log(`Valor dentro da funçao "${test}"`);

    if (true) {
        let test = 'exemplo com if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor apois a exercução do if "${test}"`);
})();