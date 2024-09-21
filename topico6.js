//DOM - Document Object Model (DOM)
// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
//WINDOW É O OBJETO GLOBAL DO BROWSER
//POSSUI DIFERENTE MÉTODOS E PROPRIEDADES
window.innerHeight; //retorna a altura do browser

//Window e Document

//São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

window.alert("Isto é um alerta");
alert("Isso é um alerta"); //funciona

document.querySelector("h1"); //Seleciona o primeiro h1
document.body; //retorna o body

//Node

//Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const titulo = document.querySelector("h1");

titulo.innerText; //retorna o texto
titulo.classList; //retorna as classes
titulo.id; // retorna o id
titulo.offsetHeight; //retorna a altura do elemento
titulo.addEventListener("click", callback); //ativa a funcao de callback ao click no titulo

//ID

//getElementById seleciona e retorna elementos do DOM

//Seleciona pelo ID:
const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");

//Retorna null caso não exista

const naoExiste = document.getElementById("teste");

//Classe e Tag (AO VIVO)

//getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection

const gridSection = document.getElementsByClassName("grid-section");
const contato = document.getElementsByClassName("grid-section contato");

// Seleciona todas as UL's, retorna uma HTMLCollection

const ul = document.getElementsByTagName("ul");

//Retorna o primeiro elemento:

console.log(gridSection[0]);

//Seletor geral único (ESTÁTICO)

//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector(".animais");
const contato1 = document.querySelector("#contato1");
const ultimoItem = documentl.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

//Busca dentro do Ul apenas

const navItem = primeiroUl.querySelector("li");

//Seletor geral lista

//querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const gridSection1 = document.querySelectorAll(".grid-section");
const listas = document.querySelectorAll("ul");
const titulos = document.querySelectorAll(".titulo");
const fotosAnimais = document.querySelectorAll(".animais-lista img");

//Retorna o segundo elemento
console.log(gridSection1[1]);

//HTMLCOLLECTION (getElementBy) & NODELIST (querySelectorAll)

//A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const titulo1 = document.querySelectorAll(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode2 = document.querySelectorAll(".grid-section");
