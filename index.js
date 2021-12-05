const express = require("express");
const ejs = require("ejs");
const bodyParser = require('body-parser');
const { check, validationResult, body} = require('express-validator');

const app = express();
//Stuff for server
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));

const urlencodedParser = bodyParser.urlencoded({ extended: false});


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

app.post("/my_trivia", urlencodedParser, [
        check('firstQ').isLength({min:1}),
        check('secondQ').isLength({min:1}),
        console.log(post.firstQ)

], (req, res) => {
    const errors = validationResult(req)
    let score = 0
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()})
    }
    


});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on ${port}'));