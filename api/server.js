var express = require('express');
var app = express();

var mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/ttonline');

var test = new mongoose.Schema({
    test: String
});

var Test = mongoose.model('test', test);

/* Config */
var port = process.env.PORT || 80;

/* API ROUTES */
app.get('/', function(req, res){
	
});



/* Start app and log it */
app.listen(port, function(){
	console.log("App active and running on: " + port);
});

