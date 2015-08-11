angular.module('catalog').factory('api', function(httpModel) {
    var api = {
        getProducts: function () {
            return httpModel.get('/get-products');
        },
        getProduct: function (id) {
            return httpModel.get('/get-product/' + id);
        },
        addProduct: function(name, desc, price) {
            return httpModel.post('/add-product', {name: name, desc: desc, price: price});
        },
        addComment: function(productId, text) {
            return httpModel.post('/add-comment', {productId: productId, text: text});
        }
    };

	return api;
});
