//server.js "use strict"; 
const http = require("http"); 
const server = http.createServer(); 
server.on("request", function (req, res) { 
  res.statusCode = 200; res.setHeader("Content-Type", "text/plain");
  res.end("Hello World from Node!\n"); 
}); 
server.on("listening", function()
{ console.log("Server running"); 
});
 server.listen(3000);
"use strict";
 const express = require("express"); 
  const app = express(); 
  app.get("/home", function (req, res) {
   res.send("Hello, World from Express!"); 
}); 
const PORT = process.env.PORT || 3000; 
app.listen(PORT, function () {
 console.log('Example app listening on port: '+PORT+"!"); 


});

