function printCertificate(grade, names) {
  if (pass(grade)) {
    printHeader();
    printName(names);
    formatGrade(grade);
  } else {
    console.log("Student does not qualify");
  }
}

function printHeader() {
  console.log("~~~- {@} -~~~");
  console.log("~- Certificate -~");
  console.log(" ~~~- ~---~ -~~~");
}
function printName(nameArr) {
  console.log(nameArr[0] + " " + nameArr[1]);
}
function pass(grade) {
  return grade >= 3;
}
function formatGrade(grade) {
  let label;

  if (grade < 3) {
    label = "Fail";
    grade = 2;
  } else {
    if (grade < 3.5) {
      label = "Poor";
    } else if (grade < 4.5) {
      label = "Good";
    } else if (grade < 5.5) {
      label = "Very good";
    } else {
      label = "Excellent";
    }
    grade = grade.toFixed(2);
  }
  console.log(`${label} (${grade})`);
}
printCertificate(5.25, ["John", "Smith"]);
printCertificate(2, ["Peter", "Johnson"]);
