var express = require('express');
var http = require('http');
const { route } = require('express/lib/application');
var path = require('path');
var app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var server_port = process.env.PORT || 3000; //This binds Heku's $PORT variable to the app's running port

app.get("/", (req, res) => {
    console.log("GET request received on port " + server_port);
    res.sendFile(path.resolve("./signin.html"));
});

app.use("/scripts", (req, res) => {
    res.setHeader("Content-Type", "text/javascript");
    res.sendFile("./signIn.js");
});

app.post("/", (req, res) => {
    console.log("POST request received on port " + server_port);
    res.sendFile(path.resolve("./signin.html"));
});

var server_host = '0.0.0.0';

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
}).listen(server_port, server_host, () => {
    console.log("Server running on port " + server_port);
});