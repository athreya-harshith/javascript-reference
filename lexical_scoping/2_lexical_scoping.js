console.log(name);//undefined this gives undefined as output if name is declared as var in below part of the 
// program 
//console.log(eg);gives error as eg is not declared in the program
//ReferenceError: eg is not defined
//console.log(name1);//gives error but name1 is declared using let in program 
//ReferenceError: Cannot access 'name1' before initialization
var name = 'athreya';
let name1='harshith';
function pr()
{
    console.log(name);
}
console.log(name);
pr();