
function proba(input) {

    let project = input[0];

    let redove = Number(input[1]);
    let koloni = Number(input[2]);
    income = 0;
    if (project == "Premiere") {
        income = redove * koloni * 12.00
    } else if (project == "Normal") {
        income = redove * koloni * 7.50;
    } else {
        income = redove * koloni * 5.00
    }
    console.log(`${income.toFixed(2)} leva`)







}




cinema(["Premiere", "10", "12"])