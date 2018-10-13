var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var {mongoose} = require('../db/mongoose');
var {Contact} = require('../db/models/Contact');
const cors = require("cors");
var app = express ();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(cors());

//GET
app.get('/contacts',(req,res)=>{
    Contact.find().then((contact)=>{
        res.send(contact);
    },(e)=>{
        res.status(400).send(e);
    });
});

//ADD
app.post('/contacts', (req, res) => {
    const {firstName, lastName,email,comment} = req.body;
        var contact = new Contact ( {
            firstName,
            lastName,
            email,
            comment
        });
        contact.save().then(contacts => {
            res.send(contacts);
        }).catch( err => res.status(400).send(err.message));
})

app.listen(3005,()=>{
    console.log('Started on port 3005');
});

module.exports = {app};