const mongoose = require('mongoose')
const Schema = mongoose.Schema
const employeeSchema = new Schema({
    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    designation:{
        type:String,
        require:true
    },
    college:{
        type:String,
        require:true
    }
})


module.exports = mongoose.model('employee', employeeSchema);