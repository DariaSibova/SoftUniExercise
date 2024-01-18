function solve(text){
    return text.split(/[^a-zA-Z0-9]+/)
    .join(" ")
    .trim()
    .split(" ")
    .map(x => x.toUpperCase())
    .join(", ")

}
console.log(solve("Hi, how are you?"))

solve("Hi, how are you?")