// TASK:(Dont Use promises only use callbacks)
// 1. Write a function to download the data from the url
// 2. Write a function to save that downloaded data in a file and return the file name
// 3. Write a function to upload the file written in previous step to a new url

// function download(url,mkfile)
// {
//     let fname;
//     console.log('starting downloading from : ',url);
//     setTimeout(function exec()
//     {
//         console.log('starting downloading in 5s');
//         let content = 'this is the thing downloaded from the url'
//         fname=mkfile(content);
//     },
//     3000);
//     return fname;
// }
// var mkfile = function mkfile(content)
// {
//     console.log('the content is downloaded and its being written to a file');
//     console.log('the content  being written is : ',content);
//     let fname = 'downloaded_content';
//     console.log('the file name is : fname');
//     return fname;
// }
// function upload(url, fname)
// {
//     // console.log('the file fname is being uploaded to ',url);
//     setTimeout(function exec()
//     {
//         console.log('the file fname is being uploaded to ',url);
//         console.log('will be uploaded in 3s');
//         console.log('uploaded complete');
//         let uploaded = fname;
//     },
//     5000);
// }
// let fname = download('www.qwerty.com',mkfile);
// upload('www.asdf.com',fname);

function download(url, cb)
{
    console.log('started downloading from ',url);
    setTimeout(function exec()
    {
        console.log('download complete ');
        const content='ABCDEF';
        cb(content);
    },
    5000);
}

function writeFile(data , cb)
{
    console.log('started writing to the file');
    setTimeout(function exec()
    {
        console.log('uploading completed');
        const fname = 'fname.txt';
        cb(fname);
    },
    4000);
}

function upload(url,fname,cb)
{
    console.log('started to upload the file to ',url);
    setTimeout(function exec()
    {
        console.log('uploaded the file');
        const response = 'SUCCESS';
        cb(response);
    },
    2000);
}

download('www.download.com',function processDownload(content)
{
    console.log('the downloaded content is : ',content);
    writeFile(content,function processWriteFile(fname)
    {
        console.log('the contents uploaded to file and file name is :',fname);
        upload('www.upload.com',fname,function processUpload(response)
        {
            console.log('the uplooading completed with response :',response);
        });
    });
});//this is callback hell !!!!!!!!!!