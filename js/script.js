let vidas = 3;
let naves = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let lateral=0;
let altura =0;
let jogo;

function tempo(){

    let txt;
    segundos++;
    if (segundos=60){
        minutos++;
        segundos=0;
    }
    if(minutos=60){
        horas++;
        minutos=0;
    }
    txt = horas + minutos + segundos;

    return txt
}

function jogo(){
    document.querySelector("#tempo").textContent = tempo();
}

