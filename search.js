var express = require('express');
var fs = require('fs');
var app = express();

app.get('/:id', function(req, res){
	// first reading existing users.
	fs.readFile(__dirname+"/"+"index.json", "utf8", function(err, data){
		var users = JSON.parse(data);
		var user = users["user"+req.params.id];
		console.log(user);
		if(user) {
			res.write(JSON.stringify(user));
			
		} else {
			res.write("not found.");
		}
		res.end();
	});
});

var server = app.listen(8081, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listing at", host, port);
});