const express = require ('express');
const userSchema = require('../userSchema');

const router = express.Router();

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



module.exports = router;