function download(url) {
  return new Promise(function executor(resolve, reject) {
    console.log("starting downloading contents from ", url);
    setTimeout(function down() {
      console.log("completed downloading");
      resolve("ABCDEF");
    }, 3000);
    console.log("getting out of the download");

    // resolve('ABCDEF');
  });
}
function writeFile(data) {
  return new Promise(function executor(resolve, reject) {
    console.log("started writing data to the file");
    setTimeout(function w() {
      console.log("writing completed");
      console.log("the written data is ", data, "file name is file.txt");
      resolve("file.txt");
    }, 4000);
  });
}
function uploadFile(url, file) {
  return new Promise(function executor(resolve, reject) {
    console.log("started uploading the contents the url : ", url);
    setTimeout(function u() {
      console.log("upload completed");
      resolve("success");
    }, 2000);
  });
}

async function steps() {
  console.log("starting");
  const test = await 10;
  console.log("this is testing ", test);
  const downloadedData = await download("abc.com");
  console.log("the downloaded data is ", downloadedData);
  const fileWritten = await writeFile(downloadedData);
  console.log("the file written is ", fileWritten);
  const uploadResponse = await uploadFile("xyz.com", fileWritten);
  return uploadResponse;
}
let x = steps();
console.log("outside");
console.log(x);
x.then(function handler(value) {
  console.log("the function completed with ", value);
});
