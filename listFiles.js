require('dotenv').config();
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-northeast-2',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.AWS_SECRET_ACCESS_KEY,
}); 

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: process.env.AWS_S3_BUCKET_NAME }
});

const listFiles = path => {
  s3.listObjects({Delimiter: path}, function(err, data) {
    if (err) {
      return alert('There was an error listing your albums: ' + err.message);
    } else {
      console.log('data:', data)
    }
  });
  
}

listFiles('/sacred-things');