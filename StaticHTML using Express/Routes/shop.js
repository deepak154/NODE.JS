const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path.js');
//for other pages
router.get('/',(req,res, next)=>{
	console.log("In another middleware2");
	res.sendFile(path.join(rootDir,'Views','shop.html'));
	// global variable __dirname gives absolute path of directory of current file , ../ takes up one level, 'Views' folder contains view files
});

module.exports = router;