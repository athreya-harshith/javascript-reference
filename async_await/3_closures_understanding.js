function process()
{
    let i=0;
    function innerProcess1()
    {
        i+=1;
        return i;
    }
    function innerProcess2()
    {
        i+=1;
        return i;
    }

    return {innerProcess1,innerProcess2};
}
let res= process();