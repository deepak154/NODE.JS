const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//setting pug engine
app.set('view engine', 'pug');
app.set('views','./Views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

const adminData = require('./Routes/admin.js');
const shopRoutes = require('./Routes/shop.js');
                                                  
app.use('/admin',adminData.routes);
app.use(shopRoutes);

//setting an error page for unhandled routes
app.use((req,res,next)=>{
	res.status(404).render('404',{pageTitle: 'Error 404'});
});

app.listen(3000);