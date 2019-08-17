const express = require('express');
const router = express.Router();
//router functiom of express acts like a mini app
//top to bottom hierarchy
// middleware to /admin/add-product  page => GET request
router.get('/add-product',(req,res, next)=>{
	console.log("In another middleware1");
	res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
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