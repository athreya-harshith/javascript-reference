function randInt(max)
{
    return Math.floor(Math.random()*max);
}

function createPromiseWithSetTimeout()
{
    return new Promise(function executor(resolve, reject)
    {
        console.log('Entering the executor callback in promise constructor');
        setTimeout(function fun()
        {
            let num = randInt(10);
            if(num%2 == 0)
            {
                resolve(num);
            }
            else
            {
                reject(num);
            }
        }
        ,
        10000);
        console.log('Exiting the executor callback in promise constructor');
    });
}

console.log('starting ... ');
const p= createPromiseWithSetTimeout();
console.log('waiting for promise to complete');
console.log('promise look like ... ',p);
console.log('Going to register 1 set of handlers');
p.then(
    function fulfillmentHandler1(value)
    {
        console.log('inside ful fillment handler 1 value : ',value);
    } 
    ,
    function rejectionHandler1(value)
    {
        console.log('inside rejection handler 1 value : ',value);
    }
);
console.log('Going to register 2 set of handlers');
p.then(
    function fulfillmentHandler2(value)
    {
        console.log('inside ful fillment handler 2 value : ',value);
    } 
    ,
    function rejectionHandler2(value)
    {
        console.log('inside rejection handler  2 value : ',value);
    }
);
 
console.log('ends here');