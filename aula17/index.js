//funao execuca a ação.
function saudacao(){
    console.log("Olá")
}
//chamando funcao
saudacao();

//funcao anonima
const pow = function(x,y){
    return Math.pow(x,y)
}
console.log(pow(4,2));

//arrow function
const sum = (num1=1, num2=1) => {
    return num1 + num2;
  }