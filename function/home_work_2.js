let express = require("express");
let app = express();

// 1
function generateProfileUrl(username) {
    return `https://github.com/${username}`;
}

app.get("/github-profile", (req, res) => {
    let username = req.query.username;
    res.send(generateProfileUrl(username));
});

// 2

function generateCertificate(firstName, lastName, courseName) {
    return `This certification is awarded to ${firstName} ${lastName} for completing the ${courseName} course`;
}
app.get("/certificates", (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    let courseName = req.query.courseName;
    res.send(generateCertificate(firstName, lastName, courseName));
});

// /3

function calculategrade(math, science, english) {
    return ((math + science + english) / 300) * 100;
}

app.get("/grade", (req, res) => {
    let math = parseInt(req.query.math);
    let science = parseInt(req.query.science);
    let english = parseInt(req.query.english);
    res.send(calculategrade(math, science, english).toString());
});

// 4
function spillBill(billAmount, numOfFreinds) {
    return billAmount / numOfFreinds;
}
app.get("/spill-bill", (req, res) => {
    let billAmount = parseFloat(req.query.billAmount);
    let numOfFreinds = parseFloat(req.query.numOfFreinds);
    res.send(spillBill(spillBill, numOfFreinds).toString());
});

// /5
function calculateSalary(totalHours, hourlyWage) {
    return totalHours * hourlyWage;
}

app.get("/monthly-salary", (req, res) => {
    let totalHours = parseFloat(req.query.totalHours);
    let hourlyWage = parseFloat(req.query.hourlyWage);
    res.send(calculateSalary(totalHours, hourlyWage).toString());
});

app.listen(3000);
