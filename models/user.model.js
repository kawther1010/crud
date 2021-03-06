const mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    fullName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    mobile: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    }
}, {timestamps: true});

// Custom validation for email
userschema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');



module.exports = mongoose.model('User',userschema);