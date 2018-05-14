var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    if (err) {
      console.log("we've encountered an error");
    }
  }).on('response', function(response) {
    console.log("Response code:", response.statusCode,
      "Response message:", response.statusMessage,
      "Content type:", response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('finish', function() {
    console.log("download complete");
  });




// var request = require('request');
// var fs = require('fs');

// request.get('https://sytantris.github.io/http-examples/future.jpg')
//   .on('error', function(err) {
//     if (err) {
//       console.log("we've encountered an error");
//     }
//   }).on('response', function(response) {
//     console.log("Response code:", response.statusCode,
//       "Response message:", response.statusMessage,
//       "Content type:", response.headers['content-type']);
//   })
//   .pipe(fs.createWriteStream('./future.jpg'));