const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path.js');
//router functiom of express acts like a mini app
//top to bottom hierarchy
// middleware to /admin/add-product  page => GET request
router.get('/add-product',(req,res, next)=>{
	console.log("In another middleware1");
	res.sendFile(path.join(rootDir,'Views','add-product.html')); //needs absolute path could be obtained using path.join function of path module
});
// middleware to /admin/add-product  page => POST request
router.post('/add-product',(req,res, next)=>{ //post defines that this middleware is for post request only
	console.log(req.body); 
	//getting of icoming body but need to be parsed otherwise undefined
	res.redirect('/');
	// to redirect to a page
});
//exporting router
module.exports = router;