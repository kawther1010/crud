const mongoose = require('mongoose');

const uri = the second database account of ur mama;

mongoose.connect( uri , { useNewUrlParser: true }, (err) => {
    if (!err){
        console.log('MongoDB Connection Succeeded.');
    } else {
        console.log('Error in DB connection : ' + err);
    }
});


require('./user.model');
