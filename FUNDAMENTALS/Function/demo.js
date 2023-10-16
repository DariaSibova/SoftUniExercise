function solve (x){
    console.log(x);

    if(x > 0){
        solve(x - 1);
    }
}

solve(10)