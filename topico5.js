/*
    Nesta semana iniciamos nossos estudos relativos ao DOM. Vamos aprofundar
    nossos estudos lendo um pouco mais a documentação do DOM na fundação
    Mozilla:
    https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction

*/

//console.log(window);

//window.innerHeight;

/*window.alert('Isso é um alerta');
alert('Isso ér um alerta');*/

//window abre uma janela

/*
Toda tag html é representada pelo objeto element e por isso herda os seus metodos e propriedas Element é um tipo de objeto Node.
*/

const titulo = document.querySelector("h1");

titulo.innerText; //retorna o texto do elemento
titulo.classList; //retorna as classes
titulo.id; // retorna o id
titulo.offsetHeight; // retorna a altura do elemento

titulo.addEventListener("click", callback);
// ativa a função calback ao click no titulo

//Selecona pelo ID
const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");

//Retorna null caso não exista

const naoExiste = document.getElementById("teste");

//getElementByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection

const gridSection = document.getElementsByClassName("grid-section");
const contato = document.getElementsByClassName("grid-section contato");

// Seleciona todas as UL's, retorna uma HTMLCollection

const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[0]);

//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS
const animais = document.querySelector(".animais");
const contatoID = document.querySelector("#contatoID");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

//Busca dentro do Ul apenas

const navItem = primeiroUl.querySelector("li");

//querySelectorAll retorna todos os elementos compativeis com o seletor CSS em uma NodeList

const gridSection2 = document.querySelectorAll(".grid-section");
const listas = document.querySelectorAll("ul");
const titulos = document.querySelectorAll(".titulo");
const fotosAnimais = document.querySelectorAll(".animais-lista img");

// Retorna o segundo elemento
console.log(gridSection[1]);

document.getElementsByTagName("img");

for (let i = 0; i < iagens.Lenght; i++) {
  console.log(img.src);
}
document.querySelector("h2");

const ultimoP = document.querySelectorAll('p');{
    console.log(ultimoP[ultimoP.lenght -1]);
}
