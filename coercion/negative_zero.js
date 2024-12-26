let x = -0;
console.log(Math.sign(x));
console.log(Math.sign(-2));
console.log(Math.sign(2));
console.log(Object.is(x,0));
console.log(Object.is(x,-0));

// function to check whether a number is negative or not
function test(x)
{
    if(x>0)
    {
        return 1;
    }
    else if( x ==0)
    {
        if(Object.is(x,-0))
            return -1;
        else
            return 1;
    }
    return -1;
}
let y = 0;
console.log(test(y));