function download(url) {
  return new Promise(function executor(resolve, reject) {
    console.log("starting downloading contents from ", url);
    setTimeout(function down() {
      console.log("completed downloading");
      // resolve('ABCDEF');
      reject("ABCDEF"); // here rejecting instead of resolving
    }, 3000);
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

let p = download("www.download.com");
p.then(
  function downloadHandler(value) {
    console.log("downloading the data is done ");
    return writeFile(value);
  },
  function downloadReject(value) {
    console.log("DownLoad Rejected ", value);
    throw value;
    //try without throw : without throw it reloves the promise with value undefined hence its difficult to handlw the rejections in between
  }
)
  .then(
    function writeFileHandler(value) {
      console.log("writing is done ", value);
      return uploadFile("www.upload.com", value);
    },
    function writeReject(value) {
      console.log("Write  Rejected ", value);
      throw value;
    }
  )
  .then(
    function uploadFileHandler(value) {
      console.log("uploaded to the url with response ", value);
    },
    function uploadReject(value) {
      console.log("Upload Rejected ", value);
    }
  );
/*
If there is any promise rejection due to some errors we have to manually write the rejection handlers for every .then() 
chaining . 

To stop making the succesive .then() promises to execute fulfillmentHandler we have to manually throw value in 
every rejection handler

To handle this there is better way in the next program
*/
