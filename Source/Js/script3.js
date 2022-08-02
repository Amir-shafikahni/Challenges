function uniqueInOrder(entrie){

    // to set a split func if the entrie was a string
    let array = Array.isArray(entrie) ? entrie : entrie.split('');

    // to find ordered repetitions and remove them
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] == array[i+1]){
            array.splice(i , 1)
        }
    }

    console.log(array);
}


uniqueInOrder([1 , 1 , 2 , 2 , 3 , 3])
uniqueInOrder("ABBCcAD")