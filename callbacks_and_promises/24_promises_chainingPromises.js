function download(url)
{
    console.log('started downloading from ',url);
    return new Promise(function executor(resolve,reject)
    {
        setTimeout(function p()
        {
            console.log('completed downloading after 5s');
            const content='ABCDEF';
            resolve(content);
        },5000);
    });
}

let x = download('www.xyz.com');
let y = x.then(function fulfillHandler(value)
{
    console.log('the downloaded data is ',value);
    return 'new promise string ';// this return value is passed as value to the chained promise 
    // if not then , undefined is passed by default
}).then(function fulfillHandler(value)
{
    console.log('value from chained promise : ',value);
});