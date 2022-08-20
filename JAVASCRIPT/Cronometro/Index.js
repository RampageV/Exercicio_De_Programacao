var sec = 0
var min = 0
var hours = 0
var interval

const son = document.getElementById('sound')
document.getElementById('alarm').value = '00:00:00' // O alarme começa com o tempo de '00:00:00'

/*Função para aparecer as duas casa decimais: 01,02,03,04, se ela ficaria: 1,2,3,4 */
function TwoDigits(digits) {
    if (digits < 10) {
        return ('0' + digits)
    } else {
        return digits
    }
}

/*O setInterval serve para executar uma função ou instrução várias vezes em um determinado intervalo de tempo,1000 é os segundos */
function start() {
    watch() // Estava iniciado a contagem dos segundos com atraso de um segundo, quando foi colocado a função, já foi adicionado +1 segundo,por causa que a função watch começa já com sec++.
     /*O 1000 é para a contagem contar a cada um segundo, se quiser aumentar a velocidade da contagem precisa diminuir o valor */
    interval = setInterval(watch, 1000)
     
}

/*ClearInterval serve para pausar a contagem, passando o que você deseja pausar */
function pause() {
    clearInterval(interval)
    son.pause()
    son.currentTime = 0 //CurrentTime especifica o tempo de reprodução atual em segundos. Quando coloca ele em 0, é o mesmo que zera a musica do começo, mesma coisa de um stop.
}
/* No stop a gente para a contagem com o ClearInterval, depois zera os valores e depois da um getElement.innerText com '00:00:00' para substituir a string anterior*/
function stop() {
    sec = 0
    min = 0
    hours = 0
    clearInterval(interval)
    document.getElementById('watch').innerText = '00:00:00'
    document.getElementById('alarm').value = '00:00:00'
    son.pause()
    son.currentTime = 0
}

/* Função contadora */
function watch() {

    sec++ /* Contador dos segundos, toda vez que a função watch for chama, sec vai adicionar um dentro dele */

    /* Se chegar a 60 segundo que vale a um minto, os segundos vão ser zerados e vai adicionar 1 em minutos */
    if (sec == 60) {
        sec = 0
        min++
        /*Quando chegar min chegar a 60, vai zera e adicionar mais um em horas e quando chegar em 24 horas ele vai zera */
    } else if (min == 60) {
        min = 0
        hours++
    } else if (hours == 24) {
        hours = 0
    }

    document.getElementById('watch').innerText = TwoDigits(hours) + ':' + TwoDigits(min) + ':' + TwoDigits(sec)
    sound()
}

function sound(){

    let alarm = document.getElementById('alarm').value;

    if(TwoDigits(hours) + ':' + TwoDigits(min) + ':' + TwoDigits(sec) == alarm ){
        son.play()
        clearInterval(interval)
    }
}

