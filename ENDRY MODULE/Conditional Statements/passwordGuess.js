function passwordGuess(input) {

  let correctPassword = ["s3cr3t!P@ssw0rd"];

  if (correctPassword[0] === input[0]) {
    console.log("Welcome")

  } else {

    console.log(" Wrong password!")

  }


}

passwordGuess(["s3cr3t!P@ssw0rd"])