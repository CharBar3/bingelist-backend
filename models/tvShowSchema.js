const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const User = new Schema ({
//     BingeList: [{
//         titleOfShow: 'string',
//         userRating: 'number',
//         seasons: [
//             {
//                 episodes_number: 'number',
//                 watched: 'boolean',
//                 comments: 'string'
//             }
//         ]

//     }]
// })

const tvShowSchema = new Schema ({
    showTitle: String,
    userRating: Number,
    showBackdrop: String,
    showPoster: String,
    seasons: [{
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