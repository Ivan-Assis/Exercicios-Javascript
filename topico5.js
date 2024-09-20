//Escopo de função

//Variáveis declaradas dentro de funções NÃO são acessadas fora da mesmas.

function mostrarCarro(){
  let carro = 'Fusca';
  console.log(carro);  
}

mostrarCarro();//Fusca no console
console.log(carro);//Erro, carro is not defined

//Variável global (erro)

//Declarar variáeis sem a palavra chave var, const ou let, cria uma variável que pode ser acessada em qualquer escopo (global). Isso é um erro. 'use strict' impede isso.

function mostrarCarro2(){
  /*note que aqui está sem o let */carro = 'Fusca';
  console.log(carro);
}

mostrarCarro2(); //Fusca
mostrarCarro2(carro); //Fusca

//Escopo de função (PAI)

let carro = 'Fusca';

function mostrarCarro3(){
  let frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro3(); //Meu carro é um fusca
console.log(carro); //Fusca

//CRIAÇÃO DE BLOCOS

//'{}' cria um bloco ( NÃO CONFUNDIR COM CRIAÇÃO DE OBJETOS '={}')

{
  let carro1 = 'Fusca';
  const ano = 2018;
}

console.log(carro);
console.log(ano);

/*O de fora não acessa o de dentro, ou seja, = undefined */





