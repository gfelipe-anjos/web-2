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
    document.addEventListener("keydown", disparar)

    setInterval(() => {
        document.querySelector("#tempo").textContent = tempo();
    }, 1000);
}

function movimentacao(){

    let nave = document.querySelector("#movimentacao");
    let posicao = 28;

    nave.style.right = posicao + "cm";

    document.addEventListener("keydown", (event) => {

        if (event.key === "ArrowLeft" && posicao < 50) {
            posicao += movimento;
            nave.style.right = posicao + "cm";
        }

        if (event.key === "ArrowRight" && posicao > 3) {
            posicao -= movimento;
            nave.style.right = posicao + "cm";
        }

    });
}

function disparar(event){


    if(event.code !== "Space") return

    let missel1 = document.querySelector("#missil1")
    let missel2 = document.querySelector("#missil2")
    misseisNoTopo++

    if(tiros < 2 ){

        let missil = tiros === 0 ? missel1 : missel2 
        let altura = 0

        tiros++

        let intervalo = setInterval(() => {

            altura++
            missil.style.bottom = altura + "cm"

            if(altura >= 22){
                clearInterval(intervalo)
            }

        }, 20)
    }
    if(misseisNoTopo === 3){
        tiros = 0
        misseisNoTopo = 0
        missel1.style.bottom = 0 +"cm"
        missel2.style.bottom = 0 + "cm"
    }
}



window.onload = jogo;