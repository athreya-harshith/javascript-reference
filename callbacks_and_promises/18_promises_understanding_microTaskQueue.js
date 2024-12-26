function createPromise()
{
    return new Promise(function executor(resolve, reject)
    {
        console.log('resolving promise');
        resolve('done');
    });
}

setTimeout(function process()
{
    console.log('timer completed');
},0);

let p = createPromise();
p.then(function fulfillmentHandler0(value)
{
    console.log('we fullfilled with value fh0 :',value);
},
function rejectionHandler0(value){}
);
p.then(function fulfillmentHandler1(value)
{
    console.log('we fullfilled with value fh1 :',value);
},
function rejectionHandler1(value){}
);
p.then(function fulfillmentHandler2(value)
{
    console.log('we fullfilled with value fh2 :',value);
},
function rejectionHandler2(value){}
);
console.log('ending ... ')
// in this example the event loop has to make choice between callback queue and microtask queue
// the microtask queue is always preffered