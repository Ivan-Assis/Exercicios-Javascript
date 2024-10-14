/*
 * Questão 1 (1 pt):
 *
 * Crie dois arrays, um com nome de heart e outro com nome de spade.
 * Escreva nesses arrays cada string contendo o nome dos arquivos de imagem que estão nas respectivas pastas dentro de cards.
 * Selecione as duas imagens contidas dentro do html.
 * Selecione o botão e também a div com id "resultado".
 */
const imagens = document.querySelectorAll("img");

const botao = document.querySelector("button");

const resultado = document.getElementById("resultado");

let retrato1 = null;
let retrato2 = null;
let bloqueio1 = null;
let bloqueio2 = null;
let numeroAleatorio1 = null;
let numeroAleatorio2 = null;

const exibirResultado = document.createElement("h1");

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

/*
 * Questão 2 (1 pt):
 * Ao clicar no botão, faça com que as imagens sejam trocadas por outras imagens contidas nos arrays criados na questão 1.
 * Utilize a função getRandomInt para selecionar aleatoriamente um elemento do array.
 */

botao.addEventListener("click", function () {
  imagens.forEach(function (imagem) {
    if (bloqueio1 == true && bloqueio2 == true) return;

    if (!retrato1) {
      numeroAleatorio1 = getRandomInt(heart.length);
      retrato1 = heart[numeroAleatorio1];
      imagem.src = retrato1;
      bloqueio1 = true;
    } else {
      numeroAleatorio2 = getRandomInt(spade.length);
      retrato2 = spade[numeroAleatorio2];
      imagem.src = retrato2;
      bloqueio2 = true;
      exibirVencedor(numeroAleatorio1, numeroAleatorio2);
    }
  });
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
  bloqueio1 = false;
  bloqueio2 = false;
  retrato1 = null;
  retrato2 = null;
  numeroAleatorio1 = null;
  numeroAleatorio2 = null;
}

/*
 * Função que retorna um número inteiro aleatório entre 0 e o valor máximo passado como parâmetro
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*
 * Questão 3 (1 pt):
 * Verifique as cartas sorteadas e exiba dentro de um h1 na div com id "resultado" quem foi o vencedor: Espadas (spades) ou Copas (heart).
 * O vencedor será aquele que tiver a carta com o maior valor.
 * Assuma que o Ás é o maior valor e o 2 é o menor. Sendo a sequência de valores: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A.
 * Indique também o caso de empate.
 */
