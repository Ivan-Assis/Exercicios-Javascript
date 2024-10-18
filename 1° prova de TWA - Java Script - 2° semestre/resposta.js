const imagens = document.querySelectorAll("img");

const botao = document.querySelector("button");

const resultado = document.getElementById("resultado");

const exibirResultado = document.createElement("h1");

let numeroAleatorio1 = null;
let numeroAleatorio2 = null;

const heart = [
    "./cards/heart/2.svg",
    "./cards/heart/3.svg",
    "./cards/heart/4.svg",
    "./cards/heart/5.svg",
    "./cards/heart/6.svg",
    "./cards/heart/7.svg",
    "./cards/heart/8.svg",
    "./cards/heart/9.svg",
    "./cards/heart/10.svg",
    "./cards/heart/J.svg",
    "./cards/heart/Q.svg",
    "./cards/heart/K.svg",
    "./cards/heart/A.svg",
];

const spade = [
    "./cards/spade/2.svg",
    "./cards/spade/3.svg",
    "./cards/spade/4.svg",
    "./cards/spade/5.svg",
    "./cards/spade/6.svg",
    "./cards/spade/7.svg",
    "./cards/spade/8.svg",
    "./cards/spade/9.svg",
    "./cards/spade/10.svg",
    "./cards/spade/J.svg",
    "./cards/spade/Q.svg",
    "./cards/spade/K.svg",
    "./cards/spade/A.svg",
];

botao.addEventListener("click", function () {
    numeroAleatorio1 = getRandomInt(heart.length);
    imagens[0].src = heart[numeroAleatorio1];
    numeroAleatorio2 = getRandomInt(spade.length);
    imagens[1].src = spade[numeroAleatorio2];
    exibirVencedor(numeroAleatorio1, numeroAleatorio2);
});

function exibirVencedor(numeroAleatorio1, numeroAleatorio2) {
    if (numeroAleatorio1 > numeroAleatorio2) {
        exibirResultado.innerText = "Heart ganhou";
        resultado.appendChild(exibirResultado);
        zerador();
    } else if (numeroAleatorio1 < numeroAleatorio2) {
        exibirResultado.innerText = "Spade ganhou";
        resultado.appendChild(exibirResultado);
        zerador();
    } else {
        exibirResultado.innerText = "Empate";
        resultado.appendChild(exibirResultado);
        zerador();
    }
}

function zerador() {
    numeroAleatorio1 = null;
    numeroAleatorio2 = null;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
