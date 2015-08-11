var express = require('express');
var controller = require('./index');
var router = express.Router();

router.get('/get-products', controller.getProducts);
router.get('/get-product/:productId', controller.getProduct);
router.post('/add-product', controller.addProduct);
router.post('/add-comment', controller.addComment);
router.get('/', controller.load);

module.exports = router;