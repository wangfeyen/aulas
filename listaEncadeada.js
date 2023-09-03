class Pessoa{
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
        this.filho=null;
        this.cabeca=null;
    }
    addfirst(novo_nome,nova_idade){
        const novapessoa=new Pessoa(novo_nome,nova_idade);
        novapessoa.filho=this.cabeca;
        this.cabeca=novapessoa;
    }
    addlast(novo_nome,nova_idade){
        const novapessoa=new Pessoa(novo_nome,nova_idade);
        if(!this.cabeca){
            this.cabeca=novapessoa;
        }else{
            let atual=this.cabeca;
            while(atual.filho){
                atual=atual.filho;
            }
            atual.filho=novapessoa;
        }
    }
    removeFirst(){
        if(!this.cabeca){
            return null;
        }
        const removerPessoa=this.cabeca;
        this.cabeca=this.cabeca.filho;
        removerPessoa.filho=null;
        return removerPessoa.nome;
    }
    removeLast(){
        if(!this.cabeca){
            return null;
        }
        if(!this.cabeca.filho){
            const removerPessoa=this.cabeca;
            this.cabeca=null;
            return removerPessoa.nome;
        } 
        let atual=this.cabeca;
        let anterior=null;
        while(atual.filho){
            anterior=atual;
            atual=atual.filho;
        }
        anterior.filho=null;
        return atual.nome;
    }
    search(Nome){
        let atual=this.cabeca;
        while(atual.filho){
            if(atual.nome===Nome){
                return atual;
            }
            atual=atual.filho;
        }
        return null;
    }
    size(){
        let count=0;
        let atual=this.cabeca;
        while(atual){
            count++;
            atual=atual.filho;
        }
        return count
    }
}