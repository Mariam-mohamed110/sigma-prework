function calculateAge(dob) {
  var editDate = dob.split("/");
  var toYear = new Date(editDate[2], editDate[1], editDate[0]);
  var todaysDate = new Date().getTime();
  var difference = todaysDate - toYear;
  var theirAge = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  return theirAge;
}

var question = prompt("Enter your age in the dd/mm/yyyy format");
var age = calculateAge(question);
console.log(`You are ${age} years old`);
