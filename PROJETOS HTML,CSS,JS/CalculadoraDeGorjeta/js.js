document.getElementById('calculate').addEventListener('click', () => {

    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const time = document.getElementById('time').value;

    const total = value * (1 + fee) ** time; // Formula de juros composto

    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ',')) // ToFixed é em relação as casas decimais.
   
    document.getElementById('value').value = '';
    document.getElementById('fee').value = '';
    document.getElementById('time').value = '';

    setTimeout(() => {
        document.getElementById('total').innerHTML = 'R$ 0,00';
    }, 5000);


});