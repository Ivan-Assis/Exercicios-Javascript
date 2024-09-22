//Retorne no console todas as imagens de um site

const imagens = document.querySelectorAll("img");

imagens.forEach(function (imagem) {
  console.log("imagem.src");
});

//Selecione o primeiro h2

const selecionaH2 = document.querySelector("h2");

//Selecione o último p do site

const ultimoP = document.querySelector("p:last-child");

//Mostre no console cada parágrafo do site

const paragrafo = document.querySelectorAll("p");

paragrafo.forEach(function (prg) {
  console.log(prg);
});

//Como corrigir os erros abaixo?
/*
ERRADO:

const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
    console.log(item, index);
});

let i = 0;
imgs.forEach( => {
    console.log(i++);
});

imgs.forEach(() => i++);
*/

//CORRETO:

const imgs = document.querySelectorAll("img");

imgs.forEach(function (item, index) {
  console.log(item, index);
});

imgs.forEach(function () {
  let i = 0;
  console.log(i++);
});

imgs.forEach(() => console.log(i++));


//EXERCÍCIOS:

//Adicioe a classe ativo a todos os itens do menu

const ativoMenu = document.querySelectorAll('menu > *');

ativoMenu.forEach(function(item){
    item.classList.add = ('.ativo');
});

for(i = 1; i < ativoMenu.length; i++)
{
    
}