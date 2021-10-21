var db = require('../db');

module.exports.addToCart = function( req, res, next){
    var productId = req.params.productId;
    var sessionId =  req.signedCookies.sessionId;
    console.log(sessionId);
    if(!sessionId){
        res.redirect('/product');
        return;
    }
    //console.log(db.get('sessions'));
    var count = db.get('sessions').find({id: sessionId})
    .get('cart.' + productId, 0).value();

    db.get('sessions')
    .find({id: sessionId})
    .set('cart.' + productId,1).write();
    console.log(typeof(db.get('sessions')));
    res.redirect('/product');
    // res.render('product',{
    //     //c1 products: db.get('products').value().slice(0,8)
    //     sessions: db.get('sessions').value()
    // });

};


