/* 
O objetivo deste teste é criar um jogo da memória simples. Utilizando Letras.
Para isto utilize Javascript para desenvolver o que se pede.

Ao final envie comente o arquivo .js, então todas as respostas devem estar neste arquivo e o html e o css não devem ser alterados.

O jogo terá 5 letras: A, B, C, D, E. 

As letras serão repetidas 2 vezes no jogo, totalizando 10 cartas.

O jogador deverá clicar em duas cartas, se as cartas forem iguais, elas devem ser mantidas viradas (Seu valor aparecerá na tela). Se forem diferentes, as cartas devem ser viradas novamente (Aparecerá um X no lugar da carta).

- Questao 1: Crie um array com as letras do jogo. (0.2pts)

Crie um array com as cartas a serem jogadas, utilize letra maiuscula. O array deverá ter 10 cartas, sendo 2 de cada letra.

- Questao 2: Virada das cartas (0.4pts)

Selecione todas as cartas e adicione um evento de clique em cada carta. 
Ao clicar na carta, a carta deve ser "virada" e mostrado o seu valor.
Utilize o atributo posicao para identicar a carta clicada no array de cartas.

- Questao 3: Verificação de cartas (0.5pts)

Verifique se as duas cartas clicadas são iguais.
Se as cartas forem iguais, elas devem ser mantidas viradas.
Se as cartas forem diferentes, as cartas devem ser viradas novamente (O valor X deve ser exibido). 
Lembre que você pode usar variáveis para armazenar a carta clicada anteriormente.

- Questao 4: Aplique a classe referente a cada carta (0.4pts)

Ao virar a carta adicione a classe css correspondente a carta clicada (ex: A).
Ao desvirar a carta ela deve voltar ter somente a sua classe original (card).


- Questão extra: (0.5pts)

Aplique a função setTimeout para caso o par não seja igual que as cartas sejam desviradas somente após 1 segundo.

O método setTimeout permite executar um código após um tempo estipulado, que pode ser definido em milissegundos. O método executará o código apenas uma vez.

setTimeout(function, milliseconds);

O primeiro parâmetro é a função que será executada e o segundo é o tempo em milissegundos, lembrando que 1s é igual a 1000ms.
*/

const arrayCartas = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E"];

let carta1 = null;
let carta2 = null;
let bloqueio1 = false;
let bloqueio2 = false;
let posicao = null;
let texto = "X";

const cartas = document.querySelectorAll(".card");

cartas.forEach(function (carta, index) {
  carta.addEventListener("click", function () {
    if (bloqueio1 == true && bloqueio2 == true) return;

    if (!carta1) {
      carta1 = carta;
      posicao1 = carta.getAttribute("posicao");
      carta1.textContent = arrayCartas[posicao1];
      carta.classList.add(arrayCartas[posicao1]);
      bloqueio1 = true;
    } else {
      carta2 = carta;
      posicao2 = carta.getAttribute("posicao");
      carta2.textContent = arrayCartas[posicao2];
      carta.classList.add(arrayCartas[posicao2]);
      bloqueio2 = true;

      if (carta1.textContent == carta2.textContent) {
        carta1 = carta.removeEventListener("click", function (carta) {});
        carta2 = carta.removeEventListener("click", function (carta) {});
        zerador();
      } else {
        setTimeout(function () {
          (carta1.textContent = "X"), (carta2.textContent = "X"), (carta1.classList.remove(arrayCartas[posicao1])), (carta2.classList.remove(arrayCartas[posicao2])), zerador();
        }, 1000);
      }
    }
  });
});

function zerador() {
  bloqueio1 = null;
  bloqueio2 = null;
  posicao = null;
  carta1 = null;
  carta2 = null;
}
