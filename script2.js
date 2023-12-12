
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let colpito = 0;
let danneggiato = 0;
let IDintervallo;

let campoGioco = document.getElementById("campo");
let primoDiv = document.getElementById("titolo");
let imm = document.getElementById("foto");
let btn = document.getElementById("bottone");
let tempo = document.getElementById("time");
let pt = document.getElementById("punti");
let audio = document.getElementById("myAudio");

function gioca() {

    if (btn.innerHTML == "Avvia gioco") {
        timer = setInterval(updateTimer, 1000);
        btn.innerHTML = "Termina gioco";
        genera();
        imm.style.display = "unset";

        IDintervallo = setInterval(genera, 1000);
    }
    else {
        alert("Gioco terminato! Hai colpito MrPoz "+colpito+" volte! Ora MrPoz deve farti un bel bocchinaccio!");
        window.location.href = 'index.html';
    }


}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    tempo.innerHTML = "Tempo: " + pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}

function genera() {
    let x, y;

    x = Math.floor(Math.random() * (campoGioco.clientWidth - imm.offsetWidth));
    y = Math.floor(Math.random() * (campoGioco.clientHeight - imm.offsetHeight));
    imm.style.left = x + "px";
    imm.style.top = y + "px";
}

function clickImm(){
    colpito++;
    pt.innerHTML = "MrPoz catturati: "+colpito;
    clearInterval(IDintervallo);
    genera();
    IDintervallo = setInterval(genera, 1000);
}

function playAudio() {
    audio.play();
}