//Two Sum 
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) { 
        for (let j = i + 1; j < arr.length; j++) { 
            if (arr[i] + arr[j] === target) { 
                return [i, j]; 
             }
        }
    }
    return []; 
}



//CurlCommands
//Getrequest(fetch data)
curl -X GET "https://api.example.com/users"


//PostRequest(send data)
curl -X POST "https://api.example.com/users" \
     -H "Content-Type: application/json" \
     -d '{"name": "Alice"}'


//PutRequset(SEnd Data)
curl -X PUT "https://api.example.com/users/3" \
     -H "Content-Type: application/json" \
     -d '{"name": "Alice Smith"}'

//Patch Request
 curl -X PATCH https://reqbin.com/echo/patch/json
     -H 'Content-Type: application/json'
     -H 'Accept: application/json'
     -d '{"Id": 78912, "Customer": "Jason Sweet", "Quantity": 1}'


//Delete Request
curl -X DELETE "https://api.example.com/users/3"




//Get Post Put Delete
//Request Response Structure

//Get Request
POST /users HTTP/1.1  
Host: api.example.com  
Content-Type: application/json  

{
  "name": "Alice"
}
//Get Response
{
    "message": "User created",
    "id": 3
  }

  

//Post Request
POST /users HTTP/1.1  
Host: api.example.com  
Content-Type: application/json  

{
  "name": "Alice"
}
//Post response
{
    "message": "User created",
    "id": 3
  }

  



//Put   Request
PUT /users/3 HTTP/1.1  
Host: api.example.com  
Content-Type: application/json  

{
  "name": "Alice Smith"
}
//Put Response
{
    "message": "User updated"
  }


  
//Delete Requset
DELETE /users/3 HTTP/1.1  
Host: api.example.com  
//Delete Response
{
    "message": "User deleted"
  }
  






//nodejs express Framework and libraries
  const express = require('express');
  const app = express();
  
  app.get('/', (req, res) => res.send('Hello, Express!'));
  
  app.listen(3002, () => console.log('Server running on port 3002'));
  

//python flask Framework and libraries
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

if __name__ == '__main__': //start server if file is run directly
    app.run(debug=True)


//go framework and libraries
package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.String(200, "Hello, Gin!")
	})
	r.Run(":8080")
}
