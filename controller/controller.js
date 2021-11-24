const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');


const gethome = (req , res , next) => {
    res.render('home');
};
const getregister = (req , res , next) => {
    res.render('register');
};
const postregister = (req , res , next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.mobile = req.body.mobile;
    user.city = req.body.city;
    user.save((err, doc) => {
        if (!err){
            res.redirect('userslist');
            console.log(req.body);
        } else {
            res.render('error');
            console.log('Error during record insertion : ' + err);
        }
    });
}
const getuserslist = (req, res) => {
    User.find({}, (err , users) => {
        res.render('userslist', {
            usersList : users,
        })
    })
}

const getuser = (req, res) =>{
    User.findById(req.params.id, function(err, Result){
        if(err){
            console.log(err);
        } else {
            res.send(Result);
            console.log(Result);
        }
    });
}


/*
router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});
*/

module.exports = {
    gethome,
    getregister,
    postregister,
    getuserslist,
    getuser,
};