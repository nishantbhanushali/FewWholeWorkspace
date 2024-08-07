let express = require('express')
let app = express()



// home work two

// first question

app.get('/custom-commit', (req, res) =>{
    let type = req.query.type;
    let message = req.query.message;
    let result = `${type} ${message}`
    res.send(result);
})


// second question

app.get("/certificate", (req, res) =>{
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    let courseName= req.query.courseName;
    let result = `the certification is awarded to ${firstName} ${lastName} for completing the ${courseName}`;
    res.send(result)

})



// third question
app.get("/autoreply", (req, res) =>{
    let startMonth = req.query.startMonth;
    let endMonth = req.query.endMonth;
    let autoreply= `Dear customer, thanks for reaching out to me. As i am not avaliable from ${ startMonth}
     to ${endMonth},  your queries will be resolved by another person `;
    res.send(autoreply)

})
// fourth question

app.get("/secureurl", (req, res ) => {
    let domain  = req.query.domain
    let result = `https:// ${domain} `
    res.send(result);
})

//  fifth question

app.get("/sendotp", (req, res ) => {
        let otp  = req.query.otp
        let result = `your otp is ${otp}. Do not share with anyone`
        res.send(result);
    })

// sixth question

app.get("/welcome", (req, res ) => {
            let firstName  = req.query.firstName
            let email = req.query.email
            let result = `hey ${firstName}, we will notify you here ${email}`
            res.send(result);
        })

// seventh question 
app.get("/github-profile", (req, res ) => {
                let username  = req.query.username
                let result = `https://github.com/${username}`
                res.send(result);
            })



// eight question

app.get("/text-ro-csv", (req, res ) => {
                    let id  = req.query.id;
                    let email = req.query.email;
                    let rollnumber = req.query.rollnumber;
                    let result = `${id} , ${email} , ${rollnumber} `
                    res.send(result);
                })




app.listen(3000)