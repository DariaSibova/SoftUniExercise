function depositCalculator(input) {

  let depositSum = Number (input[0]);
  let depositTerm = Number (input[1]);
  let annualInterestRate = Number (input[2] / 100);

  let accruedInterest = depositSum * annualInterestRate;
  let interestPerMounth = accruedInterest / 12;
  let totalSum = depositSum + depositTerm * interestPerMounth;

  console.log(totalSum);
}

depositCalculator (["200 ","3 ","5.7 "])