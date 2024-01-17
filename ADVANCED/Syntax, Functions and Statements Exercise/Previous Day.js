function solve(year,mounth,day){
    let myDate = new Date(year, mounth - 1,day);//GMT +3 00:00:00
    myDate.setDate(myDate.getDate() - 1);
    // console.log(myDate);
    // console.log(myDate.toISOString())// UTC 00:00:00 - 3:00:00 -> 21:00:00
    console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);
    // console.log(myDate.toDateString())
}

solve(2016, 9, 30)
solve(2015, 5, 10)