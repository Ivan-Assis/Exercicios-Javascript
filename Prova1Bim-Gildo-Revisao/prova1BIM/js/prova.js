/* 
Questão 01- Modo noturno 

Aplique o modo noturno na página apresentada:

    • Utilize JavaScript para selecionar o link "Modo Noturno", o body e os botões de Anterior e Próximo.
    • Adicione um event listener ao link "Modo Noturno" que detecte o evento de clique do mouse.
    • Quando o link for clicado, ative a classe dark ao body e troque a classe is-dark para is-light nos botões. 
    • Quando o link for clicado novamente as alterações devem ser desfeitas.
    • Atualize o texto do link para "Modo Diurno" quando o modo noturno estiver ativo e vice-versa.
*/

const modoNoturno = document.getElementById("toggleNightMode");
const corpo = document.querySelector("body");
const botaoAnterior = document.getElementById("prevButton");
const botaoProximo = document.getElementById("nextButton");

modoNoturno.addEventListener("click", function (evento) {
  evento.preventDefault();
  corpo.classList.toggle("dark");
  if (modoNoturno.innerText == "Modo Noturno") {
    modoNoturno.innerText = "Modo Diurno";
  } else {
    modoNoturno.innerText = "Modo Noturno";
  }
});
/*
Questão 02- Galeria de Imagens

Crie um script que apresente uma galeria de imagens:

    • Adicione um array no JavaScript contendo URLs de todas as imagens presentes na pasta “./images/bagmon/”
    • Utilize JavaScript para selecionar a área de visualização de imagem e os botões "Anterior" e "Próximo".
    • Defina a primeira imagem do array como a imagem inicial na área de visualização.
    • Adicione event listeners aos botões "Anterior" e "Próximo" que detectem o evento de clique do mouse.
    • Quando o botão "Anterior" for clicado, exiba a imagem anterior do array na área de visualização. Se a imagem atual for a primeira, exiba a última imagem do array.
    • Quando o botão "Próximo" for clicado, exiba a próxima imagem do array na área de visualização. Se a imagem atual for a última, exiba a primeira imagem do array.
*/

const arrayImagens = [
  "./images/bagmon/1.jpeg",
  "./images/bagmon/2.jpeg",
  "./images/bagmon/3.jpeg",
  "./images/bagmon/4.jpeg",
  "./images/bagmon/5.jpeg",
  "./images/bagmon/6.jpeg",
  "./images/bagmon/7.jpeg",
  "./images/bagmon/8.jpeg",
  "./images/bagmon/9.jpeg",
  "./images/bagmon/10.jpeg",
  "./images/bagmon/11.jpeg",
  "./images/bagmon/12.jpeg",
];

const altImagens = [
    "Pokemon 1",
    "Pokemon 2",
    "Pokemon 3",
    "Pokemon 4",
    "Pokemon 5",
    "Pokemon 6",
    "Pokemon 7",
    "Pokemon 8",
    "Pokemon 9",
    "Pokemon 10",
    "Pokemon 11",
    "Pokemon 12"
]

const areaVisualizacao= document.querySelector(".image img");

let indiceImagem = 0;
areaVisualizacao.src = arrayImagens[indiceImagem];
areaVisualizacao.alt = altImagens[indiceImagem];

botaoAnterior.addEventListener("click", function(evento){
    evento.preventDefault();
    if(indiceImagem <= 0)
    {
        indiceImagem = arrayImagens.length-1;
        areaVisualizacao.src = arrayImagens[indiceImagem];
        areaVisualizacao.alt = altImagens[indiceImagem]
    }

    else {
        indiceImagem--;
        areaVisualizacao.src = arrayImagens[indiceImagem];
        areaVisualizacao.alt = altImagens[indiceImagem]
    }
})

botaoProximo.addEventListener("click", function(evento){
    evento.preventDefault();
    if(indiceImagem >= arrayImagens.length-1)
    {
        indiceImagem = 0
        areaVisualizacao.src = arrayImagens[indiceImagem];
        areaVisualizacao.alt = altImagens[indiceImagem];
    }
    else{
        indiceImagem++;
        areaVisualizacao.src = arrayImagens[indiceImagem];
        areaVisualizacao.alt = altImagens[indiceImagem];
    }

})
/*
Questão 03 - Extra

Crie um script para mostrar no campo texto alternativo (alt) da imagem o nome do respectivo Bágmon.

*/
