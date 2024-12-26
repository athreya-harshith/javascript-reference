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
p.then(
    function fulfillmentHandler(value)
    {
        console.log('inside ful fillment handler value : ',value);
    } 
    ,
    function rejectionHandler(value)
    {
        console.log('inside rejection handler value : ',value);
    }
);

console.log('ends here');