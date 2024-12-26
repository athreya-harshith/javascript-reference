function timeConsumingByLoop()
{
    console.log('loop starts');
    for(let i=0;i<10000000000;i++)
    {
        //some task
    }
    console.log('loop ends');
}

function timeConsumingByRuntimeFeature()
{
    console.log('starting timer');
    setTimeout(function exec()
    {
        console.log('completed the timer');
    },300);
}

console.log('hi');
timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();
console.log('bye');  