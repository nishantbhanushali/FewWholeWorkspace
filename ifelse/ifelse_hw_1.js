let express = require("express");
let app = express();

// first question

app.get("/check-whole-number", (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number >= 0) {
    result = `${number}  is an whole number`;
  } else {
    result = `${number}  is not an  whole number`;
  }
  res.send(result);
});

// second question

app.get("/check-two-equals", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  let result;
  if (num1 === num2) {
    result = `numbers are equal `;
  } else {
    result = `numbers are not equal`;
  }
  res.send(result);
});

// question 3

app.get("/check-isactive", (req, res) => {
  let isActive = req.query.isActive == "true";

  let result;
  if (isActive) {
    result = `number is active `;
  } else {
    result = `numbers is not active`;
  }
  res.send(result);
});

// question 4
app.get("/check-discount", (req, res) => {
  let cost = parseInt(req.query.cost);

  let result;
  if (cost > 1000) {
    result = `user is eligible for discount `;
  } else {
    result = `user is not eligible for discount`;
  }
  res.send(result);
});

// question5
app.get("/check-workexprience", (req, res) => {
  let workexprience = parseFloat(req.query.workexprience);

  let result;
  if (workexprience > 1) {
    result = `candidates is experienced `;
  } else {
    result = `candidates is fresher`;
  }
  res.send(result);
});

// question 6
app.get("/check-result", (req, res) => {
  let result = parseFloat(req.query.result);

  let grade;
  if (result > 80) {
    grade = `A`;
  } else if (result >= 50) {
    grade = `B`;
  } else {
    grade = "c";
  }
  res.send(`${grade}`);
});

// question 7

app.get("/check-attendence", (req, res) => {
  let attendence = parseInt(req.query.attendence);

  let result;
  if (attendence > 30) {
    result = `low`;
  } else if (attendence >= 75) {
    result = `moderate`;
  } else {
    result = "high";
  }
  res.send(`${result}`);
});

// question 8

app.get("/check-rating", (req, res) => {
  let stars = parseFloat(req.query.stars);

  let result;
  if (stars < 3) {
    result = `low`;
  } else if (stars <= 4) {
    result = `medium`;
  } else {
    result = "high";
  }
  res.send(` the rating of the hotel is ${result}`);
});

app.listen(3000);
