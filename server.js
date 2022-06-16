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

const { PORT = 4000, MONGODB_URL} = process.env;

//Connect to mongoDB
mongoose.connect(MONGODB_URL);

// Mongo Status Listeners
mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (err) => console.log('Error with MongoDB: ' + err.message))

const tvDataSchema = new mongoose.Schema({
    title: "string",
    userRating: "number",
    episode_number: [{
        id:'number',
        name:"string",
        rating:'',
        watched:'boolean',
        comments:'string',
    }],
    overallReview:'string'
})

const tvData = mongoose.model('tvData', peopleSchema);

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

//INDEX--------------------------------
app.get('/home', async (req, res) => {
    try {
        res.json(await tvData.find({}));
    } catch (error) {
        console.log('error: ', error);
        res.json({error: 'somesthings wrong go check the console'})
    }
});

//DELETE--------------------------------
app.delete('/home/:id', async (req, res) => {
    try {
        res.json(await tvData.findByIdAndDelete(req.params.id));
    } catch (error) {
        console.log('error: ', error);
        res.json({error: 'something went wrong - check console'});
    }
});
// UPDATE--------------------------------
app.put('/home/:id', async (req, res) => {
    try {
        res.json(await tvData.findByIdAndUpdate(req.params.id, req.body, { new: true } ));
                                            // Just in case you forgot what ^^^ it sends back the updated version so we aren't
                                            ///stuck with the old one.

    } catch (error) {
        console.log('error: ', error);
        res.json({error: 'something went wrong - check console'});
    }
});

//CREATE--------------------------------
app.post('/home', async (req, res) => {
    try {
        res.json(await tvData.create(req.body));
    } catch (error) {
        console.log('error: ', error);
        res.json({error: 'something went wrong - check console'});
    }
});




app.listen(PORT, () => {
    console.log(`Port: ${PORT} is now active`);
});