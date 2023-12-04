console.log('Seja bem vindo!');

let nome = 'Pedro Henrique';
console.log(`Olá, ${nome}!`);

alert(`Olá! ${nome}`);

let resp = prompt('Qual linguagem de programação você mais gosta?');
console.log(resp);

let valor1 = 10;
let valor2 = 20;

let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

resultado = valor1 - valor2;
console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado}`);

let idade = prompt('Informe sua idade');

if (idade >= 18) {
    console.log('Você é maior de idade');

} else {
    console.log('Você é menor de idade');
}

let numero = prompt('Informe um número');

if (numero < 0){
    console.log('O número informado é negativo');

} else if (numero > 0) {
    console.log('O número informado é positivo');

} else {
    console.log('O número informado é zero');
}

