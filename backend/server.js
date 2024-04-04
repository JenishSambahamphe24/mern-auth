import express from 'express';
import dotenv from 'dotenv'; 
import userRoutes from './Routes/userRoutes.js'
import connectDB from '../config/db.js';
import { notFound, errorHandler } from './Middleware/errorMiddleware.js';
import User from './models/userModel.js';
import cookieParser from 'cookie-parser'

dotenv.config();
connectDB()


const app = express();
const port = process.env.PORT || 5000;  

app.use(express.json())
// express.json() is a built-in middleware function in Express.js that parses incoming JSON payloads (request bodies) and makes them available as req.body object. When a request with a JSON payload is received by the server, express.json() parses the JSON data and attaches it to the req.body property of the request object.

app.use(express.urlencoded({extended: true}))
// express.urlencoded({extended: true}) is another built-in middleware function in Express.js that parses incoming URL-encoded form data and makes it available as req.body object. URL-encoded form data is typically submitted through HTML forms with the application/x-www-form-urlencoded content type. The extended: true option allows the middleware to parse rich objects and arrays contained in the form data. If set to false, the value of req.body will be a string or array (depending on the type of form field).

app.use(cookieParser())
app.use('/api/users', userRoutes);
app.get('/', (req, res) => res.send('server is ready la'));
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`server started on ${port}`);  
});
