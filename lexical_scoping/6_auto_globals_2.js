var teacher = "harshith";
function fun() {
  var teacher = "pulkit";
  content = "js"; //  informal declaration doesnt gets any change in parsing phase
  // during execution it is considered as autoglobal as its value is being assigned
  console.log(teacher);
}
function gun() {
  var student = "sarthak";
  console.log(student);
}

fun();
gun();
console.log(teacher);
console.log(content); //js
// doesnt show any error as its considered as auto globals
