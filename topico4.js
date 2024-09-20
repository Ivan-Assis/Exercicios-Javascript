//Objetos:

// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos. Propriedades e métodos consistem em nome (chave) e valor.

// Isso é um objeto

let pessoa = {
    nome: 'joao',
    idade: 28,
    profissao: 'desenvolvedor',
    frequente: true
}

console.log(pessoa.nome); //joao
console.log(pessoa.frequente); //true


//Métodos

//É uma propriedade que possui uma função no local do seu valor. (propriedade = "atributo" do objeto):


/*

forma: abreviada (sem function)

let quadrado = {
    lados: 4,
    area: function(lado){ return lado * lado;},
    perimetro: function(lado){ return this.lados * lado;}
}

*/

let quadrado = {
    lados: 4,
    area: function (lado) { return lado * lado; },
    perimetro: function (lado) { return this.lados * lado; }
}

console.log(quadrado.lados); //retorna 4
console.log(quadrado.area(5));
console.log(quadrado.perimetro(4));

//Organização

//Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; //3.14
Math.random //número aleatório

let pi = Math.PI;
console.log(pi); //3.14

//Criando um objeto
//Um objeto é criado utilizando "{}", ou seja, é uma variável que recebe "{}"

let carro = {};
let pessoa1 = {};

console.log(typeof carro); //objeto

//Dot notation Get
//Acesse propriedades de um objeto utilizando ponto "."

let menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E'
}

let bg = menu.backgroundColor; //#84E

//Dot Notation Set

//Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

let menu1 = {
    width: 50,
    height: 100,
    backgroundColor: '#83E'
}

menu.backgroundColor = '100F';
console.log(menu.backgroundColor); //'100F'


//Adicionar propriedades e métodos

//Basta adicionar um novo nome e definir o valor..

let menu = { width: 100 }

menu.height = 50;
menu.position = 'fixed';

//Palavra-chave this

//this irá fazer referência ao próprio objeto.

let height = 120;
let menu = {
    width: 100,
    height: 50,
    halfHeight() {
        return this.height / 2;
    }
}

console.log(menu.halfHeight()); //25, sem o this, seria 60

//Tudo é Objeto

//Strings, números, boolean, objetos e mais, possuem propriedades e métodos. Por isso são objetos.

let nome = 'Joaozinho';
nome.length; //'9'
nome.charAt(1); //'o'
nome.replace('inho', 'ão'); //'Joãozão
nome; //'Joãozinho'

//Uma string herda propriedades e métodos do construtor String()

let altura = 1.8;

altura.toString(); //1.8
altura.toFixed();//2

//O número, temporariamente é envolvido em um Objeto(coerção), tendo acesso assim as suas propriedades e métodos

//Funções

function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.toString();
/*
function areaQuadrado(lado){
    return lado * lado;
} 
*/

//Elementos do DOM

let botao = document.querySelector('.botao'); //Pega o primeiro elemento da classe botão
botao.classList.add('azul') //adiciona a classe azul
botao.innerText; //'Clique'
botao.addEventListener('click', function () {
    console.log('Clicou');
})


//EXERCÍCIOS ---------------------------

//NOMEIE 3 PROPRIEDADES OU MÉTODOS DE STRINGS

let variavelExercicio = 'texto'
//Métodos
console.log(variavelExercicio.toLocaleUpperCase());
console.log(variavelExercicio.toLowerCase());
console.log(variavelExercicio.includes("mundo"));

//Propriedades:

console.log(variavelExercicio.length);
console.log(variavelExercicio.charAt(1));
console.log(variavelExercicio.indexOf("batata"));

//Arrays e Loops

//Array é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

let videoGames = ['Switch', 'PS5', 'Xbox'];
videoGames[0] //Switch
videoGames[2] //Xbox

//Métodos e Propriedades de uma Array

let videoGames1 = ['Switch', 'PS5', 'Xbox'];

videoGames1.pop();//Remove o último item e retorna ele
videoGames.push('3DS');//Adiciona ao final da Array
videoGames.length;//3

// For Loop

//O for loop possui 3 partes, início, condição e incremento

for (let numero = 0; numero < 10; numero++) //retorna de 0 a 9
{
    console.log(numero);
}

//While

let i = 0

while (i < 10) {
    console.log(i);
    i++
    //retorna de 0 a 9 no console
}

//Array com Loop

let videoGames2 = ['playstation1', 'playstation2', 'playstation3'];

for (let i = 0; i < videoGames2.length; i++) {
    console.log(videoGames2[i]);
}

//Break

for (let i = 0; i < videoGames2.length; i++) {
    console.log(videoGames2[i]);
    if (videoGames2 == 'playstation2') {
        break;
    }
}

//forEach

//forEach é um método que executa uma função para cada item da Array.
//É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

videoGames2.forEach(function (item) {
    console.log(item);
});

// O argumento item será atribuído dinamicamente - Podemos passar os seguintes parâmetros: item, index e array.

//EXERCÍCIOS ----------------------------

//Crie uma array com os anos que o Brasil ganhou a copa e interaja com a array utilizando um loog, para cada ano mostrar no console a eguinte mensagem: O brasil ganou a copa de ANO;

let anosVencedores = ['1958', '1962', '1970', '1994', '2002'];

anosVencedores.forEach((item) => {
    console.log(`O brasil ganhou a copa de ano ${item}`);
});

//Interaja com um loop nas frutas abaixo e pare ao encontrar Pera

let frutas = ['banana', 'maçã', 'pera', 'uva', 'melancia']

for(i = 0; i < frutas.length; i++)
{
    console.log(frutas[i]);
    if(frutas[i] == 'pera')
    {
        break;
    }
    
}


//Coloque a última fruta do array acima em uma variável, sem remover a mesma da array, depois imprima essa variável no console


let ultimaFruta = frutas[frutas.length];

console.log(ultimaFruta);
