function oddAndEvenSum(num) {
  let numAsStr = num.toString();

  // let [evenSum, oddSum] = calcEvenOddSum(numAsStr);
  // console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
  let evenOddSums = calcEvenOddSum(numAsStr)
    console.log(`Odd sum = ${evenOddSums[1]}, Even sum = ${evenOddSums[0]}`);

  function calcEvenOddSum(str) {
    let evenSum = 0;
    let oddSum = 0;

    for (let char of str) {
      let digit = Number(char);

      if (digit % 2 == 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
    }
    return [evenSum,oddSum]
  }

}

//------------------------------------------
// function oddAndEvenSum(num){
//     let evenSum = 0;
//     let oddSum = 0;

//     let numAsStr = num.toString();

//     for (let char of numAsStr){
//         let digit = Number(char);

//         if(digit % 2 == 0){
//             evenSum += digit;
//         } else {
//             oddSum += digit;
//         }
//     }
//     console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
// }

oddAndEvenSum(1000435);
// oddAndEvenSum(3495892137259234)
