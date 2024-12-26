function fun()
{
    for(let i=0;i<10;i++)
    {
        var x = i;
    }
    console.log(x);// there is no impact of block scoping on var declarations 
    // even though it is block scope of for loop it takes the scope of funtion fun() in parsing phase
}
fun();

let i=0;
while(i<5)
{
    var y = i;
    i++
}
console.log(y);// here y takes the globla scope