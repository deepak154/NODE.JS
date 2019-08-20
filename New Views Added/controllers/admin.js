const Product = require('../models/product.js');

exports.getAddProduct= (req,res, next)=>{
	console.log("In another middleware1");
	res.render('admin/add-product',{
	pageTitle:'Add Product Page', 
	path: '/admin/add-product' 
    });
};

exports.postAddProducts = (req,res, next)=>{ 
	console.log(req.body);
	const title = req.body.title;
	const imageURL = req.body.imageURL;
	const price = req.body.price;
	const description = req.body.description;
	product = new Product(title, imageURL, description, price);
	product.save();
	res.redirect('/');
};

exports.getProducts = (req, res, next)=>{
Product.fetchAllProducts( products => {
		res.render('admin/products',{
			prods:products, 
			pageTitle: 'All Products', 
			path: '/admin/products' 
		}); 
	});
};