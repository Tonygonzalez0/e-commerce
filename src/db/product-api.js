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
app.get('/products',(req,res)=>{
      const queryString = "SELECT * FROM test"
      connection.query(queryString, (err,rows,fields) => {
        if(err){
            console.log(`Failed to query for users: ${err}`)
            res.sendStatus(500)
            return 
        }
        console.log("We fetched successfully!")
        res.send(rows)
      })
})

//GET by ID
app.get('/products/:id',(req,res) =>{
      const productId = req.params.id;
      const queryString = "SELECT * FROM test where productId=?"
      connection.query(queryString,[productId], (err,rows,fields) => {
        if(err){
            console.log(`Failed to query for users: ${err}`)
            res.sendStatus(500)
            return 
        }
        console.log("We fetched successfully!")
        res.json(rows)
      })
})

// //ADD
app.post("/products", (req, res) => {
    const {
        title,
        description,
        price,
        productCategory,
        productImages
    } = req.body;
  
    const queryString = `INSERT INTO test (title, description, price,productCategory, productImages)
          VALUES ("${title}","${description}","${price}","${productCategory}","${productImages}")`;
  
    connection.query(queryString, (err, rows) => {
        if(err){
            console.log(`Failed to add users: ${err}`)
            res.sendStatus(500)
            return 
        }
        console.log("We added successfully!")
      })
})

//Delete
app.delete('/products/:id',(req,res) => {
    const productId = req.params.id;
    const queryString = "DELETE FROM test where productId = ?"
    connection.query(queryString,[productId], (err,rows,fields) => {
      if(err){
        console.log(`Failed to delete users: ${err}`)
        res.sendStatus(500)
        return 
      }else{
        console.log('We deleted successfully!')
      }
    })
  });


// //UPDATE
app.put("/products/:id", (req, res) => {
    const productId = req.params.id;
    const {
        title,
        description,
        price,
        productCategory,
        productImages
    } = req.body;

    const queryString = `UPDATE test SET title = "${title}", description = "${description}", price = "${price}",
        productCategory = "${productCategory}", productImages = "${productImages}"
        WHERE productId = ${productId}`;
  
    connection.query(queryString, (err,rows) => {
        if(err){
            console.log(`Failed to query update user: ${err}`)
            res.sendStatus(500)
            return 
        }
        res.send(rows)
      })
  });

app.listen(3001,()=>{
    console.log('Started on port 3001');
});