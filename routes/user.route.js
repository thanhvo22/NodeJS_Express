var db = require('../db');
var controller = require('../controllers/users.controller');
const shortid = require('shortid');
var express = require('express');
var router = express.Router();
const app = express();

router.get('/',controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.viewId);


//tra ve nguoi dung khi tao
router.post('/create', controller.postCreateUser);


module.exports =router;