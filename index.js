var express = require('express');
var app = express();

var port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    console.log("GET request received on port " + port);
    res.send("./signin.html");
});

app.post("/", (req, res) => {
    console.log("POST request received on port " + port);
    res.send("./signin.html");
})

app.listen((req, res) => {
    console.log("Server running on port " + port);
});