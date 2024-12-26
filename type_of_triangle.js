let a=4,b=4,c=4;
if(a==b && b==c && c==a)
{
    console.log('equilateral');
}
else if( a==b || b==c || c==a)
{
    console.log('isoceles');
}
else
{
    console.log('scalene');
}