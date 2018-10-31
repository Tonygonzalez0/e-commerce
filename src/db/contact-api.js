const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors");
const app = express ();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(cors());

  const connection = mysql.createConnection({
    host     : 'road2hire.ninja',
    user     : 'r2hstudent',
    password : 'SbFaGzNgGIE8kfP',
    database : 'tgonzalez'
  });

  connection.connect(err => {
      if(err) throw err;
      console.log("Connected!")
  })

//GET
app.get('/contacts',(req,res)=>{
      const queryString = "SELECT * FROM test_contact"
      connection.query(queryString, (err,rows,fields) => {
        if(err){
            console.log(`Failed to get for contacts: ${err}`)
            res.sendStatus(500)
            return 
        }
        console.log("We fetched successfully!")
        res.json(rows)
      })
})


// //ADD
app.post("/contacts", (req, res) => {
    const {
            firstName,
            lastName,
            email,
            comment
    } = req.body;
  
    const queryString = `INSERT INTO test_contact (firstName, lastName, email,comment)
          VALUES (?,?,?,?)`;  
    connection.query(queryString,[firstName,lastName,email,comment], (err, rows) => {
        if(err){
            console.log(`Failed to add contacts: ${err}`)
            res.sendStatus(500)
            return 
        }
        console.log("We added successfully!")
      })
})

app.listen(3005,()=>{
    console.log('Started on port 3005');
});
