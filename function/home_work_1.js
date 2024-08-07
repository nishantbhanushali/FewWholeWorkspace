let express = require("express");
let app = express();
// hoe work 1

// 1

function getWelcomeMessages() {
    return "we will now learn functions";
}
app.get("/welcomes", (req, res) => {
    res.send(getWelcomeMessages());
});

// 2

function getGreetingMessage(username) {
    return `hello ${username}, are you ready to learn functions`;
}
app.get("/greet", (req, res) => {
    let username = req.query.username;
    res.send(getGreetingMessage(username));
});

// 3

function checkExperience(exp) {
    if (exp > 0) {
        return "you have some experience wiht function";
    } else {
        return "you are fresher in functions ";
    }
}

app.get("/check-exp", (req, res) => {
    let exp = parseFloat(req.query.exp);
    res.send(checkExperience(exp).toString());
});

// 4

function getTime(day, hour) {
    return day * hour;
}

app.get("/hours", (req, res) => {
    let day = parseFloat(req.query.day);
    let hour = parseFloat(req.query.hour);
    res.send(getTime(day, hour).toString());
});

// 5

function getModuleCompleted(username, hasCompleted) {
    if (hasCompleted) {
        return `${username} has completed the moduled`;
    } else {
        return `${username} has not completed the moduled`;
    }
}

app.get("/module-completed", (req, res) => {
    let username = req.query.username;
    let hasCompleted = req.query.hasCompleted == "true";
    res.send(getModuleCompleted(username, hasCompleted));
});

// 6
function getPersonalGreet(city, name) {
    return ` welcome to  ${city} to ${name} `;
}

app.get("/personalgreet", (req, res) => {
    let name = req.query.name;
    let city = req.query.city;
    res.send(getPersonalGreet(name, city));
});

// 7

function FindAge(birthYear) {
    return 2024 - birthYear;
}

app.get("/find-age", (req, res) => {
    let birthYear = parseFloat(req.query.birthYear);
    res.send(FindAge(birthYear).toString());
});

// 8

function findRequiredTime(days, hours) {
    let time = days * hours;
    if (time >= 30) {
        return "the time is sufficient for learning functions";
    } else {
        return "the time is not sufficient for learning functions";
    }
}

app.get("/time-sufficient", (req, res) => {
    let days = parseInt(req.query.days);
    let hours = parseFloat(req.query.hours);
    res.send(findRequiredTime(days, hours).toString());
});

app.listen(3000);
