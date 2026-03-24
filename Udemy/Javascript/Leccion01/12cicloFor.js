for(let contador = 0; contador < 3 ; contador++)
    console.log("Fin de ciclo for");

/*utilizando el break */
for( let contador1 = 0; contador1 <= 10; contador1++){
    if(contador1 % 2 == 0){
        console.log(contador1);
        break;
    }
}
console.log("Fin del ciclo for con break");

/* uso de la plabra continue */

for( let contador1 = 0; contador1 <= 10; contador1++){
    if(contador1 % 2 !== 0){
        console.log(contador1);// es ir a la siguiente iteracion
        continue;
    }
    else{
        console.log(contador1)
    }
}