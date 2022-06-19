const express = require ('express');
const admin = require('firebase-admin')
const tvShow = require('../models/tvShowSchema');
const router = express.Router();

admin.initializeApp({
    credential: admin.credential.cert(require('../firebase-service-key.json'))
  });

router.use( async (req, res, next) => {
    const token = req.get('Authorization')
    if (token) {
        const user = await admin.auth().verifyIdToken(token.replace('Bearer ', ''))
        console.log(user)
        req.user = user;
    } else {
        req.user = null;
    }
    next();
})

function isAuthenticated(req, res, next) {
    if (!req.user) return res.status(401).json({message: 'you must be logged in'})
    else {
        return next();
    }
}

// example:
// router.get('/', isAuthenticated, (req, res) => {
//     res.send(" My names not RIIIIIIIIIIIICK!” - Patrick ")
//     //i enjoy being me when I can
// })

//INDEX--------------------------------
router.get('/', isAuthenticated, async (req, res) => {
    try {
        // grabs google id
        const googleID = req.user.uid
        // grabs all data related to google id {googleID}
        res.json(await tvShow.find({googleID}));
        //res.json(await tvShow.find({})); we dont need this
    } catch (error) {
        console.log('error: ', error);
        res.json({error: 'somethings wrong go check the console'})
    }
});

//DELETE--------------------------------
router.delete('/:id',isAuthenticated, async (req, res) => {
    try {
        res.json(await tvShow.findByIdAndDelete(req.params.id));
    } catch (error) {
        console.log('error: ', error);
        res.json({error: 'something went wrong - check console'});
    }
});
// UPDATE--------------------------------
router.put('/:id', isAuthenticated, async (req, res) => {
    try {
        res.json(await tvShow.findByIdAndUpdate(req.params.id, req.body, { new: true } ));
                                            // Just in case you forgot what ^^^ it sends back the updated version so we aren't
                                            ///stuck with the old one.

    } catch (error) {
        console.log('error: ', error);
        res.json({error: 'something went wrong - check console'});
    }
});

//CREATE--------------------------------
router.post('/', isAuthenticated, async (req, res) => {
    try {
        // need this to add google id to the body when adding a bingelist
        req.body.googleID = req.user.uid
        console.log(req.body)
        res.json(await tvShow.create(req.body));
    } catch (error) {
        console.log('error: ', error);
        res.json({error: 'something went wrong - check console'});
    }
});



module.exports = router;