if(false)
{
    var x = 10;
}
console.log(x);// output is undefined


function fun()
{
    console.log(y);// no error output is undefined
    var y = 'hello';
}

fun();

function gun()
{
    // console.log(z);
    // causes error
    //Cannot access 'z' before initialization
    let z = 10;
}
//gun();