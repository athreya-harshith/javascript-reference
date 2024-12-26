//http://mazurov.github.io/eslevels-demo/
function fun()
{
    var x = 10;
    function gun()
    {
        var y = 20;
        console.log(x);
        console.log(y);
    }
    gun();
    console.log(x);
    console.log(y);//this line throws error
}
fun();
/*
10
20
10
/Users/athreya_harshith/backend/javascript/lexical_scoping/8_nested_scopes.js:12
    console.log(y);//this line throws error
                ^

ReferenceError: y is not defined
*/