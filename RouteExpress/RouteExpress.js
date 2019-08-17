const express = require('express');
//no need of http
const app = express();
app.use('/',(req,res, next)=>{
	console.log("This always runs");
	next();
});
//top to bottom hierarchy
app.use('/productval',(req,res, next)=>{
	console.log("In another middleware1");
	res.send('<h1>Hello from product page.</h1>');
});
//for other pages
app.use('/',(req,res, next)=>{
	console.log("In another middleware2");
	res.send('<h1>Hello from other pages.</h1>');
});
app.listen(3000);