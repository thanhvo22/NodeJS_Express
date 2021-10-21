var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: String,
    phone: String,
    pass: String,
    user: String,
    avatar: String
});

//                                              luu vao bang users
var User = mongoose.model('User', userSchema, 'users');

module.exports = User;