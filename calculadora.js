/*Com os conceitos aprendidos, crie um programa de calculadora que:
- receba dois valores, que devem ser salvos em variáveis; 
- o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
- com os dois valores e o operador definido, o programa deve fazer a operação e retornar o
resultado; 
- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. */

const prompt=require("prompt-sync")();
console.log("Insira dois números:");
var num1 = parseFloat(prompt("Número 1: "));
var num2 = parseFloat(prompt("Número 2: "));
console.log()
console.log("Operadores:");
console.log("soma: +");
console.log("subtração: -");
console.log("divisão: /");
console.log(`multiplicação: *`);
var operador = prompt("Digite o operador desejado:")
let resultado;
let resto;
switch (operador) {
    case "+":
        resultado = num1 + num2;
        break;

    case "-":
        resultado=num1 - num2;
        break;

    case "*":
        resultado=num1*num2;
        break;

    case "/":
        resultado=num1/num2;
        resto=num1%num2;
        break;

    default:
        resultado="Operador inválido!"
        break;
}
console.log(`O resultado é: ${resultado}`);
if(operador==="/"){
    console.log(`E o resto é: ${resto}`)
}