incio:
for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 !== 0){
        continue incio;// ir a la siguiente iteracion
    }
    console.log(contador)
}
// el label es el inicio que nos indica el continue vuelva a donde querenmso que inice