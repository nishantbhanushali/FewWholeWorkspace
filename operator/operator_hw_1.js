let express = require("express");
let app = express();
// homework 1

// question 1

app.get("/total-marks", (req, res) => {
    let marks1 = parseFloat(req.query.marks1);
    let marks2 = parseFloat(req.query.marks2);
    let totalMarks = marks1 + marks2;
    res.send(totalMarks.toString());
});
app.listen(3000);

// question2

app.get("/total-weight", (req, res) => {
    let weight1 = parseFloat(req.query.weight1);
    let weight2 = parseFloat(req.query.weight2);
    let weight3 = parseFloat(req.query.weight3);
    let totalWeight = weight1 + weight2 + weight3;
    res.send(totalWeight.toString());
});
app.listen(30000);

// question3

app.get("/monthy-salary", (req, res) => {
    let annualSalary = parseFloat(req.query.annualSalary);
    let monthySalary = annualSalary / 12;
    res.send(monthySalary.toString());
});
app.listen(3000);

// question 4

app.get("/total-pages", (req, res) => {
    let pagesPerDay = parseFloat(req.query.pagesPerDay);
    let days = parseFloat(req.query.days);

    let totalPages = pagesPerDay * days;
    res.send(totalPages.toString());
});
app.listen(3000);
// question 5

app.get("/currency-conversion", (req, res) => {
    let amount = parseFloat(req.query.amount);
    let exchangeRate = parseFloat(req.query.exchangeRate);

    let convertedAmount = amount * exchangeRate;
    res.send(convertedAmount.toString());
});
app.listen(3000);

// question6

app.get("/average-sales", (req, res) => {
    let sales1 = parseFloat(req.query.sales1);
    let sales2 = parseFloat(req.query.sales2);
    let sales3 = parseFloat(req.query.sales3);

    let averageSales = sales1 + sales2 + sales3;
    res.send(averageSales.toString());
});

app.listen(3000);
