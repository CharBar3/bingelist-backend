const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const userSchema = require('./userSchema')
const Routes = require('./controllers/routeControl');

//--------------------------------------
const app = express();

require('dotenv').config();

//--------------------------------------

const { PORT = 4000, MONGODB_URL} = process.env;

//Connect to mongoDB
mongoose.connect(MONGODB_URL);

// Mongo Status Listeners
mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (err) => console.log('Error with MongoDB: ' + err.message))

const tvData = mongoose.model('tvData', userSchema);

//MIDDLEWARE----------------------------
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// 👆 this creates req.body from incoming JSON request bodies
app.use('/home', Routes);


app.listen(PORT, () => {
    console.log(`Port: ${PORT} is now active`);
});