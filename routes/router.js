var express = require('express');
var router = express.Router();

var controller = require('../controller/controller');


router.get('/', controller.gethome);
router.get('/register', controller.getregister);
router.post('/register', controller.postregister);
router.get('/userslist', controller.getuserslist);
router.get('/userslist/:id', controller.getuser);
router.get('/userslist/edit/:id', controller.getedit);
router.post('/userslist/edit/:id', controller.updateuser);
router.delete('/userslist/:id', controller.deleteuser);

module.exports = router;