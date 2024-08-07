let express = require("express");
let app = express();
// first question

app.get("/checknumber", (req, res) => {
    let number = parseFloat(req.query.number);
    if (number >= 0) {
        let result = "positive";
    } else {
        let result = "negative";
    }
    res.send(`the number ${number} is ${result}`);
});

// second question

app.get("/check-e-o", (req, res) => {
    let number = parseFloat(req.query.number);
    let result;
    if (number / 2 == 0) {
        result = "even";
    } else {
        result = "odd";
    }
    res.send(`the number ${number} is ${result}`);
});

// third question

app.get("/check-login", (req, res) => {
    let isLoggedIn = req.query.isLoggedIn;
    let result;

    if (isLoggedIn) {
        result = "user loggedIN";
    } else {
        result = "user not loggedIn";
    }
    res.send(`${result}`);
});

// fourth question

app.get("/check-discount", (req, res) => {
    let age = parseInt(req.query.age);
    let result;
    if (age > 65) {
        result = "eligible for discount";
    } else {
        result = "not eligible for discount";
    }
    res.send(`${result}`);
});

// fifth question

app.get("/checknumber-type", (req, res) => {
    let number = parseFloat(req.query.number);
    let result;
    if (number > 0) {
        result = "positive";
    } else if (number < 0) {
        result = "negative";
    } else {
        result = "zero";
    }
    res.send(`the number  ${result}`);
});

// sixth question

app.get("/check-temperature", (req, res) => {
    let temperature = parseFloat(req.query.temperature);
    let result;
    if (temperature < 15) {
        result = "cold";
    } else if (15 <= temperature <= 25) {
        result = "warm";
    } else {
        result = "hot";
    }
    res.send(`temperature is  ${result}`);
});

// seventh question
app.get("/check-steps", (req, res) => {
    let steps = parseFloat(req.query.steps);
    let result;
    if (steps < 5000) {
        result = "low";
    } else if (5000 <= steps <= 10000) {
        result = "medium";
    } else {
        result = "high";
    }
    res.send(`steps are  ${result}`);
});

// eight questiom

app.get("/check-likes", (req, res) => {
    let likes = parseFloat(req.query.likes);
    let result;
    if (likes <= 100) {
        result = "low";
    } else if (likes <= 500) {
        result = "medium";
    } else {
        result = "high";
    }
    res.send(`likes are  ${result}`);
});

app.listen(3000);
