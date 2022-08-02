function scramble (str1 , str2){
    // to creat an array using the strings
    let string1 = str1.split("")
    let string2 = str2.split("")

    // a flag to check if it follows the pattern or not
    let doesItFollowThePattern = true

    string2.forEach(char => {        

        // a flag to check if there is (char) in string1 or not
        let = isCharExists = false

        // to check if there is (char) in string1 or not
        for(let i = 0 ; i < string1.length ; i++){
            if(char === string1[i]){;
                string1.splice(i , 1)

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