const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = new Schema ({
    BingeList: [{
        titleOfShow: 'string',
        userRating: 'number',
        seasons: [
            {
                episodes_number: 'number',
                watched: 'boolean',
                comments: 'string'
            }
        ]

    }]
})
