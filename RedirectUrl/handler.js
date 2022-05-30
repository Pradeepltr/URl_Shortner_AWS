const AWS=require('aws-sdk');
const dynamodb=new AWS.DynamoDB.DocumentClient();
exports.handler = async (event,context) => {
   const{shorturl}=event
   
    
    
  return dynamodb
.get({
        TableName:"URL-Shortner",
        Key:{
            shorturl:shorturl
        }
    })
    .promise()
    .then(data=>{
        console.log("Response of dataBase",data);
      return  context.succeed({location:data.Item.longurl})
    })
    .catch(err=>{
        console.log("error while get data from DB",err);
        return err;
     });


};
