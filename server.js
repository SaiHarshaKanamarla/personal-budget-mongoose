
const express = require('express');
const app = express();

const port = 3000;

app.use('',express.static('public'));

const budget = {
    myBudget : [
    {
        title:'Eat out',
        budget : 35
    },
    {
        title:'Rent',
        budget : 375
    },
    {
        title:'Groceries',
        budget : 110
    }
    
]}

app.get('/hello',(req,res)=>{
    res.send("sample text");    
});


app.get('/budget',(req,res)=>{
    res.json(budget);
    console.log(budget.myBudget[0].title);
})

app.listen(port,()=>{
    console.log("App is running on port "+port);
});