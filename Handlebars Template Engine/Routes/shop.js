const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path.js');
const adminData = require('./admin');

router.get('/',(req,res, next)=>{
	const products = adminData.products;
	res.render('shop',{
		prods:products, 
		pageTitle: 'My Amazing Shop', 
		path: '/', 
		hasProducts:products.length>0,
		activeShop: true,
		productCSS: true, 
	}); 
});

module.exports = router;