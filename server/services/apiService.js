var mongo = require('./../mongo');
var mongoose = require('mongoose');
var Q = require('q');

var apiService = {};

apiService.getAll = function(){
	var deferred = Q.defer();

    mongo.Products.find({}, function callback(err, cursor){
        if(err){
            deferred.reject(err);
        }else{
            cursor.toArray(function(err, items){
                deferred.resolve(items);
            });
        }
    });

    return deferred.promise;
};

apiService.getProduct = function(productId){
    var deferred = Q.defer();

    mongo.Products.findOne({_id: productId}, function callback(err, data){
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(data);
        }
    });

    return deferred.promise;
};

apiService.addProduct = function(name, desc, price){
    var deferred = Q.defer(),
    	doc = {
	    	_id: mongoose.Types.ObjectId().toString(),
	    	name: name, 
	    	desc: desc, 
	    	price: price,
            comments: []
	    };

    mongo.Products.save(doc, function(err){
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(doc);
        }
    });

    return deferred.promise;
};

apiService.addComment = function(productId, text){
    var deferred = Q.defer(),
    	doc = {
	    	_id: mongoose.Types.ObjectId().toString(),
	    	productId: productId, 
	    	text: text
	    };

    mongo.Products.update({_id: productId}, {$push: {comments: {text: text, createdOn: new Date()}}}, function(err){
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(doc);
        }
    });

    return deferred.promise;
};

module.exports = apiService;