const express = require('express');
const path = require('path');
const router = express.Router();
const productsController = require('../controllers/products.js');;

router.get('/add-product',productsController.getAddProduct); 

router.post('/add-product',productsController.postAddProducts);

module.exports = router;
