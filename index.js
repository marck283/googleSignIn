var express = require('express');
var http = require('http');
var app = express();

var port = 3000;

app.get("/", (req, res) => {
    console.log("GET request received in port " + port);
    res.sendFile(".signin.html");
});

http.createServer(app).listen((req, res) => {
    console.log("Server running on port " + port);
});