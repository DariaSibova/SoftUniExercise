function solve(arr){
    return  arr.filter((c,i) => i % 2).map(e => e * 2).reverse().jpin(' ');
    // console.log(filtered);
    // const doubled = filtered.map(e => e * 2);
    // console.log(doubled)
    // doubled.reverse();
    // console.log(doubled);
    // const result = doubled.join(' ');
    // console.log(result)
}

console.log(solve([10, 15, 20, 25]))
solve([3, 0, 10, 4, 7, 3])