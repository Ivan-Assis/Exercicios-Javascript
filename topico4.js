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
botao.addEventListener('click', function(){console.log('Clicou');
})






