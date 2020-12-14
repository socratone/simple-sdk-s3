require('dotenv').config();
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: process.env.AWS_S3_BUCKET_NAME }
});

const deleteFile = key => {
  s3.deleteObject({ Key: key }, function(err, data) {
    if (err) {
      return console.log("There was an error deleting your photo: ", err.message);
    }
    console.log("Successfully deleted photo.");
  });
}

deleteFile('item/sample.png');