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
            //res.redirect('userslist');
            res.send('done');
            console.log('done!');
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
    User.findById(req.params.id.trim(), function(err, Result){
        if(err){
            console.log(err);
        } else {
            res.render('show', {
                user: Result,
            });
        }
    });
}

const getedit = (req, res) =>{
    User.findById(req.params.id.trim(), function(err, Result){
        if(err){
            console.log(err);
        } else {
            res.render('edit', {
                user: Result,
            });
        }
    }); 
}

//{ useFindAndModify: false}
const updateuser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if(err){
            res.render('error');
            console.log('Error:' +err);
        } else {
            res.render('home');
        }
    });
}

const deleteuser = (req, res) => {
    User.findByIdAndDelete(req.params.id , (err) => {
        if(err){
            res.render('error');
            console.log('Error:' +err);
        } else {
            //res.render('home');
            res.send('done');
            console.log('done!');
        }
    });
}

module.exports = {
    gethome,
    getregister,
    postregister,
    getuserslist,
    getuser,
    getedit,
    updateuser,
    deleteuser,
};