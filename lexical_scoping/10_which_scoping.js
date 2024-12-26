var teacher = "harshith";

function doubt(question) {
  console.log(teacher, question); // because of lexical scoping in js , the op is harshith why?
}
function fun() {
  var teacher = "pulkit";
  doubt("why?");
}
fun();
