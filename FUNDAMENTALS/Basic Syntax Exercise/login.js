// You will be given a string representing a username. The correct password will be that username reversed.
// Until you receive the correct password print on the console: "Incorrect password. 
//Try again.". When you receive the correct password print: "User {username} logged in."

// However, on the fourth try if the password is still not correct print: 
//"User {username} blocked!" and end the program.

// The input comes as an array of strings -
// the first string represents username and each subsequent string is a password.

function solve(input){

}

solve(['Acer','login','go','let me in','recA']) //Incorrect password. 
//Try again. Incorrect password.
// Try again. Incorrect password. Try again. User Acer logged in.

// solve(['momo','omom'])
//User momo logged in.

// solve(['sunny','rainy','cloudy','sunny','not sunny'])
//Incorrect password.
// Try again. Incorrect password. Try again. Incorrect password.
// Try again. User sunny blocked!