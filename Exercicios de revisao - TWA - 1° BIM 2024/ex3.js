/*
    Exercício 3: Criando uma lista de tarefas
Objetivo: criar uma lista de tarefas usando JavaScript e manipulação do DOM. Para pegar
os valores dos inputs use a propriedade value */

const insercao = document.getElementById("new-task");
const botao = document.getElementById("add-task");

const ul = document.getElementById("task-list");

botao.addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = insercao.value;
  ul.appendChild(li);
  insercao.value = "";
});
