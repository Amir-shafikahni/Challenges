let differentCharsArray = []

function arrayDiff(a, b) {
  // use spread syntax due to refrens type
  let firstArray = [...a]
  let SecondArray = [...b]

  // set the whole second arrays characters in to (differentCharsArray) if the first array was empty
  if(!firstArray.length){
    SecondArray.forEach(prop => pushDifferentChar(prop))

  // set the whole first arrays characters in to (differentCharsArray) if the second array was empty
  }else if(!SecondArray.length){
    firstArray.forEach(prop => pushDifferentChar(prop))

  // to find different characters from first and second array
  }else{
    firstArray.forEach(prop => {
      pickDifferentProperties(SecondArray , prop)
    })
  
    SecondArray.forEach(prop => {
      pickDifferentProperties(firstArray , prop)
    })
  
    // to check if the char is similar or not
    function pickDifferentProperties(Array , char){
      let similarChar = Array.find(prop => {
        return prop === char
      })

      // to push the different char in to (differentCharsArray)
      if(!similarChar){
        pushDifferentChar(char)
      }
    }
  }

  // to push the different char in to (differentCharsArray)
  function pushDifferentChar(char){
    differentCharsArray.push(char)
  }

  console.log(differentCharsArray);
}

// arrayDiff(["1", "8", "2"], []);
arrayDiff(["1", "2", "3"], ["1", "2"]);