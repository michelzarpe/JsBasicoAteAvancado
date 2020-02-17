
const nome ='Michel';
const numero = 10;
const numeroDouble = 10.10;
let nomeAluno; //undefined; não aponta para lugar nenhum
let sobreNomeAluno=null;// não aponta para lugar nenhum na memoria;
const boolean = true;
console.log(typeof boolean, boolean)

// tipo de dado referencia
const a = [1,2]
const b = a;
b.push(3);
console.log(a,b);


// tipo de dado primitivo 
let a1 = 2
let b2 = a1;
b1 = 4;
console.log(a1,b1);


const numero1='10';
const numero2=20;
console.log(numero2/numero1);
// sempre segue a precedencia da matématica da escola
// ondem -> () ^ , * / %, + - 
// var++, ++var.......  +=, *= e assim por diante
//NaN - > not a number;
// parseInt(). para converter para inteiro 
// parseFloat() para um numero com casas decimais 
// Number() se vira pra converter para inteiro ou float


