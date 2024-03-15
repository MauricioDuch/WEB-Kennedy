const express = require("express");
const server = express();
const port = 3030;
const start = () => console.log("Starting server...");
server.listen(port,start());

const path = require("path");
const public = path.join(__dirname, "public");
const statics = express.static(public);
server.use(statics)

server.get("/", function (req, res){
    let file = path.join(__dirname, "views", "index.html")
    res.sendFile(file);
})

server.get("/Info.html", function(req, res){
    let file2 = path.join(__dirname,"views","Info.html");
    res.sendFile(file2)
});

server.get("/Menu.html", function(req, res){
    let file3 = path.join(__dirname,"views","Menu.html");
    res.sendFile(file3)
});

server.get("/contac.html", function(req, res){
    let file4 = path.join(__dirname,"views","contac.html");
    res.sendFile(file4)
});