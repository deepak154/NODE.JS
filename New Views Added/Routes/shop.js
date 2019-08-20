const express = require('express');
const router = express.Router();
const path = require('path');

const shopController = require('../controllers/shop.js');

router.get('/',shopController.getIndex);
router.get('/products',shopController.getProducts);
router.get('/cart',shopController.getCart);
router.get('/checkouts',shopController.getCheckout);
router.get('/orders',shopController.getOrders);

module.exports = router;