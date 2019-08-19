const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

//setting and registering handlebar engine
app.engine('hbs',expressHbs({layoutsDir: './Views/layouts', defaultLayout: 'main-layout',extname:'hbs'}));
app.set('view engine', 'hbs');
app.set('views','./Views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

const adminData = require('./Routes/admin.js');
const shopRoutes = require('./Routes/shop.js');
                                                  
app.use('/admin',adminData.routes);
app.use(shopRoutes);

//setting an error page for unhandled routes
app.use((req,res,next)=>{
	res.status(404).render('404.hbs',{pageTitle: 'Error 404'});
});

app.listen(3000);