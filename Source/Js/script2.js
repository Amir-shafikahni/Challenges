let differentCharsArray = []

function arrayDiff(a, b) {
  // use spread syntax due to refrens type
  let firstArray = [...a]
  let SecondArray = [...b]


  let difference = firstArray.filter((x) => !SecondArray.includes(x))
    .concat(SecondArray.filter((x) => !firstArray.includes(x)));

    console.log(difference);
}

arrayDiff(["1", "8", "2"], []);
arrayDiff(["1", "2", "3"], ["1", "2"]);