const express = require("express");
const ejs = require("ejs");

const app = express();
//Stuff for server
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));

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



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on ${PORT}'));