function process()
{
    let i =0;
    function innerProcess()
    {
        i+=1;
        return i;
    }
    return innerProcess;
}
let x = process();
console.log(x());
console.log(x());
console.log(x());