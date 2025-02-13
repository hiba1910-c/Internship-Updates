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



//Assesment:Simple REST API in Each Language
//Create a “users” or “tasks” CRUD endpoint.



const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Store users in memory (in real app, would use database)
let users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' }
];

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET single user
app.get('/users/:id', (req, res) => {//get route
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// POST new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).json({ message: 'User not found' });
    
    users.splice(userIndex, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});







//create a small server with at least two endpoints


const express = require('express');//create server
const morgan = require('morgan'); // for logginghttp requets
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(morgan('dev')); // logging middleware

// Store books in memory
let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: '1984', author: 'George Orwell', year: 1949 }
];

// Custom error handler middleware
const errorHandler = (err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error'
    });
};

// GET all books
app.get('/books', (req, res) => {
    try {
        console.log('Fetching all books...');//logs the action
        res.json(books);
    } catch (error) {
        next(error);//for exception
    }
});

// POST new book
app.post('/books', (req, res, next) => {
    try {
        // Validate request body
        const { title, author, year } = req.body;
        
        if (!title || !author || !year) {
            throw { status: 400, message: 'Missing required fields' };
        }
//creates a new book object with an incrementedarray
        const newBook = {
            id: books.length + 1,
            title,
            author,
            year
        };

        books.push(newBook);
        console.log(`New book added: ${title}`);
        res.status(201).json(newBook);
    } catch (error) {
        next(error);
    }
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


