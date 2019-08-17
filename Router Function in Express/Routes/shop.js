const express = require('express');
const router = express.Router();
//for other pages
router.get('/',(req,res, next)=>{
	console.log("In another middleware2");
	res.send('<h1>Hello from other pages.</h1>');
});

module.exports = router;