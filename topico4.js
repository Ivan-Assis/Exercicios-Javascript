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
    area: function(lado){ return lado * lado;},
    perimetro: function(lado){ return this.lados * lado;}
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



 





