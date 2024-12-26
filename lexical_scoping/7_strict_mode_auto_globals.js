"use strict";
var teacher = "harshith";
function fun() {
  var teacher = "pulkit";
  content = "js"; //ReferenceError: content is not defined
  // because we are using strict mode
  console.log(teacher);
}
function gun() {
  var student = "sarthak";
  console.log(student);
}

fun();
gun();
console.log(teacher);
