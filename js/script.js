let vidas = 3;
let naves = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let movimento = 1;

let tiros = 0;
let misseisNoTopo = 0;

function tempo(){

    segundos++;

    if (segundos == 60){
        minutos++;
        segundos = 0;
    }

    if(minutos == 60){
        horas++;
        minutos = 0;
    }

    return horas + ":" + minutos + ":" + segundos;
}

function jogo(){

    movimentacao();

    setInterval(() => {
        document.querySelector("#tempo").textContent = tempo();
    }, 1000);
}

function movimentacao(){

    let nave = document.querySelector("#movimentacao");
    let posicao = 28;

    nave.style.right = posicao + "cm";

    document.addEventListener("keydown", (event) => {

        if (event.key === "ArrowLeft" && posicao < 49) {
            posicao += movimento;
            nave.style.right = posicao + "cm";
        }

        if (event.key === "ArrowRight" && posicao > 1) {
            posicao -= movimento;
            nave.style.right = posicao + "cm";
        }

    });
}

function disparar(){

    tiros++;

    let missil;

    if (tiros == 1){
        missil = document.querySelector("#missil1");
    } 
    else if (tiros == 2){
        missil = document.querySelector("#missil2");
    } 
    else {
        return;
    }

    let altura = 0;

    let tiro = setInterval(() => {

        altura += 22;
        missil.style.bottom = altura + "cm";

        if (altura > 500){
            clearInterval(tiro);
            misseisNoTopo++;

            if(misseisNoTopo == 2){
                voltarMisseis();
            }
        }

    }, 20);
}

function voltarMisseis(){

    let missil1 = document.querySelector("#missil1");
    let missil2 = document.querySelector("#missil2");

    let tiro = setInterval(() => {

    altura += 1;
    missil.style.bottom = altura + "cm";

    if (altura >= 29){
        clearInterval(tiro);
        misseisNoTopo++;

        if(misseisNoTopo == 2){
            voltarMisseis();
        }
    }

}, 20);
}

document.addEventListener("keydown", (event) => {

    if (event.code === "Space"){
        disparar();
    }

});

window.onload = jogo;