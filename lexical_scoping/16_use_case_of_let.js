function fun()
{
    for(var i=0;i<10;i++)
    {
        // something
    }
    console.log(i);// here we can access the iterator i which is not needed hence,
    // to avoid this we can use let instead of var i
}
fun();
// similarly
function process(x,y)
{
    if(x>y)
    {
        // var temp=x;
        // instead of var temp we can use 
        let temp
        x=y;
        y=temp;
    }
    // console.log(temp); if var temp is used temp would be accessible outside the block which 
    // is useless
    return y-x;
}
console.log(process(10,4));