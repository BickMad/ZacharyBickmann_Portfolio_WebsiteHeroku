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

app.get("/html/my_resume", (req, res) => {
    res.render("/html/my_resume");
});

app.get("/html/my_fun_facts", (req, res) => {
    res.render("/html/my_fun_facts");
});

app.get("/html/my_blog", (req, res) => {
    res.render("/html/my_blog");
});

app.get("/html/my_trivia", (req, res) => {
    res.render("/html/my_trivia");
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on ${PORT}'));