const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

//--------------------------------------
const app = express();

require('dotenv').config();

//--------------------------------------

//===========================================
//====== The mongoose stuff is commented out until you link your mongodb Charles
//===========================================

const { PORT = 4000} = process.env;

// Connect to mongoDB
// mongoose.connect(MONGODB_URL);

// // Mongo Status Listeners
// mongoose.connection
// .on('connected', () => console.log('Connected to MongoDB'))
// .on('error', (err) => console.log('Error with MongoDB: ' + err.message))

//MIDDLEWARE----------------------------
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// 👆 this creates req.body from incoming JSON request bodies

//ROUTES--------------------------------
app.get('/', (req, res) => {
    res.send(" My names not RIIIIIIIIIIIICK!” - Patrick ")
    //i enjoy being me when I can
})




app.listen(PORT, () => {
    console.log(`Port: ${PORT} is now active`);
});