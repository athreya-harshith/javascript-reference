function randInt(max)
{
    return Math.floor(Math.random()*max);
}

// console.log(randInt(10));

function returnPromiseWithSetTimeout()
{
    return new Promise(function executor(resolve,reject)
    {
        //time consuming task has non blocking code , runtime task
        // the promise obj is returned immediately but the state will be pending 
        setTimeout(
            function exec()
            {
                let num = randInt(10);
                if(num%2 == 0)
                {
                    // if num is even then we resolve the promise o
                    resolve(num);
                }
                else
                {
                    // else we reject promise
                    reject(num);
                }
            }
            , 5000// here state will be pending till 5 seconds
        );     
    });
}
// var x = returnPromiseWithSetTimeout();
var x = returnPromiseWithForLoop();
console.log(x);

function returnPromiseWithForLoop()
{
    return new Promise(function executor(resolve,reject)
    {
        //time consuming task has blocking code ie , for loop
        for(let i =0;i<10000000000;i++)
        {}
        let num = randInt(10);
        if(num%2 == 0)
        {
            // if num is even then we resolve the promise o
            resolve(num);
        }
        else
        {
            // else we reject promise
            reject(num);
        }
           
    })
}