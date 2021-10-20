var db = require('../db');

module.exports.index = function(req, res){
    var page = parseInt(req.query.page) || 1; // n
    var perPage = 8;

    var start = (page-1)*perPage;
    var end = page*perPage;

    res.render('product/index',{
        //c1 products: db.get('products').value().slice(0,8)
        products: db.get('products').value().slice(start,end)
    });
};
