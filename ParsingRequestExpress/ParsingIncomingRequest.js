const express = require('express');
//no need of http
const bodyParser = require('body-parser');
const app = express();
//registering a body parser
app.use(bodyParser.urlencoded({extended:false}));
//url encoded function registers the parser, and extended false is config property allow to parse non default features
//top to bottom hierarchy
app.use('/add-product',(req,res, next)=>{
	console.log("In another middleware1");
	res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});
app.post('/product',(req,res, next)=>{ //post defines that this middleware is for post request only
	console.log(req.body); 
	//getting of icoming body but need to be parsed otherwise undefined
	res.redirect('/');
	// to redirect to a page
});
//for other pages
app.use('/',(req,res, next)=>{
	console.log("In another middleware2");
	res.send('<h1>Hello from other pages.</h1>');
});
app.listen(3000);