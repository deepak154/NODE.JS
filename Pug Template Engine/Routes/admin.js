const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path.js');
const products = [];

router.get('/add-product',(req,res, next)=>{
	console.log("In another middleware1");
	res.render('add-product',{pageTitle: "Add Products"});
}); 

router.post('/add-product',(req,res, next)=>{ 
	console.log(req.body);
	products.push({title: req.body.title}); 
	res.redirect('/');
});

exports.routes = router;
exports.products = products;