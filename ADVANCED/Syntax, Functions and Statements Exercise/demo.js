function solve(){
    let myDate = new Date(2024,0,1);
    myDate.setDate(myDate.getDate()-1)
    console.log(myDate);
}
solve();