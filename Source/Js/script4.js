function scramble (str1 , str2){
    // to creat an array using the strings
    let splitedStr1 = str1.split("")
    let splitedStr2 = str2.split("")

    // a flag to check if it follows the pattern or not
    let doesItFollowThePattern = true

    splitedStr2.forEach(charOfStr2 => {        

        // a flag to check if there is (charOfStr2) in splitedStr1 or not
        let = isCharExists = false

        // to check if there is (charOfStr2) in splitedStr1 or not
        for(let i = 0 ; i < splitedStr1.length ; i++){
            if(charOfStr2 === splitedStr1[i]){;
                splitedStr1.splice(i , 1)

                isCharExists = true
                return
            }
        }

        if(!isCharExists){
            doesItFollowThePattern = false
            return
        }
    })

    // to check if it follows the pattern or not
    if(doesItFollowThePattern){
        return true
    }else{
        return false
    }
}



console.log(scramble("scriptjava" , "javascript"))
console.log(scramble("scriptingjava" , "javascript"))
console.log(scramble("scriptsjava" , "javascripts"))
console.log(scramble("jsscript" , "javascripts"))