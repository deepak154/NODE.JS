const express = require('express');
//no need of http
const bodyParser = require('body-parser');
const app = express();
//registering a body parser
app.use(bodyParser.urlencoded({extended:false}));
//url encoded function registers the parser, and extended false is config property allow to parse non default features

const adminRoutes = require('./Routes/admin.js');
const shopRoutes = require('./Routes/shop.js');  //importing values
app.use('/admin',adminRoutes); //can direct use the function as object
//route starting with /admin will admin in admin.js file only and it doesn't also need to define this starting segment in all functions of that file.
app.use(shopRoutes);

//setting an error page for unhandled routes
app.use((req,res,next)=>{
	res.status(404).send('<h1>Page Not Found</h1>')
});

app.listen(3000);