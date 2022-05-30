const AWS=require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // TODO implement
    const {shortUrl,longUrl}=event;
    return dynamodb.put({
        TableName:"URL-Shortner",
        Item:{
            shorturl:shortUrl,
            longurl:longUrl
        }
    })
    .promise()
    .then(data=>{
       console.log("Response post create",data);
       return "Successfully create short url";
    })
   .catch(err=>{
        console.log("error: ",err);
        return err;
    });
};
