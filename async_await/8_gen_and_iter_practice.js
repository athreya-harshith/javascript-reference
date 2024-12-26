// dont see this look the one below it
function downloadData(url)
{
    return new Promise(function executor(resolve, reject)
    {
        console.log("downloading the data from the ",url);
        setTimeout(function()
        {
            console.log("Completed the downloading");
            resolve("ABCDEF");
        },3000);
    });
}

function writeFile(data)
{
    return new Promise(function executor(resolve, reject)
    {
        console.log("Started writing the data to the file");
        setTimeout(function()
        {
            console.log("Written the data ", data, "to the file file.txt");
            resolve('file.txt');
        },2000);
    });
}

function uploadFile(url)
{
    return new Promise(function executor(resolve, reject)
    {
        console.log("started uploading the file to ", url);
        setTimeout(function ()
        {
            console.log("Completed the uploading ");
            resolve('success');
        },2000);
    });
}

function * steps()
{
    let dowloadedData = yield downloadData('abcd.com');
    console.log("The downloaded data is ", dowloadedData);
    let fileWritten = yield writeFile(dowloadedData);
    console.log("the file written is ", fileWritten);
    let uploadResponse = yield uploadFile('xyz.com');
    return uploadResponse;
}

function doThisAfterReceiving(value)
{
    let future = iter.next(value);
    console.log(future);
    if(future.done)
        return ;
    future.value.then(doThisAfterReceiving);
}
var iter = steps();
let future = iter.next();
future.value.then(doThisAfterReceiving);