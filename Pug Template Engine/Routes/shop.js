const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path.js');
const adminData = require('./admin');

router.get('/',(req,res, next)=>{
	const products = adminData.products;
	res.render('shop',{prods:products, docTitle: 'My Amazing Shop'}); 
});

module.exports = router;