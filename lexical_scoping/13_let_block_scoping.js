var teacher = "harshith";
function fun() {
  console.log(teacher); //prints undefined because of decalaration of teacher in line 7
  // console.log(content); causes Reference Error
  var teacher = "pulkit"; // if same named var declarations are present, in the local scope before the declaration value will be undefined as in line 4
  let content = "js"; // all lines above this line is called TDZ called Temporal Dead Zone
  //we can use content from here (post declaration zone )
  if (content == "js") {
    let hours = "120+";
    console.log(content, hours);
  }
  console.log(teacher, content);
}
fun();
// console.log(teacher,content); throws error because content belongs to block scope of fun();
