var express = require('express');
var path = require('path');
var app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    console.log("GET request received on port " + port);
    res.sendFile(path.resolve("./signin.html"));
});

app.post("/", (req, res) => {
    console.log("POST request received on port " + port);
    res.sendFile(path.resolve("./signin.html"));
});

var server_port = process.env.port || 3000;
var server_host = '0.0.0.0';

app.listen(server_port, server_host, () => {
    console.log("Server running on port " + server_port);
});