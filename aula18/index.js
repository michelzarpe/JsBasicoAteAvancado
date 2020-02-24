

// objeto literal
//this para pegar os atributos dentro do objeto
objeto = {
    nome:String,
    sobrenome:String,
    fala(){
        console.log(this.nome);
    }
}

// funcao que cria objetos 
const objeto = function(nome,sobrenome){
    return {
        nome,
        sobrenome,
        fala(){
            console.log(this.nome);
        }
    };
}