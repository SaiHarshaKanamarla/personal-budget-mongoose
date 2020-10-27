const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const cors = require('cors');
const budgetModel = require('./models/budgetModel');
const port = 3000;

var url = 'mongodb://localhost:27017/budget-data';
app.use('',express.static('public'));
app.use(cors());

app.get('/hello',(req,res)=>{
    res.send("sample text");    
});

//var sampleData = require('./sampleData.json');
app.get('/budget',(req,res)=>{
    //console.log(sampleData);
    //res.json(sampleData);    
    // budgetModel.find({}).then((data) =>{
    //     console.log(data);
    //     res.status(200).send(data);
    // }).catch((error)=>{
    //     console.log(error);
    //     res.status(500).send();
    // })
    mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=>{
                console.log("Connection to the database is established");
                budgetModel.find({})
                           .then((data)=>{
                               console.log(data);
                               res.status(200).send(data);
                               mongoose.connection.close();
                           })
                           .catch((err)=>{
                               console.log(err);
                               res.status(500).send();
                           })
            })
})

app.listen(port,()=>{
    console.log("App is running on port "+port);
});