const express = require("express");
const ejs = require("ejs");
const bodyParser = require('body-parser')
const {check, validationResult} = require('express-validator')

const app = express();
//Stuff for server
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));

const urlencoded = bodyParser.urlencoded({ extended: false})

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/my_resume", (req, res) => {
    res.render("my_resume");
});

app.get("/my_fun_facts", (req, res) => {
    res.render("my_fun_facts");
});

app.get("/my_blog", (req, res) => {
    res.render("my_blog");
});

app.get("/my_trivia", (req, res) => {
    res.render("my_trivia");
});

app.post("/my_trivia", urlencodedParser, (req, res) => {
    res.json(req.body)
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on ${PORT}'));