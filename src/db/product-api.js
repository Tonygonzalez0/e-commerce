var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var {mongoose} = require('../db/mongoose');
var {Product} = require('../db/models/Product');
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
app.get('/products',(req,res)=>{
    Product.find().then((product)=>{
        res.send(product);
    },(e)=>{
        res.status(400).send(e);
    });
})

//GET by ID
app.get('/products/:id',(req,res) =>{

    const id = req.params.id;
    Product.findById(id).then((product)=>{
        res.send({product});
    },(e)=>{
        res.status(404).send('Unable to find Product');
    });
})

//ADD
app.post('/products', (req, res) => {
    const {title, description,price,productCategory,productImages} = req.body;
        var product = new Product ( {
            title,
            description,
            price,
            productCategory,
            productImages
        });
        product.save().then(product => {
            res.send(product);
        }).catch( err => res.status(400).send(err.message));
})

//Delete
app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    Product.findByIdAndDelete(id).then(product => {
        if (product) {
            return res.send(product);
        } else {
            return res.status(404).send('Unable to find id');
        }
    }).catch(err => res.status(400).send(err));
})


//UPDATE
app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    let updatedProduct = _.pick(req.body,['title', 'description','price','productCategory','productImages']);
    Product.findByIdAndUpdate(id,{$set:updatedProduct},{new: true}).then(product => {
        if (!product) {
            return res.status(404).send('Unable to find id');
        }
        product.save().then(updatedProduct => res.send(updatedProduct));
    }).catch(err => res.status(400).send(err));
})

app.listen(3001,()=>{
    console.log('Started on port 3001');
});

module.exports = {app};