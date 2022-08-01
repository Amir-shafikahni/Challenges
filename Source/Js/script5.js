function count (string) {
    let myMap = new Map()

    for(let char of string){
        if(myMap.has(char)){
            let charCount = myMap.get(char)

            myMap.set(char , charCount + 1)
        }else{
            myMap.set(char , 1)
        }
    }

    let myObj = Object.fromEntries(myMap)

    console.log(myObj);
}

count('aabca')