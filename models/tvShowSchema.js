const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tvShowSchema = new Schema ({
    showTitle: String,
    userRating: Number,
    showBackdrop: String,
    showPoster: String,
    description: String, 
    seasons: [{
        seasonPoster: String,
        episodes: [{
            episodeNumber: Number,
            episodeTitle: String,
            watched: Boolean,
            comments: String,
        }],
    }],
    googleID: String,
})


module.exports = mongoose.model('tvShow', tvShowSchema)