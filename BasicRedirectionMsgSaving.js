const http = require('http');
const fs = require('fs');
http.createServer((req, res)=>{
	const method = req.method;
	const url = req.url;
    if(url==='/'){
		res.write('<html><head><title>Enter Message</title></head><body><form action ="/message" method="POST"><input type="text" name ="message" placeholder="Enter Message to send"/><button type="submit">SEND</button></form></body></html>');
		return res.end();
	}
	if(url==='/message' && method==='POST'){
		const body = [];
		req.on('data', (chunk)=>{
			body.push(chunk);
			console.log(chunk);
		});
		req.on('end',()=>{
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			const msg = parsedBody.split("=")[1];
			fs.writeFileSync("message.txt",msg);
		res.statusCode = 302;
		res.setHeader('location', '/');
		return res.end();
		});
	
	}
	    res.setHeader('Content-type','text/html');
		res.write('<html><head><title>My First Page</title></head><body><h1>Welcome To the very First Page </h1></body></html>');
		res.end();
}).listen(3000);