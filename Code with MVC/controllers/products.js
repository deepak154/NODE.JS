const Product = require('../models/product.js');

exports.getAddProduct= (req,res, next)=>{
	console.log("In another middleware1");
	res.render('add-product',{
	pageTitle:'Add Product Page', 
	path: '/admin/add-product',
	activeAddProduct: true,
	productCSS: true,
	formsCSS: true 
    });
};

exports.postAddProducts = (req,res, next)=>{ 
	console.log(req.body);
	product = new Product(req.body.title);
	product.save();
	res.redirect('/');
};

exports.getProducts = (req,res, next)=>{
	Product.fetchAllProducts( products => {
			res.render('shop',{
				prods:products, 
				pageTitle: 'My Amazing Shop', 
				path: '/', 
				hasProducts:products.length>0,
				activeShop: true,
				productCSS: true, 
			}); 
		});
};