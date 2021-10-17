var db = require('../db');
var controller = require('../controllers/users.controller');
const shortid = require('shortid');
var express = require('express');
var router = express.Router();
const app = express();
var validate = require('../validate/user.validate');
var autMiddleware = require('../middlewares/auth.middlewares');

//ktra login trc roi vo index
router.get('/',controller.index);

router.get('/cookie', function(req, res, next){
	res.cookie('cart', { items: [1, 2, 3] });
	res.send('pro');
});
router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.viewId);
//cookie


//tra ve nguoi dung khi tao
router.post('/create', validate.postCreateUser, controller.postCreateUser);


module.exports =router;