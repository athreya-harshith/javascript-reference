function download(url)
{
    return new Promise(function executor(resolve,reject)
    {
        console.log('starting downloading contents from ',url);
        setTimeout(function down()
        {
            console.log('completed downloading');
            resolve('ABCDEF');
        }
        ,3000);
    });
}
function writeFile(data)
{
    return new Promise(function executor(resolve,reject)
    {
        console.log('started writing data to the file');
        setTimeout(function w()
        {
            console.log('writing completed');
            console.log('the written data is ', data,'file name is file.txt');
            resolve('file.txt');
        }
        ,
        4000);
    });
}
function uploadFile(url,file)
{
    return new Promise(function executor(resolve,reject)
    {
        console.log('started uploading the contents the url : ',url);
        setTimeout(function u()
        {
            console.log('upload completed');
            resolve('success');
        },
        2000);
    });
}
function doAfterReceiving(value)
{
    let future = iter.next(value);
    console.log(future);
    if(future.done)
        return;
    future.value.then(doAfterReceiving);
}

function* steps()
{
    const downloadedData = yield download('www.xyz.com');
    console.log('downloaded data is ',downloadedData);
    const fileWritten = yield writeFile(downloadedData);
    console.log('file written is ',fileWritten);
    const uploadResponse = yield uploadFile('www.upload.com',fileWritten);
    console.log('upload response is ',uploadResponse);
    return uploadResponse;
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterReceiving); 