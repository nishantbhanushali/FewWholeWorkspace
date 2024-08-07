let express = require("express");
let app = express();
let port = 3000;

// first question
app.get("/shout", (req, res) => {
  let name = req.query.name;
  let upperCase = name.toUpperCase();
  res.send(upperCase);
});

// second question

app.get("/fullProductname", (req, res) => {
  let companyName = req.query.companyName;
  let productName = req.query.productName;
  let fullProductName = `${companyName} ${productName}`;
  res.send(fullProductName);
});

// third question

app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = `${month} / ${year}`;
  res.send(formattedDate);
});

//fourth question

app.get("/greet", (req, res) => {
  let city = req.query.city;
  let greeting = `you live in ${city}`;
  res.send(greeting);
});

// fifth question

app.get("/capital", (req, res) => {
  let capital = req.query.capital;
  let country = req.query.country;
  let countryCapital = ` ${capital} is the capital of ${country}`;
  res.send(countryCapital);
});

// sixth question
app.get("/officeEmail", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let domain = req.query.domain;
  let email = ` ${firstName} ${lastName}@ ${domain}`;
  res.send(email);
});
