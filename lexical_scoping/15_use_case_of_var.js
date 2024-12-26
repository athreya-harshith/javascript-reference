function fun(x)
{
    var i;
    if(x%2 == 0)
    {
         i=0;
    }
    else
    {
        i=1;
    }
    console.log(i);
}
fun(3);
// instead of using var like in fun(), we can implement the same as this 
function gun(x)
{
    if(x%2 == 0)
    {
         var i=0;
    }
    else
    {
        var i=1;
    }
    console.log(i);
}
gun(6);