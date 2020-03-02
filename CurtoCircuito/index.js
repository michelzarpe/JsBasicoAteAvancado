// valores falsos: false, 0, "", '', ``, null, undefined, NaN

// retorna o valor de onde para os verdadeiros
//console.log('Luiz Gustavo' && 0 && 'Maria')//0
//console.log('Luiz Gustavo' && true && 'Maria')// maria
//console.log(false && 'LALALA' && 'Maria')



let oi = () =>{
    return 'OI';
};

// and 
console.log(true && oi());
console.log(false && oi());

// or
console.log(true || oi());
console.log(false || oi());