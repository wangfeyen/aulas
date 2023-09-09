/*Crie um programa que contenha os seguintes
tipos de funções: 
1. uma função tradicional com a palavra
reservada “Function” e sem nenhum
parâmetro; 
2. uma função tradicional com parâmetros e
um retorno de valor; 
3. uma arrow function com parâmetros e que
retorne um valor. 
Crie um programa que utilize essas três
funções de forma lógica, por exemplo: um
programa de calculadora. 
*/

//1:
function soma1(){
    const prompt=require("prompt-sync")();
    const num1=parseFloat(prompt("Número 1: "));
    const num2=parseFloat(prompt("Número 2: "));
    const soma=num1+num2;
    console.log(`O resultado da soma é: ${soma}`);
}
soma1();

//2:
function soma2(num1,num2){
    soma=num1+num2;
    return soma;
}
const somatorio2=soma2(15,20);
console.log(`O resultado da soma é: ${somatorio2}`);

//3:
const soma3 = (num1,num2)=>`O resultado da soma é: ${num1+num2}`;
console.log(soma3(15,20));