function download(url)
{
    return new Promise(function executor(resolve,reject)
    {
        console.log('starting downloading contents from ',url);
        setTimeout(function down()
        {
            console.log('completed downloading');
            // resolve('ABCDEF');
            reject('ABCDEF');
            // as soon as this resolve is executed , steps ( async function ) sits in microtask queue
        }
        ,3000);
    });
}


async function steps()
{
    try
    {
        console.log('started');
        const downloadedData = await download('www.xyz.com');
        return downloadedData;
    }
    catch(error)
    {
        console.log('caught ',error);
    }
    
}

// console.log(steps());
steps()