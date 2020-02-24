
const numeroDigitado = prompt('Digite um numero');
const numero_titulo = document.getElementById('numero_titulo').innerHTML = numeroDigitado;
const texto = document.getElementById('texto');
texto.innerHTML=`<p> numero ao quadrado: ${Math.pow(Number(numeroDigitado),2)}</p>`;