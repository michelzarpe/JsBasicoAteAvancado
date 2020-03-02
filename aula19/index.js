/*
 Tipos de dados primitivos (imutaveis) - string, number, boolean, undefined, null, bigint, symbol

 // funciona
    let nome = 'Luiz'
    nome = 'Michel'
    nome[0] ='R'; // não modifica assim

    let a = 'AB';
    let b = a; // faz copia não fazendo referencia   

    valores não primitivo: Refrencia (mutavel) - Arrays, objetos, function
    se mudar algum valor de a ou b, modifica os dois arrays;
    let a = [1,2,3];
    let b = a;
    let c = [...a]// isso faz uma cópia e se modificar c não altera 'a', podendo usar para objetos também;
    a.push(5);
    console.log(a,b)
*/