# URl_Shortner_AWS
Actually this is done in AWS console so only handler code to be uploaded.

1. First is POST method to create short url it takes two value one is long url and second is disire short url that format is Json.
  and create short url.
   
   End_Point -  https://535h5t11ue.execute-api.us-east-1.amazonaws.com/dev/urlShortener-create
     method - post
     input - 
         {
         "shortUrl":"leetcode",
          "longUrl":"https://leetcode.com/problems/maximum-subarray/"
          }
     
   
 2. Second lambda funtion to redirect long url through short url
  
   End_Point - https://bien8631x8.execute-api.us-east-1.amazonaws.com/dev/urlShortener-GetShorturl/{shortUrl}
