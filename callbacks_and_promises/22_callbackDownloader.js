function download(url,cb)
{
    console.log('started downloading from ',url);
    setTimeout(function exec()
    {
        console.log('completed downloading after 5s');
        const content='ABCDEF';
        cb(content);
    },
    5000);//setTimeout : after some time , execute the given function 
}

download('www.xyz.com',function processDownload(data)
{
    console.log('the downloaded data is : ',data);
});