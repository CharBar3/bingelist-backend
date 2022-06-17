const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const TvShow = require('./models/tvShowSchema')
const Routes = require('./controllers/routeControl');
const testRoute = require('./controllers/testRoutes')
const admin = require('firebase-admin')

//--------------------------------------
const app = express();

require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert(require('./firebase-service-key.json'))
});


//--------------------------------------

const { PORT = 4000, MONGODB_URL} = process.env;

//Connect to mongoDB
mongoose.connect(MONGODB_URL);

// Mongo Status Listeners
mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (err) => console.log('Error with MongoDB: ' + err.message))

// const tvData = mongoose.model('tvData', tvShowSchema);

//MIDDLEWARE----------------------------
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// 👆 this creates req.body from incoming JSON request bodies
app.use('/bingelist', testRoute);

// authorization middleware
// app.use( async (req, res, next) => {
//     const token = req.get('Authorization')
//     if (token) {
//         try {
//             const user = await admin.auth().verifyIdToken(token.replace('Bearer ', ''))
//         console.log(user)
//         req.user = user;
//         } catch (error) {
//             req.user = null;
//         }
//     } else {
//         req.user = null;
//     }
//     next();
// })

// // lets you know if you're not logged in when making requests
// function isAuthenticated(req, res, next) {
//     if (!req.user) return res.status(401).json({message: 'you must be logged in'})
//     else {
//         return next();
//     }
// }

// ==========
// SEED ROUTE
// ==========
const seedData = require('./seedData')
app.get('/seed', (req, res) => {
    TvShow.deleteMany({}, (error, allTVShows) => {})
    TvShow.create(seedData, (error, data) => {
        res.redirect('/bingelist')
    })
})
app.get('/', (req, res) => {
    res.redirect('/bingelist')
})


app.listen(PORT, () => {
    console.log(`Port: ${PORT} is now active`);
});