function count (string) {
    let result = {}

    for(let char of string){
        result[char] = (result[char] || 0) + 1
    }

    console.log(result);
}

count('aabca')