/*
Exercício 1: Criando um jogo da velha
Objetivo: criar um jogo da velha usando JavaScript e manipulação do DOM. Não precisa
verificar vencedores.
*/
let contador = 2;
const celulas = document.querySelectorAll("td");
const botaoReiniciar = document.getElementById("reset");

celulas.forEach(function (celula) {
  celula.addEventListener("click", function () {
    if (contador % 2 == 0 && celula.innerText == "") {
      celula.innerText = "X";
      contador++;
    } else if (contador % 2 != 0 && celula.innerText == "") {
      celula.innerText = "O";
      contador++;
    } else if (celula.innerText != "") {
      console.log("ESCOLHA UMA CÉLULA VÁLIDA");
    }
  });
  botaoReiniciar.addEventListener("click", function (event) {
    event.preventDefault();
    celula.innerText = "";
    contador = 0;
  });
});


