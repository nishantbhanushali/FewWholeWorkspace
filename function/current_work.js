let express = require("express");
let app = express();

// current work
// first q

function getWelcomeMessage() {
    return "welcome to the page";
}

app.get("/welcome", (req, res) => {
    res.send(getWelcomeMessage());
});

// second question

function getGreetingMessages(username) {
    return `hello ${username}`;
}
app.get("/greet", (req, res) => {
    let username = req.query.username;
    res.send(getGreetingMessages(username));
});

// 3

function checkPasswordStrong(password) {
    if (password.length > 15) {
        return "your password is strong";
    } else {
        return "your password is weak";
    }
}

app.get("/checkpassword", (req, res) => {
    let password = req.query.password;
    res.send(checkPasswordStrong(password));
});

// 4

function addNum(sum1, sum2) {
    return sum1 + sum2;
}

app.get("/sum", (req, res) => {
    let sum1 = parseFloat(req.query.sum1);
    let sum2 = parseFloat(req.query.sum2);
    res.send(addNum(sum1, sum2).toString());
});

// 5

function subcriptionStatus(username, isSubscribed) {
    if (isSubscribed) {
        return `${username} is subscribed`;
    } else {
        return `${username} is not subscribed`;
    }
}

app.get("/subscription", (req, res) => {
    let username = req.query.username;
    let isSubscribed = req.query.isSubscribed == "true";
    res.send(subcriptionStatus(username, isSubscribed));
});

// 6

function getDiscountprice(price, discount) {
    return price - price * (discount / 100);
}

app.get("/discount", (req, res) => {
    let price = parseFloat(req.query.price);
    let discount = parseFloat(req.query.discount);
    res.send(getDiscountprice(price, discount).toString());
});

// 7

function getPersonalGreeting(age, gender, name) {
    return `hello ${name}, you are a ${age} years old ${gender}`;
}

app.get("/personalgreet", (req, res) => {
    let age = parseFloat(req.query.age);
    let gender = req.query.gender;
    let name = req.query.name;
    res.send(getPersonalGreeting(age, gender, name));
});

// 8

function getFinalPrice(price, discount, tax) {
    let discountedPrice = price - price * (discount / 100);
    return discountedPrice * (discountedPrice * (tax / 100));
}

app.get("/finalprice", (req, res) => {
    let price = parseFloat(req.query.price);
    let discount = parseFloat(req.query.discount);
    let tax = parseFloat(req.query.tax);
    res.send(getFinalPrice(price, discount, tax).toString());
});

// 9

function getTotalexerciseTime(running, cycling, swimming) {
    return running + cycling + swimming;
}

app.get("/exercise-time", (req, res) => {
    let running = parseFloat(req.query.running);
    let cycling = parseFloat(req.query.cycling);
    let swimming = parseFloat(req.query.swimming);
    res.send(getFinalPrice(running, cycling, swimming).toString());
});

app.listen(3000);
