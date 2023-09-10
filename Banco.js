/*Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que
incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo,
depósito, saque e número da conta. 
Observações: 
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final
do objeto; 
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do
objeto;
 - o número da conta deve retornar o número da conta.*/
function Banco(conta,saldo,tipo_de_conta,agencia){
    this.conta=conta;
    this.saldo=saldo;
    this.tipo_de_conta=tipo_de_conta;
    this.agencia=agencia;
    this.buscar_saldo=function(){
        console.log(`Seu saldo é de ${this.saldo} reais`);
    }
    this.deposito=function(valor){
        console.log()
        this.saldo += valor;
        console.log(`Você fez o depósito de ${valor} reais`)
        this.buscar_saldo()
    }
    this.saque=function(valor){
        console.log()
        this.saldo -= valor;
        console.log(`Você fez um saque de ${valor} reais`)
        this.buscar_saldo()
    }
    this.numero_da_conta=function(){
        console.log()
        console.log(`O número da sua conta é: ${this.conta}`)
    }
}
const banco1=new Banco(123456,10,"poupança",1011);
banco1.buscar_saldo();
banco1.deposito(10);
banco1.saque(5);
banco1.numero_da_conta();
