const express = require("express");
const app = express();
app.get("/", function(request, response){
	  response.send("<h1>Hello World!</h1>");
});
app.get("/contacts", function(req, res){
	  res.send("My contact is neha@gmail.com");
});

app.get("/hobbies", function(req, res){
	   res.send("<ul><li>coffee</li><li>Code</li></ul>");
});

app.get("/about", function(req, res){
	  res.send("I m Neha and I love to code");
});
app.listen(3000, function() {
console.log("Server started successfully at port 3000");
});
