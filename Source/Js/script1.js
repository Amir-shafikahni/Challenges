function isDisible(n, x, y){
    if(n % x === 0 && n % y === 0){
        return true
    }else{
        return false
    }
}

console.log(isDisible(6 , 2 , 3)) // true
console.log(isDisible(5 , 2 , 3)) // false
