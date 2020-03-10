//atribbuicao por desestruturacao

const pessoa = {
 nome: 'Michel',
 sobrenome: 'Zarpelon',
 idade:'29',
 endereco:{rua:'hermelindo', numero:107}
};
//atribuicao via desestruturacao
console.log(pessoa.nome)
const {nome} = pessoa;
const {nome:teste} = pessoa;
console.log(nome)
console.log(teste)
const {endereco:{rua}} = pessoa;
const {nome, ...resto} = pessoa;