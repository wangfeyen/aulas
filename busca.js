/*Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos 
criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou 
binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.*/

// Resposta: Busca linear, pois a lista não está em ordem crescente
function encontrar(lista,numero){
    for(i=0;i<lista.length;i++){
        if(numero===lista[i]){
            return +i+1+"º posição"
        }
    }
}
const array=[15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
let posicao=encontrar(array,20)
console.log(posicao)