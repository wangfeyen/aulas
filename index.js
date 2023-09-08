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