// const express = require("express");
// const app = express();
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.listen(3000, () => {
// //   console.log("This server port is 3000!!");
// });

// app.post("user", (req, res, next) => {
//     res.send("Successfully inside user route");
//   });

//  const userSignupSchema = Joi.object({
//     firstName: Joi.string().required(),
//     middleName: Joi.string(),
//     lastName: Joi.string().required(),
//     userName: Joi.string().alphanum().min(3).max(30).required(),
//     email: Joi.string().email().required(),
//     age: Joi.number().required().min(0).max(100),
//     DOB: Joi.date().greater(new Date("1940-01-01")).required(),
//     address: {
//       addressLine: Joi.string().max(50).required(),
//       state: Joi.string().max(15).required(),
//       country: Joi.string().max(20).required(),
//       zipCode: Joi.string().max(7).required(),
//     },
//     phoneNumber: Joi.string()
//       .length(10)
//       .pattern(/[6-9]{1}[0-9]{9}/)
//       .required(),
//     password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$")),
//     confirmPassword: Joi.ref("password"),
//   });
//   app.post("/user", (req, res, next) => {
//     const { error, value } = userSignupSchema.validate(req.body, {
//       abortEarly: false,
//     });
//     if (error) {
//         return res.send("Invalid Request: " + JSON.stringify(error));
//     } else {
//         return res.send("Successfuly inside user: " + JSON.stringify(value));
//     }
//   });






// // Required packages
// const express = require('express');        // Web framework for Node.js
// const bcrypt = require('bcrypt');          // For password hashing
// const jwt = require('jsonwebtoken');       // For creating authentication tokens
// const Joi = require('joi');                // For input validation

// // Initialize express app
// const app = express();
// // Middleware to parse JSON and form data
// app.use(express.json());                   // Parse JSON bodies
// app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// // Constants
// const SECRET_KEY = 'your_secret_key_here'; // Secret key for JWT signing
// const SALT_ROUNDS = 10;                    // Number of rounds for password hashing

// // Array to store users (in real app, this would be a database)
// const users = [];

// // Validation Schema using Joi
// const userSignupSchema = Joi.object({
//     // Each field defines its validation rules:
//     firstName: Joi.string().required(),    // Must be string and required
//     middleName: Joi.string(),             // Optional string
//     lastName: Joi.string().required(),
//     userName: Joi.string().alphanum()      // Alphanumeric only, 3-30 chars
//         .min(3)
//         .max(30)
//         .required(),
//     email: Joi.string().email().required(), // Must be valid email
//     age: Joi.number().required().min(0).max(100), // Number between 0-100
//     DOB: Joi.date()                        // Date after 1940-01-01
//         .greater(new Date("1940-01-01"))
//         .required(),
//     address: {                             // Nested object validation
//         addressLine: Joi.string().max(50).required(),
//         state: Joi.string().max(15).required(),
//         country: Joi.string().max(20).required(),
//         zipCode: Joi.string().max(7).required(),
//     },
//     phoneNumber: Joi.string()              // Phone number validation
//         .length(10)
//         .pattern(/[6-9]{1}[0-9]{9}/)      // Must start with 6-9 and have 9 digits
//         .required(),
//     password: Joi.string()                 // Password pattern
//         .pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$")),
//     confirmPassword: Joi.ref("password"),  // Must match password field
// });

// // Login validation schema
// const userLoginSchema = Joi.object({
//     email: Joi.string().email().required(),
//     password: Joi.string().required()
// });

// // JWT Authentication Middleware
// const authenticateToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];  // Get auth header
//     const token = authHeader && authHeader.split(' ')[1]; // Extract token

//     if (!token) {
//         return res.status(401).json({ error: 'Access token required' });
//     }

//     // Verify the token
//     jwt.verify(token, SECRET_KEY, (error, user) => {
//         if (error) {
//             return res.status(403).json({ error: 'Invalid or expired token' });
//         }
//         req.user = user;    // Add user data to request
//         next();             // Continue to next middleware/route
//     });
// };

// // Signup Route
// app.post('/signup', async (req, res) => {
//     // Validate request data against schema
//     const { error, value } = userSignupSchema.validate(req.body, {
//         abortEarly: false  // Show all errors, not just the first one
//     });

//     if (error) {
//         return res.status(400).json({
//             error: 'Validation error',
//             details: error.details.map(detail => detail.message)
//         });
//     }

//     // Check for existing user
//     if (users.some(user => user.email === value.email)) {
//         return res.status(400).json({ error: 'Email already registered' });
//     }

//     try {
//         // Hash the password
//         const hashedPassword = await bcrypt.hash(value.password, SALT_ROUNDS);

//         // Create new user object (remove confirmPassword)
//         const { confirmPassword, ...userWithoutConfirmPassword } = value;
//         const newUser = {
//             ...userWithoutConfirmPassword,
//             password: hashedPassword,
//             id: users.length + 1
//         };

//         users.push(newUser);  // Store user

//         // Generate JWT token
//         const token = jwt.sign(
//             { userId: newUser.id, email: newUser.email },
//             SECRET_KEY,
//             { expiresIn: '1h' }  // Token expires in 1 hour
//         );

//         res.status(201).json({
//             message: 'User created successfully',
//             token
//         });
//     } catch (err) {
//         res.status(500).json({ error: 'Error creating user' });
//     }
// });

// // Login Route
// app.post('/login', async (req, res) => {
//     // Validate login data
//     const { error, value } = userLoginSchema.validate(req.body);
    
//     if (error) {
//         return res.status(400).json({
//             error: 'Validation error',
//             details: error.details.map(detail => detail.message)
//         });
//     }

//     // Find user by email
//     const user = users.find(u => u.email === value.email);
//     if (!user) {
//         return res.status(401).json({ error: 'Invalid email or password' });
//     }

//     try {
//         // Compare provided password with stored hash
//         const validPassword = await bcrypt.compare(value.password, user.password);
//         if (!validPassword) {
//             return res.status(401).json({ error: 'Invalid email or password' });
//         }

//         // Generate new token
//         const token = jwt.sign(
//             { userId: user.id, email: user.email },
//             SECRET_KEY,
//             { expiresIn: '1h' }
//         );

//         res.json({
//             message: 'Login successful',
//             token
//         });
//     } catch (err) {
//         res.status(500).json({ error: 'Error during login' });
//     }
// });

// // Protected Profile Route
// app.get('/profile', authenticateToken, (req, res) => {
//     const user = users.find(u => u.id === req.user.userId);
//     if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//     }

//     // Remove password from response
//     const { password, ...userWithoutPassword } = user;
//     res.json(userWithoutPassword);
// });

// // Start server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });