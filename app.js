var express = require('express');
var fs = require('fs');
var app = express();

// read from json file
app.get('/', function(req, res){
	fs.readFile(__dirname+"/"+"index.json", "utf8", function(err, data){
		if(err) throw err;
		console.log(JSON.parse(data));
		res.send(JSON.parse(data));
		res.end();
	});
});

var server = app.listen(8081, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listing at", host, port);
});