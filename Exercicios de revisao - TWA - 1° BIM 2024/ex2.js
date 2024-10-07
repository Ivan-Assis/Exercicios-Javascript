/*
Exercício 2: Criando um contador de cliques
Objetivo: criar um contador de cliques usando JavaScript e manipulação do DOM.
*/

const botao = document.getElementById("click-me");
const counter = document.getElementById("counter");
let contador = 0;

botao.addEventListener("click", function(){
    contador++;
    counter.innerText = contador;
})
