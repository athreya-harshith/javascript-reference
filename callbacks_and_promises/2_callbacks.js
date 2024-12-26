// fun(x,fn) is a HOF that takes fn(which is a function ) as argument
// x is integer 
//exec() which is passed to HOF and accesible via fn is a callback function  

function fun(x,fn)
{
    for(let i=0;i<x;i++)
        console.log(i);

    fn();
}

fun(10,function exec()
{
    console.log('i am a call back function and i am consumed by HOF');
});