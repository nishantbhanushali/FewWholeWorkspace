let express  = require("express")
let app = express()

// question 1
app.get("/check-bmi", (req, res) => {
  let weight  = parseFloat((req.query.weight));
  let height  = parseFloat((req.query.height));

  let bmi = weight / (height * height)
  let result;


  if(bmi < 18.5){
      result = "underweight"

  }
  else if (bmi < 24.5) {
    result = "normal";
  } else if(bmi < 29.5){
    result = `overweight`;
  }else{
    result = 'obese'
  }
  res.send(` bmi category is ${result}`);
});


// q 2

app.get("/check-performance", (req, res) => {
    let grade  = parseFloat((req.query.grade));
    let result;


    if(grade >=90){
        result = "excellent"

    }
    else if (grade >=75) {
      result = "good";
    } else if(grade >= 50){
      result = `average`;
    }else{
      result = 'poor'
    }
    res.send(` youer grade are ${result}`);
  });


// q 3 

app.get("/check-age", (req, res) => {
    let age  = parseFloat((req.query.age));
    let result;


    if(age <=12){
        result = "child"
      }
    else if (age <=18) {
      result = "teenage";
    } else if(age <= 64){
      result = `adult`;
    }else{
      result = 'senior'
    }
    res.send(`  your are under age catefory of ${result}`);
  });



//   q 4


app.get("/check-creditscore", (req, res) => {
    let creditscore = parseFloat((req.query.creditscore));
    let score;


    if(creditscore >=750){
        score = "high"
    }else if (creditscore >=650) {
      score = "medium";
    } else{
      score = 'low'
    }
    res.send(`  your creditscore is  ${score}`);
  });

// q5

app.get("/check-tax-bracket", (req, res) => {
  let income= parseFloat((req.query.income));
  let result;


  if(income <= 500000){
      result = "10% tax bracket"
  }else if (income <= 1000000) {
    result = "15% tax bracket"
  } else if(income <= 1500000){
    score = '20% tax bracket'
  }else{
      result="30% tax bracket"
  }
  res.send(` your are under ${result}`);
});











app.listen(3000);













