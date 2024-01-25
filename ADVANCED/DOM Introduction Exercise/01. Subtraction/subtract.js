function subtract() {
    const firstNumRef = document.getElementById("firstNumber")
    const secondNumRef = document.getElementById("secondNumber")
    const resultRef = document.getElementById("result");

    let firstNumber = Number(firstNumRef.value);
    let  secondNumber = Number(secondNumRef.value);

    let result = firstNumber - secondNumber;
    resultRef.textContent = result;

}