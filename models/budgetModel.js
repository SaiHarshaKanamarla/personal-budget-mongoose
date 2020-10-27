const mongoose = require('mongoose');


const budgetSchema = mongoose.Schema({
    _id:{
        type: String,
        required : true,
        trim : true
    },
    title :{
        type: String,
        required : true,
        trim: true
    },
    budget :{
        type : Number,
        required : true,        
    }
},{collection : 'budget'})

const budgetModel = mongoose.model('task',budgetSchema);

module.exports = budgetModel;