var config = require('../config');
var apiService = require('../services/apiService.js');
var api = {};

api.load = function(req, res){
    res.send(config.spaIndexHtmlPath);
};

api.getProducts = function(req, res){
    apiService.getAll().then(function(products){
        res.send({success: true, products: products});
    }).catch(function(users){
        res.send({success: false});
    });
};

api.getProduct = function(req, res){
    apiService.getProduct(req.params.productId).then(function(product){
        res.send({success: true, product: product});
    }).catch(function(users){
        res.send({success: false});
    });
};

api.addProduct = function(req, res){
    var name = req.body.name || '',
        desc = req.body.desc || '',
        price = parseFloat(req.body.price || 0);

    apiService.addProduct(name, desc, price).then(function(){
        res.send({success: true});
    }).catch(function(users){
        res.send({success: false});
    });
};

api.addComment = function(req, res){
    var text = req.body.text || '',
        productId = req.body.productId;

    apiService.addComment(productId, text).then(function(users){
        res.send({success: true});
    }).catch(function(users){
        res.send({success: false});
    });
};

module.exports = api;
