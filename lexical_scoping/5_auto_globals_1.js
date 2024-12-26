var teacher = "harshith";
function fun() {
  var teacher = "pulkit";
  content = "js";
  console.log(teacher);
}
function gun() {
  var student = "sarthak";
  console.log(student);
}
console.log(content); //ReferenceError: content is not defined
// see the next program (6_auto_globals_2.js)
fun();
gun();
console.log(teacher);
