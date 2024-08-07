let express = require("express");
let app = express();
let port = 3000;

// homework 2

// question1
app.get("/bmi", (req, res) => {
  let weight = parseFloat(req.query.weight);
  let height = parseFloat(req.query.height);

  let bmi = weight / (height * height);
  res.send(`${bmi}`);
});
app.listen(3000);

// question2

app.get("/checkout", (req, res) => {
  let product = req.query.product;
  let units = parseFloat(req.query.units);
  let price = parseFloat(req.query.price);

  let totalprice = units * price;

  res.send(` your totalprice for ${units} ${product} is ${totalprice} $`);
});
app.listen(3000);

// # question 3

app.get("/grade", (req, res) => {
  let math = parseFloat(req.query.math);
  let science = parseFloat(req.query.science);
  let english = parseFloat(req.query.english);

  let totalMarks = ((math + science + english) / 300) * 100;

  res.send(` your percentage is ${totalMarks} %`);
});
app.listen(3000);

// # qeustion4

app.get("/discounted-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);
  let discountedPrice = cartTotal - cartTotal * (discount / 100);

  res.send(` your total bill amount is  ${discountedPrice} %`);
});
app.listen(3000);

// # question5

app.get("/split-price", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFreinds = parseFloat(req.query.numberOfFreinds);
  let spiltAmount = billAmount / numberOfFreinds;

  res.send(` bill amount for each friends is  ${spiltAmount} rupess`);
});
app.listen(3000);

// # question 6
app.get("/c-f", (req, res) => {
  let celsius = parseFloat(req.query.celsius);
  let farheniet = (celsius * 9) / 5 + 32;

  res.send(` ${celsius} is  ${farheniet} farheniet`);
});
app.listen(3000);

// # question 7

app.get("/monthly-salary", (req, res) => {
  let totalHours = parseFloat(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  let monthlyWage = totalHours * hourlyWage;

  res.send(`your this month wage is  ${monthlyWage} $`);
});

app.listen(3000);
