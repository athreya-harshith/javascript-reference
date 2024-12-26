function randInt(max)
{
    return Math.floor(Math.random()*max);
}

/* EXPLANATION BELOW
function returnPromiseWithSetTimeout()
{
    return new Promise(function executor(resolve,reject)
    {
        //time consuming task non blocking code , runtime task
        // the promise obj is returned immediately but the state will be pending 
        setTimeout(
            function exec()
            {
                let num = randInt(10);
                if(num%2 == 0)
                {
                    // if num is even then we resolve the promise o
                    // resolve(num);
                    console.log('resolving the promise');
                    return num;
                }
                else
                {
                    // else we reject promise
                    // reject(num);
                    console.log('rejecting the promise');
                    return num;
                }
            }
            , 5000// here state will be pending till 5 seconds
        );     
    });
}
 the state is changed iff we call resolve() and reject() 
 if not called the state always remains in pending
 even if something is returned , nothing is affected to the value property
*/

function returnPromiseWithSetTimeout()
{
    return new Promise(function executor(resolve,reject)
    {
        //time consuming task non blocking code , runtime task
        // the promise obj is returned immediately but the state will be pending 
        setTimeout(
            function exec()
            {
                let num = randInt(10);
                if(num%2 == 0)
                {
                    // if num is even then we resolve the promise o
                    resolve(num);//only the first call is considered to set the value property 
                    console.log('resolving the promise');
                    resolve(100);// this wont have any affect on vlaue as its already set by the previous call : resolve(num)
                    console.log('resolved again');
                    return num;
                }
                else
                {
                    // else we reject promise
                    reject(num);//only the first call is considered to set the value property 
                    console.log('rejecting the promise');
                    reject(101);// this wont have any affect on vlaue as its already set by the previous call : reject(num)
                    console.log('rejected again');
                    return num;
                }
            }
            , 5000// here state will be pending till 5 seconds
        );     
    });
}