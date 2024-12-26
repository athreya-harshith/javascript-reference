function isEven(num)
{
    if(num%2 == 0)
        return true;
    else 
        return false;
}
console.log(isEven(13));
for(let i = 0;i<21;i++)
{
    let res = isEven(i)
    if(res)
        console.log(i,"This is Even");
}