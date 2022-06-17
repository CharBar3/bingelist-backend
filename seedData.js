// const tvShowSchema = new Schema ({
//     showTitle: String,
//     userRating: Number,
//     seasons: [{
//         episodes: [{
//             watched: Boolean,
//             comments: String
//         }],
//     }],
//     googleID: String,
// })

module.exports = [
    {
    showTitle: "Chuck",
    userRating: 5,
    seasons: [{
        episodes: [{
            episodeNumber: 1,
            episodeTitle: "Chuck Versus the Intersect",
            watched: true,
            comments: 'Very good first episode'
        },
        {
            episodeNumber: 2,
            episodeTitle: "Chuck Versus the Helicopter",
            watched: true,
            comments: 'loved the part where he flew a helicopter!'
        },
        {
            episodeNumber: 3,
            episodeTitle: "Chuck Versus the Tango",
            watched: true,
            comments: 'chuck should definitely never tango'
        }],
    },
    {
        episodes: [{
            episodeNumber: 1,
            episodeTitle: "Chuck Versus the First Date",
            watched: true,
            comments: "I CAN'T BELIEVE CHUCK WENT ON A DATE!"
        },
        {
            episodeNumber: 2,
            episodeTitle: "Chuck Versus the Seduction",
            watched: false,
            comments: ''
        },
        {
            episodeNumber: 3,
            episodeTitle: "Chuck Versus the Break-Up",
            watched: false,
            comments: ''
        }],
    }],
    googleID: String
},
{
    showTitle: "House",
    userRating: 4,
    seasons: [{
        episodes: [{
            episodeNumber: 1,
            episodeTitle: "Everybody Lies",
            watched: true,
            comments: 'Very good first episode of house!'
        },
        {
            episodeNumber: 2,
            episodeTitle: "Paternity",
            watched: true,
            comments: 'Loved this one!'
        },
        {
            episodeNumber: 3,
            episodeTitle: "Occam's Razor",
            watched: false,
            comments: ''
        },
        {
            episodeNumber: 4,
            episodeTitle: "Maternity",
            watched: false,
            comments: ''
        }],
    },
    {
        episodes: [{
            episodeNumber: 1,
            episodeTitle: "Acceptance",
            watched: false,
            comments: ""
        },
        {
            episodeNumber: 2,
            episodeTitle: "Autopsy",
            watched: false,
            comments: ''
        },
        {
            episodeNumber: 3,
            episodeTitle: "Humpty Dumpty",
            watched: false,
            comments: ''
        }],
    }],
    googleID: String
}
]