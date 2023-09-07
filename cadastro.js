/*Vamos criar um cadastro de pessoa com os
seguintes dados: nome, salário, idade e se possui
diploma. Antes de começar a codificação,
identifiquem os tipos de cada variável. Em
seguida, desenvolvam o código utilizando
exemplos para cada variável que respeitem os
tipos identificados. Certifiquem-se de que os
valores correspondam aos tipos de dados
corretos.

Resposta:

tipos de dados:

nome: string;
salário: number;
idade: number;
possui diploma: boolean;
*/

const nome="Fulano";
const salario=2000;
const idade=27;
const diploma=true;

console.log();
console.log("Cadastro confirmado!!!");
console.log();
console.log("Seus dados são:");
console.log(`Nome: ${nome}`);
console.log(`Salário: R$${salario},00`);
console.log(`Idade: ${idade}`);
console.log(`Possui diploma: ${diploma}`);
console.log();

console.log("Confirmação de tipos de dados:");
console.log(`Nome: ${typeof(nome)}`);
console.log(`Salário: ${typeof(salario)}`);
console.log(`Idade: ${typeof(idade)}`);
console.log(`Possui diploma: ${typeof(diploma)}`);