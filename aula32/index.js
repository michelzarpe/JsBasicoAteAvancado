//atribuicao via dessestruturacao
let numero = [1,2,3,4,6,7,8,9];
let a, b, c, d;
[a,b,c,d] = numero;
console.log(a,b,c,d)

//...rest operator
const [pn,sn,tr,,quinto,...resto] = numero;
console.log(pn,sn,tr,quinto)
console.log(resto)

const list = [[1,2,3],[9,5,1],[6,54,2]]
console.log(list[1][0])