require('dotenv').config();
const fs = require('fs');
const AWS = require('aws-sdk');

const putFile = (file, key) => {
  AWS.config.update({
    region: 'ap-northeast-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.AWS_SECRET_ACCESS_KEY,
  }); 
  
  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
      Body: fs.createReadStream(file),
      ACL: 'public-read'
    }
  });
  
  const promise = upload.promise();
  
  promise.then(
    function(data) {
      console.log('Successfully uploaded file.');
    },
    function(err) {
      return console.log('There was an error uploading your photo: ', err.message);
    }
  );
}

putFile('./sample.png', 'sample.png');