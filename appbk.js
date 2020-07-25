const express = require("express");
const app = express();

//routes
app.get("/", function(req, res){
 res.send("/index.ejs");
}); 

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
console.log("Express server is running...");
}); 


