// não posso declarar uma constante sem inicializar ela. 
// também não posso colocar outro valor para ela.
const nome = 'Michel Elimar Zarpelon';
const idade = 30;
const peso = 84;
const altura = 1.80;
const now = new Date();

console.log(`${nome} tem a idade ${idade} nascido no ano de ${now.getFullYear()-idade}, tem seu mmc: ${peso/(altura^2)}`);