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

let p = download('www.download.com');
p.then(
    function downloadHandler(value)
    {
        console.log('downloading the data is done ');
        return writeFile(value);
    },
).then(
    function writeFileHandler(value)
    {
        console.log('writing is done ',value);
        return uploadFile('www.upload.com',value);
    }
).then(
    function uploadFileHandler(value)
    {
        console.log('uploaded to the url with response ',value);
    }
)
.catch(function catchError(err)
{
    console.log('have caught the ',err);
})
.
finally(function final(value)
{
    console.log('finally executing ',value);
});
/*
 Here rather than having the multiple rejection handlers, we have one .catch() and we can cath and fix the error here

 finally() is used as similarly used in java

*/
