const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const friendSchema = new Schema({
    friends: [
        {
            _id: {
                type: String,
            required: true,
            minlength: 3,
            maxlength: 20
            },

            profile: {
                type: String,
                required: true,
                minlength: 2,
                maxlength: 25
            }
        }
    ]
});

const Friends = model('Friends', friendSchema)