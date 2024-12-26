function fetchData(url)
{
    return new Promise(function executor(resolve,reject)
    {
        console.log('Started Downloading from ',url);
        setTimeout(function processDownloading()
        {
            let data = 'dummy data';
            console.log('Download Completed');
            resolve(data);
            console.log('Download Completed');// this line was added as a part of explanation 
        },
        7000);
    });
}

console.log('started');
let p = fetchData('https://abcd.com');
p.then(function A(value)
{
    console.log('value is ',value);
});
console.log('end');