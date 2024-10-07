/*
Exercício 4: Criando um jogo de memória
Objetivo: criar um jogo de memória usando JavaScript e manipulação do DOM.
*/

let carta1 = null;
let carta2 = null;
let bloqueio = false;

const cartas = document.querySelectorAll(".card");

cartas.forEach(function (carta) {
  carta.addEventListener("click", function () {
    if (bloqueio || carta.classList.contains("flip")) return;

    carta.classList.add("flip");
    carta.textContent = carta.getAttribute("data-card");

    if (!carta1) {
      carta1 = carta;
    }

    else{
      carta2 = carta;
      bloqueio = true;
      if(carta1.getAttribute("data-card") === carta2.getAttribute("data-card"))
      {
        carta1 = carta.removeEventListener('click', null);
        carta2 = carta.removeEventListener('click', null);
        zerador();
      }
      else{
       // Se forem diferentes, desvira as cartas após 1 segundo
        setTimeout(function () {
          carta1.classList.remove("flip");
          carta1.textContent = "";
          carta2.classList.remove("flip");
          carta2.textContent = "";
          zerador();
        }, 1000);
      }
    }
  });
});

function zerador() {
  carta1 = null;
  carta2 = null;
  bloqueio = false;
}