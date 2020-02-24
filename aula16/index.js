//                0,1,2,3
const array = ['michel',234,true,null]; // pode colocar qualquer coisa
console.log(array)
array[array.length] = 'Mais um'; // criar mais posicao no array
console.log(array)
// ou usar o array.push() para adicionar no final;
// ou adicionar no comeco com array.unshifit('LALA')
// remove do final excluido = array.pop();
// removendo do inicio excluido = array.shift();
// delete array[1]; // deleta um elemento do array
// retornando o  array de um inicio e fim console.log(array.slice(1,3))
// console.log(typeof array); -> retorna objeto
// console.log(array instanceof Array); -> verdadeiro