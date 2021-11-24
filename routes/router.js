var express = require('express');
var router = express.Router();

var controller = require('../controller/controller');

router.get('/', controller.gethome);
router.get('/register', controller.getregister);
router.post('/register', controller.postregister);
router.get('/userslist', controller.getuserslist);
router.get('/:id', controller.getuser)

module.exports = router;