const express = require('express');
const shortid = require('shortid');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var autMiddleware = require('./middlewares/auth.middlewares');

var db = require('./db');
const app = express();
const port = 3000;

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', (req, res) => {
  res.render('index',{
  	name:"Thanh Vo"
  });
});

//phai dang nhap moi moi dung dc
app.use('/users', autMiddleware.requireAuth, userRoute);

//use login
app.use('/auth', authRoute);

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
