require('dotenv').config();

const express = require('express');
const shortid = require('shortid');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRouter = require('./routes/product.route');
var cartRouter = require('./routes/cart.route');

var autMiddleware = require('./middlewares/auth.middlewares');
var sessionMiddleware = require('./middlewares/session.widdlewares');


var db = require('./db');
const app = express();
const port = 3000;

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(sessionMiddleware);

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', (req, res) => {
  res.render('index',{
  	name:"Thanh Van Vo "
  });
});

//phai dang nhap moi moi dung dc
app.use('/users', autMiddleware.requireAuth, userRoute);

//use login
app.use('/auth', authRoute);
app.use('/product', productRouter);
app.use('/cart', cartRouter);

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
