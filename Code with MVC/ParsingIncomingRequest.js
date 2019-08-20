const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const errorController = require('./controllers/error.js');
//setting ejs engine
app.set('view engine', 'ejs');
app.set('views','./Views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

const adminRoutes = require('./Routes/admin.js');
const shopRoutes = require('./Routes/shop.js');
                                                  
app.use('/admin',adminRoutes);
app.use(shopRoutes);

//setting an error page for unhandled routes
app.use(errorController.get404);

app.listen(3000);