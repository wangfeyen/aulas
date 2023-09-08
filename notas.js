/*Crie dois códigos de sistema de notas para uma
escola. O primeiro código deve ser um programa
que informa se o aluno reprovou, ou não, com
base nas três notas que ele adicionou ao
programa. Utilize, no mínimo, um operador de
atribuição e um operador ternário. O segundo
código é um programa que o aluno deve escrever
duas notas e o retorno informa a nota mínima que
ele deve tirar na próxima prova para poder passar
com nota sete
*/
function Aprovacao() {
    const prompt = require("prompt-sync")();
    console.log("Digite as 3 notas do aluno:");
    const nota1 = parseFloat(prompt("Nota 1: "));
    const nota2 = parseFloat(prompt("Nota 2: "));
    const nota3 = parseFloat(prompt("Nota 3: "));
    const media = (nota1 + nota2 + nota3) / 3;
    const resultado = media >= 7 ? "Aprovado" : "Reprovado";
    console.log(`O aluno está ${resultado}`);
}

function UltimaNota(){
    const prompt = require("prompt-sync")();
    console.log("Digite as 2 notas do aluno:");
    const nota1 = parseFloat(prompt("Nota 1: "));
    const nota2 = parseFloat(prompt("Nota 2: "));
    const nota3 = (7*3) - nota1 - nota2;
    console.log(`O aluno deve tirar pelo menos ${nota3} para passar`)
}
console.log("Programa para saber se o aluno está aprovado ou não:")
Aprovacao()
console.log()
console.log("Programa para saber a nota mínima para o aluno ser aprovado:")
UltimaNota();