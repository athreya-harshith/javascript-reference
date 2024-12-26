function process()
{
    let i=0;
    const j = [10,20,30];
    let k =0;
    function innerProcess()
    {
        i+=1;
        for(let k=0;k<3;k++)
            console.log(j[k]);
        return i;
    }
    return innerProcess;
}
let res = process();
