//Define modules required
var express = require("express");
var stylus = require("stylus");
var nib = require("nib");
var jade

//set port number
var portnumber = 3000;

//Intialize Express
var app = express();
console.log("Express Intialized");

//Compile Function for stylus
function compile(str, path){
	return(stylus(str)
	.set('filename', path)
	.use(nib()))
}

//set views folder
app.set("views", __dirname + '/views');

//Intialize jade
app.set("view engine", "jade");
console.log("Jade view engine initiated");

//Stylus Middleware
app.use(express.logger('dev'));
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'));

//Render Index Page
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Welcome' }
  )
})

app.listen(portnumber);
console.log('Server is now running on port '+portnumber);