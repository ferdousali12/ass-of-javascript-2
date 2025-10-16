alert("welcome to grading system ");
let fullName = prompt("name:");
let marks = prompt("enter mark");
if (marks > 100) {
  alert("Enter again in range of 0 to 100");
} else if (marks <= 100 && marks >= 90) {
  alert("Congrats you got A+");
} else if (marks < 90 && marks >= 80) {
  alert("Congrats you got B+");
} else if (marks < 80 && marks >= 70) {
  alert("Congrats you got C+");
} else if (marks < 70 && marks >= 60) {
  alert("Congrats you got D+");
} else if (marks < 60 && marks >= 50) {
  alert("Congrats you got D-");
} else if (marks < 50) {
  alert("Try next time");
}
